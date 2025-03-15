// src/routes/payments.ts
import express from 'express'
import { PrismaClient } from '@prisma/client'
import { authenticateJWT } from '../middleware/auth'
import stripe from '../config/stripe'

const router = express.Router()
const prisma = new PrismaClient()

// Create payment intent
router.post('/create-payment-intent', authenticateJWT, async (req, res) => {
  try {
    // @ts-ignore
    const customerId = req.user?.id
    const { bookingId } = req.body

    // Fetch booking details
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: { serviceOffering: true }
    })

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' })
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(booking.totalPrice * 100), // Convert to cents
      currency: 'usd',
      metadata: {
        bookingId: booking.id,
        customerId: customerId
      }
    })

    // Update booking with payment intent
    await prisma.booking.update({
      where: { id: bookingId },
      data: { 
        status: 'CONFIRMED',
        paymentIntentId: paymentIntent.id 
      }
    })

    res.json({
      clientSecret: paymentIntent.client_secret
    })
  } catch (error) {
    res.status(500).json({ message: 'Error creating payment intent', error })
  }
})

// Webhook for payment confirmation
router.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature']

  try {
    const event = stripe.webhooks.constructEvent(
      req.body, 
      sig as string, 
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object
        
        // Update booking status
        await prisma.booking.update({
          where: { paymentIntentId: paymentIntent.id },
          data: { 
            status: 'CONFIRMED',
            paymentConfirmed: true 
          }
        })
        break

      case 'payment_intent.payment_failed':
        const failedPaymentIntent = event.data.object
        
        // Update booking status
        await prisma.booking.update({
          where: { paymentIntentId: failedPaymentIntent.id },
          data: { 
            status: 'CANCELLED' 
          }
        })
        break

      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    res.json({received: true})
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err}`);
  }
})

// Get payment history
router.get('/history', authenticateJWT, async (req, res) => {
  try {
    // @ts-ignore
    const customerId = req.user?.id

    const paymentHistory = await prisma.booking.findMany({
      where: { 
        customerId,
        paymentConfirmed: true 
      },
      include: {
        serviceOffering: true,
        serviceProvider: {
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true
              }
            }
          }
        }
      },
      orderBy: {
        scheduledDate: 'desc'
      }
    })

    res.json(paymentHistory)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payment history', error })
  }
})

export default router