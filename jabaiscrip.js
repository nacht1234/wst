//script for codm wiki

// smooth scrolling
const anchorLinks = document.querySelectorAll('nav ul li a');

anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll to the target element smoothly
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// dark-light toggle
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const article = document.querySelector('article');
const footer = document.querySelector('footer');
const mark = document.querySelector('mark');
const detailsElements = document.querySelectorAll('details');
const asideElements = document.querySelectorAll('aside');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    header.classList.toggle('light-mode');
    nav.classList.toggle('light-mode');
    article.classList.toggle('light-mode');
    footer.classList.toggle('light-mode');
    mark.classList.toggle('light-mode');
    
    // Toggle light mode for details and aside elements
    detailsElements.forEach(detail => detail.classList.toggle('light-mode'));
    asideElements.forEach(aside => aside.classList.toggle('light-mode'));

    // Change icon based on mode
    if (body.classList.contains('light-mode')) {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block'; // Show button
    } else {
        backToTopButton.style.display = 'none'; // Hide button
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Toggle navigation menu on hamburger click
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});