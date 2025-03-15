const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Enhanced CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'], // Specific allowed origins
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email transporter setup
let transporter;

try {
  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // SSL port
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    logger: true,
    debug: true
  });

  // Verify the transporter
  transporter.verify(function (error, success) {
    if (error) {
      console.error('❌ Email transporter verification failed:', error);
    } else {
      console.log('✅ Email server is ready to send messages');
    }
  });
} catch (error) {
  console.error('❌ Failed to create email transporter:', error);
}

// Root route to test if server is running
app.get('/', (req, res) => {
  res.send('Seraune Contact Form Backend is running!');
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('📩 Received form submission:', req.body);
  
  const { name, email, phone, subject, message, service } = req.body;
  
  // Validation
  if (!name || !email || !subject || !message || !service) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    });
  }
  
  try {
    // Email to your company
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message}</p>
        <br>
        <small>Received at: ${new Date().toLocaleString()}</small>
      `
    };
    
    // Confirmation email to the customer
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Seraune!',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hello ${name},</p>
        <p>We've received your message and appreciate your interest in our services. A member of our team will review your inquiry and get back to you within 24-48 hours.</p>
        <h3>Your message details:</h3>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
        <br>
        <p>Best regards,</p>
        <p>The Seraune Team</p>
        <br>
        <small>Received at: ${new Date().toLocaleString()}</small>
      `
    };
    
    // Send emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMailOptions);
    
    console.log('✅ Form submission processed successfully');
    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully'
    });
    
  } catch (error) {
    console.error('❌ Error processing submission:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to process your message', 
      error: error.toString() 
    });
  }
});

// Server start
app.listen(PORT, () => {
  console.log(`
✅ Server running on port ${PORT}
📝 API Endpoints:
  - GET  / - Server status check
  - POST /api/contact - Submit contact form
`);
});