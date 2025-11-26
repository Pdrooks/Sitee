document.addEventListener('DOMContentLoaded', () => {
    
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 42, 143, 0.98)';
            header.style.padding = '0.8rem 5%';
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
        } else {
            header.style.background = 'rgba(0, 42, 143, 0.95)';
            header.style.padding = '1rem 5%';
            header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        }
    });
});
