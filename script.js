// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple slider functionality for testimonials
const slider = document.querySelector('.testimonials-slider');
const slideWidth = slider.querySelector('.testimonial').offsetWidth;
let offset = 0;

function nextSlide() {
    if (offset + slideWidth < slider.scrollWidth) {
        offset += slideWidth;
    } else {
        offset = 0;
    }
    slider.scrollTo({
        left: offset,
        behavior: 'smooth'
    });
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

