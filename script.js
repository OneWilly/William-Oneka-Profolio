
// Smooth scroll functionality
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Add animation classes on scroll
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Initialize any interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const socialButtons = document.querySelectorAll('.social-btn');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add social media links here
            if (button.classList.contains('github-btn')) {
                window.open('https://github.com/yourusername', '_blank');
            } else if (button.classList.contains('linkedin-btn')) {
                window.open('https://linkedin.com/in/yourusername', '_blank');
            }
        });
    });
});