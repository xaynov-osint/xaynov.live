// Плавное появление блоков при прокрутке (progressive enhancement).
// Класс reveal-ready ставится сразу, чтобы не было мигания контента.
document.documentElement.classList.add('reveal-ready');

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        }
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});
