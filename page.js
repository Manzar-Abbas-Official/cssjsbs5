// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Pagination functionality
    const pageButtons = document.querySelectorAll('.page-btn:not(.disabled)');
    pageButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all buttons
            document.querySelectorAll('.page-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button if it's a number
            if (!isNaN(parseInt(this.textContent))) {
                this.classList.add('active');
            }
            
            // In a real application, this would load the corresponding page
            // For demo purposes, we'll just show which page was clicked
            const pageText = this.textContent.trim();
            if (pageText === 'Previous' || pageText === 'Next') {
                console.log(`Navigating to ${pageText} page`);
            } else {
                console.log(`Loading page ${pageText}`);
            }
        });
    });
});