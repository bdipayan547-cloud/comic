// scripts.js
// Main JavaScript for the comic website
document.addEventListener(\'DOMContentLoaded\', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(\'nav a\');
    
    navLinks.forEach(link => {
        link.addEventListener(\'click\', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute(\'href\');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: \'smooth\'
                });
            }
        });
    });

    // Comic card hover effect enhancement
    const comicCards = document.querySelectorAll(\'.comic-card\');
    
    comicCards.forEach(card => {
        card.addEventListener(\'mouseenter\', function() {
            this.style.transform = \'translateY(-10px)\';
        });
        
        card.addEventListener(\'mouseleave\', function() {
            this.style.transform = \'translateY(0)\';
        });
    });

    // Newsletter signup functionality (placeholder)
    const newsletterForm = document.createElement(\'form\');
    newsletterForm.innerHTML = `
        <input type="email" placeholder="Your email address" style="padding: 10px; margin: 10px 0; width: 200px;">
        <button type="submit" style="background-color: #3498db; color: white; padding: 10px 15px;">Subscribe</button>
    `;
    
    // Add to footer or another appropriate location
    const footer = document.querySelector(\'footer\');
});
