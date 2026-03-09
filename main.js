// main.js

// CV Modal Logic
const cvModal = document.getElementById('cv-modal');
window.openCVModal = () => {
    if (cvModal) {
        cvModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }
};
window.closeCVModal = () => {
    if (cvModal) {
        cvModal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scroll
    }
};

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 64,
                behavior: 'smooth'
            });
        }
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) mobileMenu.classList.add('hidden');
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Active Section Highlighting
window.addEventListener('scroll', () => {
    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('text-mint-medium', 'border-b-2', 'border-mint-medium');
                    link.classList.add('text-gray-400');
                    if (link.getAttribute('href') === `#${section}`) {
                        link.classList.add('text-mint-medium', 'border-b-2', 'border-mint-medium');
                        link.classList.remove('text-gray-400');
                    }
                });
            }
        }
    });
});
