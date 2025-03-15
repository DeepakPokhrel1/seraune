import '../styles/Home.css';

const Home = () => {
  // No scroll state handling needed since we're removing the header

  return (
    <div className="home-container">
      
      {/* Hero Section with 3D Elements and Animation */}
      <section id="hero" className="hero-section">
        <div className="hero-bg">
          <div className="hero-blob"></div>
          <div className="hero-grid"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="gradient-text">Digital Solutions</span> for Small Business Growth
            </h1>
            <p>Affordable, scalable technology to help your business thrive in the digital world</p>
            
            <div className="hero-cta">
              <button className="primary-btn">Get Started</button>
              <button className="ghost-btn">
                <span className="play-icon">▶</span> Watch Demo
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
          
          <div className="hero-graphic">
            <div className="graphic-container">
              <div className="abstract-shape shape1"></div>
              <div className="abstract-shape shape2"></div>
              <div className="abstract-shape shape3"></div>
              <div className="abstract-shape shape4"></div>
              <div className="abstract-shape shape5"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <p>Scroll to explore</p>
        </div>
      </section>
      
      {/* Modern Services Section with Glass Cards */}
      <section id="services" className="services-section">
        <div className="section-header">
          <div className="tag">Our Services</div>
          <h2>How We Help Your Business <span className="gradient-text">Grow</span></h2>
          <p>Comprehensive digital solutions tailored to your specific needs</p>
        </div>
        
        <div className="services-container">
          {[
            {
              title: "Website Development",
              description: "Custom websites, e-commerce solutions, and responsive designs that convert visitors into customers",
              icon: "🌐",
              color: "#4F46E5"
            },
            {
              title: "Digital Marketing",
              description: "SEO, social media management, content creation, and targeted ad campaigns to increase your reach",
              icon: "📈",
              color: "#14B8A6"
            },
            {
              title: "IT & Cloud Solutions",
              description: "Cloud hosting, cybersecurity, IT support, and automated workflows to streamline operations",
              icon: "☁️",
              color: "#6366F1"
            },
            {
              title: "Software Development",
              description: "Custom software, mobile apps, CRM/ERP integrations, and AI-powered business tools",
              icon: "💻",
              color: "#EC4899"
            },
            {
              title: "Branding & Growth",
              description: "Logo design, brand identity, social media presence, and comprehensive growth strategies",
              icon: "🎨",
              color: "#F59E0B"
            }
          ].map((service, index) => (
            <div className="service-card glass-card" key={index} style={{'--accent-color': service.color}}>
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="card-link">
                Learn More <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <a href="/services" className="text-link">
            View All Services <span className="arrow">→</span>
          </a>
        </div>
      </section>
      
      {/* Why Choose Us with Modern Number Cards */}
      <section id="why-us" className="why-us-section">
        <div className="section-bg">
          <div className="bg-shape shape1"></div>
          <div className="bg-shape shape2"></div>
        </div>
        
        <div className="section-container">
          <div className="why-us-content">
            <div className="tag">Why Choose Us</div>
            <h2>The <span className="gradient-text">Seraune</span> Advantage</h2>
            <p>We believe in delivering exceptional value through our unique approach to digital solutions.</p>
            
            <div className="benefits-grid">
              {[
                {
                  number: "01",
                  title: "Affordable",
                  description: "Solutions scaled to your budget without compromising quality"
                },
                {
                  number: "02",
                  title: "Integrated",
                  description: "All your digital needs handled by one trusted partner"
                },
                {
                  number: "03",
                  title: "Scalable",
                  description: "Solutions that grow with your business needs"
                },
                {
                  number: "04",
                  title: "Data-Driven",
                  description: "Strategies based on analytics and market research"
                }
              ].map((benefit, index) => (
                <div className="benefit-card" key={index}>
                  <div className="benefit-number">{benefit.number}</div>
                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="why-us-visual">
            <div className="number-graphic">
              <div className="number-circle n1">1</div>
              <div className="number-circle n2">2</div>
              <div className="number-circle n3">3</div>
              <div className="connector c1"></div>
              <div className="connector c2"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials with Modern Carousel */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-header centered">
          <div className="tag">Testimonials</div>
          <h2>What Our <span className="gradient-text">Clients</span> Say</h2>
          <p>Success stories from businesses like yours</p>
        </div>
        
        <div className="testimonials-container">
          <div className="testimonial-card active">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p>Seraune transformed our online presence and helped us increase sales by 45% in just six months. Their team was professional, responsive, and truly understood our business needs.</p>
              
              <div className="testimonial-author">
                <div className="author-badge">JS</div>
                <div className="author-info">
                  <h4>Jane Smith</h4>
                  <p>CEO, Craft Brewery Co.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="carousel-controls">
            <button className="carousel-dot active"></button>
            <button className="carousel-dot"></button>
            <button className="carousel-dot"></button>
          </div>
        </div>
      </section>
      
      {/* Blog Section with Modern Cards */}
      <section id="blog" className="blog-section">
        <div className="section-header">
          <div className="tag">Latest Insights</div>
          <h2>Digital <span className="gradient-text">Knowledge Hub</span></h2>
          <p>Advice and strategies for small business growth</p>
        </div>
        
        <div className="blog-grid">
          {[
            {
              category: "Digital Marketing",
              title: "5 Essential SEO Strategies for Small Businesses",
              excerpt: "Learn how to improve your search rankings and drive more traffic to your website...",
              date: "Mar 10, 2025",
              readTime: "5 min read"
            },
            {
              category: "Web Development",
              title: "Why Your Business Needs a Mobile-First Website",
              excerpt: "Discover how mobile optimization can boost engagement and conversion rates...",
              date: "Mar 5, 2025",
              readTime: "4 min read"
            },
            {
              category: "Cloud Solutions",
              title: "Cloud Migration: A Step-by-Step Guide",
              excerpt: "Follow this comprehensive approach to safely move your business to the cloud...",
              date: "Feb 28, 2025",
              readTime: "7 min read"
            }
          ].map((post, index) => (
            <a href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="blog-card" key={index}>
              <div className="card-accent" style={{backgroundColor: index % 2 === 0 ? '#4F46E5' : '#14B8A6'}}></div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="category">{post.category}</span>
                  <div className="meta-divider"></div>
                  <span className="date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="card-footer">
                  <span className="read-time">{post.readTime}</span>
                  <span className="read-more">Read Article <span className="arrow">→</span></span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="blog-cta">
          <a href="/blog" className="text-link">
            View All Articles <span className="arrow">→</span>
          </a>
        </div>
      </section>
      
      {/* Contact CTA with Gradient Background */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="section-header light">
            <div className="tag">Get Started</div>
            <h2>Ready to <span className="light-gradient-text">Transform</span> Your Business?</h2>
            <p>Schedule a free consultation to discuss your specific needs and goals</p>
          </div>
          
          <div className="cta-buttons">
            <button className="white-btn">Contact Us</button>
            <button className="outline-btn">View Pricing</button>
          </div>
          
          <div className="contact-decoration">
            <div className="deco-item item1"></div>
            <div className="deco-item item2"></div>
            <div className="deco-item item3"></div>
          </div>
        </div>
      </section>
      
      {/* No footer - you'll use your own */}
    </div>
  );
};

export default Home;