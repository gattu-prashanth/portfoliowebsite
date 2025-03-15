// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    // Active link highlighting based on scroll position
    const sections = document.querySelectorAll('section');
    
    function highlightActiveLink() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Scroll event for active link highlighting
    window.addEventListener('scroll', highlightActiveLink);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Form submission handling
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;
            
            // Simple form validation
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real application, you would send this data to a server
            alert(`Thank you for your message, ${name}! I will get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Add contact form to the HTML if it doesn't exist yet
    if (!document.querySelector('#contact-form')) {
        const contactSection = document.createElement('section');
        contactSection.id = 'contact';
        
        contactSection.innerHTML = `
            <div class="container">
                <div class="section-title">
                    <h2>Contact Me</h2>
                    <div class="underline"></div>
                </div>
                <div class="contact-container">
                    <div class="contact-info">
                        <h3>Get In Touch</h3>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-details">
                                <h4>Location</h4>
                                <p>Hyderabad, India 500035</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <h4>Email</h4>
                                <p>prashanthgattu70@gmail.com</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-details">
                                <h4>Phone</h4>
                                <p>+91 7396990894</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fab fa-linkedin"></i>
                            </div>
                            <div class="contact-details">
                                <h4>LinkedIn</h4>
                                <p><a href="https://linkedin.com/in/gattu-prashanth-7b2699210" target="_blank">Prashanth Gattu</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="contact-form">
                        <form id="contact-form">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" class="form-control" required></textarea>
                            </div>
                            <button type="submit" class="btn primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
        
        // Add the contact section before the footer or at the end of body
        const footer = document.querySelector('footer');
        if (footer) {
            document.body.insertBefore(contactSection, footer);
        } else {
            document.body.appendChild(contactSection);
        }
    }
    
    // Add footer if it doesn't exist yet
    if (!document.querySelector('footer')) {
        const footer = document.createElement('footer');
        
        footer.innerHTML = `
            <div class="container">
                <div class="footer-content">
                    <div class="footer-column">
                        <h3>Prashanth Gattu</h3>
                        <p>Full Stack Java Developer & AWS Certified Professional based in Hyderabad, India.</p>
                        <div class="footer-social">
                            <a href="https://linkedin.com/in/gattu-prashanth-7b2699210" target="_blank"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div class="footer-column">
                        <h3>Quick Links</h3>
                        <ul class="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Contact Info</h3>
                        <ul class="footer-links">
                            <li><i class="fas fa-map-marker-alt"></i> Hyderabad, India 500035</li>
                            <li><i class="fas fa-envelope"></i> prashanthgattu70@gmail.com</li>
                            <li><i class="fas fa-phone"></i> +91 7396990894</li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} Prashanth Gattu. All Rights Reserved.</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(footer);
    }
    
    // Function to reveal elements on scroll
    function revealOnScroll() {
        const revealElements = document.querySelectorAll('.skill-item, .project-card, .certification-item');
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for animation
    const animatedElements = document.querySelectorAll('.skill-item, .project-card, .certification-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    // Run reveal function on load and scroll
    window.addEventListener('load', revealOnScroll);
    window.addEventListener('scroll', revealOnScroll);
});

// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Add preloader HTML if needed
if (!document.querySelector('.preloader')) {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="loader">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
    `;
    document.body.prepend(preloader);
    
    // Add preloader CSS
    const style = document.createElement('style');
    style.textContent = `
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        
        .loader {
            display: flex;
            gap: 10px;
        }
        
        .circle {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: var(--primary-color);
            animation: bounce 1.5s infinite ease-in-out;
        }
        
        .circle:nth-child(1) {
            animation-delay: 0s;
        }
        
        .circle:nth-child(2) {
            animation-delay: 0.3s;
        }
        
        .circle:nth-child(3) {
            animation-delay: 0.6s;
        }
        
        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
        }
    `;
    document.head.appendChild(style);
}

// Typing animation for hero section
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    
    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];
        
        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        
        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        
        // Initial Type Speed
        let typeSpeed = 150;
        
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        
        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init TypeWriter on load
window.addEventListener('load', function() {
    // Check if the element exists
    const txtElement = document.querySelector('.hero-content h2');
    if (txtElement) {
        const originalText = txtElement.textContent;
        const words = ['Full Stack Java Developer', 'AWS Certified Professional', 'DevOps Enthusiast'];
        new TypeWriter(txtElement, words, 2000);
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.init("YOUR_USER_ID");
    
    emailjs.sendForm('gmail', 'template_id', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Error: ' + JSON.stringify(error));
        });
});