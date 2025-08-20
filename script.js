document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect and scroll indicator
    const navbar = document.getElementById('navbar');
    const scrollIndicator = document.getElementById('scrollIndicator');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrolled / documentHeight) * 100;

        // Add scrolled class to navbar when user scrolls
        if (scrolled > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update scroll indicator width
        scrollIndicator.style.width = scrollPercent + '%';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements that need animation
    document.querySelectorAll('.fade-in-up').forEach(el => {
        // Only apply initial styles if element doesn't have animation delay
        if (!el.style.animationDelay) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
        observer.observe(el);
    });

    // Project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        // Make entire card clickable
        card.addEventListener('click', (e) => {
            const link = card.querySelector('.card-link');
            if (link && !e.target.closest('.card-link')) {
                // If the card link is an internal anchor, scroll to it
                if (link.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(link.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    // Navigate to external page
                    window.location.href = link.href;
                }
            }
        });

        // Enhanced hover effects
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 20px 40px rgba(124, 58, 237, 0.3)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
        });
    });

    // Typing effect for hero greeting
    const greeting = document.querySelector('.hero-greeting');
    if (greeting) {
        const text = greeting.textContent;
        greeting.textContent = '';
        greeting.style.opacity = '1';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                greeting.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Logo click handler - scroll to top
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Add subtle parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            hero.style.transform = `translateY(${parallax}px)`;
        });
    }

    // Enhanced button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Social links hover effects
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Enhanced scroll-triggered animations for timeline and cards
    const timelineItems = document.querySelectorAll('.timeline-item, .research-card, .leadership-card, .skill-category');
    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Skill tag hover effects
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-2px)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });

    // Language item hover effects
    const languageItems = document.querySelectorAll('.language-item');
    languageItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.background = 'rgba(124, 58, 237, 0.3)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.background = 'rgba(124, 58, 237, 0.1)';
        });
    });

    // Timeline item animations
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        if (item.querySelector('.timeline-content')) {
            const isOdd = Array.from(item.parentElement.children).indexOf(item) % 2 === 0;
            item.style.transform = isOdd ? 'translateX(-50px)' : 'translateX(50px)';
        }
        
        timelineObserver.observe(item);
    });

    // Add stagger animation to skill tags
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, categoryIndex) => {
        const tags = category.querySelectorAll('.skill-tag');
        tags.forEach((tag, tagIndex) => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(20px)';
            tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0)';
            }, (categoryIndex * 200) + (tagIndex * 100));
        });
    });
    const profilePhoto = document.getElementById('profilePhoto');
    if (profilePhoto) {
        profilePhoto.addEventListener('load', () => {
            profilePhoto.style.opacity = '1';
            profilePhoto.style.transform = 'scale(1)';
        });

        profilePhoto.addEventListener('error', () => {
            // Fallback to a placeholder or hide the image container
            console.log('Profile photo failed to load');
        });
    }

    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // Press 'H' to go to home
        if (e.key === 'h' || e.key === 'H') {
            document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Press 'P' to go to projects
        if (e.key === 'p' || e.key === 'P') {
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
        }
    });

    console.log('Portfolio website loaded successfully!');
});

