import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-bg">
          <div className="hero-blob"></div>
          <div className="hero-grid"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="tag">Our Story</div>
            <h1>Empowering <span className="gradient-text">Small Businesses</span> Through Digital Innovation</h1>
            <p>Founded with a mission to level the digital playing field, Seraune transforms how small businesses compete in the modern marketplace.</p>
          </div>
          
          <div className="hero-graphic">
            <div className="team-illustration">
              <div className="team-member m1"></div>
              <div className="team-member m2"></div>
              <div className="team-member m3"></div>
              <div className="connection-lines"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <div className="mission-content">
            <div className="tag">Our Mission</div>
            <h2>Bridging <span className="gradient-text">Technology</span> and Business Growth</h2>
            <p>We believe that every small business deserves access to cutting-edge digital solutions. Our team is dedicated to providing affordable, scalable technologies that drive meaningful results.</p>
            
            <div className="mission-values">
              {[
                {
                  title: "Innovation",
                  description: "Constantly pushing the boundaries of what's possible for small businesses",
                  icon: "💡"
                },
                {
                  title: "Accessibility",
                  description: "Making advanced digital tools affordable and easy to implement",
                  icon: "🌐"
                },
                {
                  title: "Partnership",
                  description: "We're more than a service—we're your growth partner",
                  icon: "🤝"
                }
              ].map((value, index) => (
                <div className="value-card glass-card" key={index}>
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="team-section">
        <div className="section-header centered">
          <div className="tag">Our Team</div>
          <h2>Meet the <span className="gradient-text">Seraune</span> Innovators</h2>
          <p>A diverse group of experts passionate about digital transformation</p>
        </div>
        
        <div className="team-grid">
          {[
            {
              name: "Elena Rodriguez",
              role: "Founder & CEO",
              bio: "Tech entrepreneur with 15 years of digital strategy experience",
              image: "avatar1"
            },
            {
              name: "Michael Chen",
              role: "Chief Technology Officer",
              bio: "Veteran software architect specializing in scalable solutions",
              image: "avatar2"
            },
            {
              name: "Sarah Thompson",
              role: "Head of Digital Marketing",
              bio: "Growth marketing expert with a passion for small business success",
              image: "avatar3"
            },
            {
              name: "David Kim",
              role: "Creative Director",
              bio: "Design innovation leader transforming brand experiences",
              image: "avatar4"
            }
          ].map((member, index) => (
            <div className="team-member-card" key={index}>
              <div className={`member-image ${member.image}`}></div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Journey Timeline Section */}
      <section className="journey-section">
        <div className="section-container">
          <div className="section-header centered">
            <div className="tag">Our Journey</div>
            <h2>From <span className="gradient-text">Startup</span> to Digital Partner</h2>
            <p>Our story of growth, innovation, and commitment to small businesses</p>
          </div>
          
          <div className="timeline">
            {[
              {
                year: "2020",
                title: "Founding",
                description: "Seraune launched with a vision to democratize digital solutions"
              },
              {
                year: "2021",
                title: "First 50 Clients",
                description: "Expanded our reach and refined our service offerings"
              },
              {
                year: "2022",
                title: "Technology Expansion",
                description: "Introduced AI-powered tools and comprehensive cloud solutions"
              },
              {
                year: "2023",
                title: "National Recognition",
                description: "Named 'Small Business Technology Partner of the Year'"
              },
              {
                year: "2024",
                title: "Continued Innovation",
                description: "Launched advanced digital transformation programs"
              }
            ].map((milestone, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="about-contact-cta">
        <div className="cta-container">
          <div className="section-header light">
            <div className="tag">Let's Connect</div>
            <h2>Ready to <span className="light-gradient-text">Explore</span> Partnership?</h2>
            <p>Discover how we can help your business thrive in the digital landscape</p>
          </div>
          
          <div className="cta-buttons">
            <button className="white-btn">Schedule Consultation</button>
            <button className="outline-btn">View Services</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;