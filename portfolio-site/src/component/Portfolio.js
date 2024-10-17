import React from 'react';
import'./Portfolio.css'
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Portfolio = () => {
  const toggleNav = () => {
    // Function to toggle the navigation links
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">OliviaTetteh</div>
        <div className="hamburger" onClick={toggleNav}>☰</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#dashboard">Proficiencies</a>
          <a href="#ai-projects">Projects</a>
          <a href="#articles">Articles</a>
          <a href="#signup">Sign Up</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-name">OLIVIA TETTEH</h1>
            <h2 className="hero-heading">YOUR TRUSTED FULLSTACK ENGINEER</h2>
 <p className="hero-subheading">
              Transform your vision into reality - seamlessly build, scale, and optimize your digital experience from front-end to back-end brilliance with OliviaTetteh.
            </p>
            <p className="hero-tagline">
              I am a versatile FULLSTACK ENGINEER with a passion for crafting dynamic, user-friendly web applications. With expertise in both front-end and back-end development, I bring your ideas to life, ensuring a cohesive and polished digital experience.
            </p>
            <div>
              <a href="#get-started" className="hero-button">Get Started</a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-skills py-16">
          <div className="container mx-auto py-16 px-6 md:py-24 md:px-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-12 md:mb-0">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  <span className="highlight">Skills</span> and tools
                </h2>
              </div>
              <div className="md:w-2/3">
                <div className="skills-container">
                  <div className="skills-grid">
                    {['Flask', 'Sass', 'jQuery', 'JavaScript', 'HTML', 'Python', 'SQL', 'Azure', 'Nginx', 'Bash', 'Firebase', 'React', 'GitHub', 'Node.js', 'MySQL', 'CSS', 'Jinja', 'TypeScript', 'WordPress', 'Linux', 'Canva'].map(skill => (
                      <span key={skill} className="skill-item" title={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

	  {/* Ongoing Projects Section */}
        <section className="resume-section" id="ongoing-projects">
          <div className="resume-section-content">
            <h2 className="mb-5">Ongoing Projects</h2>
            <div className="row">
              <div className="col-sm-6 mb-3">
                <div className="card">
 <img src="./assets/image/Olive Blog.png" className="card-img-top" alt="Olive Blog App" />
                  <div className="card-body">
                    <h5 className="card-title">Olive Blog App</h5>
                    <p className="card-text">A blogging platform where users can create accounts, write blog posts...</p>
                    <a href="https://github.com/OliviaTetteh/Olive-Blog-App.git" className="btn btn-primary" target="_blank" rel="noreferrer">View on GitHub</a>
                  </div>                                                                </div>
              </div>
              <div className="col-sm-6 mb-3">                                           <div className="card">
                  <img src="./assets/image/Adziban.png" className="card-img-top" alt="Adziban project" />
                  <div className="card-body">
                    <h5 className="card-title">Adziban</h5>
                    <p className="card-text">A website where users can discover and share African recipes...</p>
                    <a href="#" className="btn btn-primary">Coming soon</a>
                  </div>
                </div>
              </div>
	   </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>If you would like to discuss potential opportunities or collaborate, please reach out using one of the methods below:</p>

            <div className="contact-method">
              <FaPhone /> Phone: +233 575 7766 80
            </div>
            <div className="contact-method">
              <FaEnvelope /> Email: oatetteh@gmail.com
            </div>

            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
 <input type="email" id="email" name="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" className="form-control" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="container mx-auto py-6 px-4" style={{ backgroundImage: "url('Home.png')" }}>
            <div className="flex justify-center space-x-2 mb-4">
              <a href="https://github.com/OliviaTetteh" className="text-white hover:text-gray-400 transition duration-200">
                <FaGithub size="2em" />
              </a>
              <a href="https://www.linkedin.com/in/olivia-ahinee-tetteh-0257468a/" className="text-white hover:text-gray-400 transition duration-200">
                <FaLinkedin size="2em" />
              </a>
              <a href="https://twitter.com/OliviaTetteh5" className="text-white hover:text-gray-400 transition duration-200">
                <FaTwitter size="2em" />
              </a>
            </div>
            <p>&copy; 2024 Portfolio for Olivia Tetteh. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;

