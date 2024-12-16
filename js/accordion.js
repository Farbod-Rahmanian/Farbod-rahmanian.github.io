document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.icon');

        const isOpen = content.classList.contains('open');

        document.querySelectorAll('.accordion-content').forEach(c => {
            c.classList.remove('open');
            c.previousElementSibling.querySelector('.icon').classList.replace('bi-chevron-up', 'bi-chevron-down');
        });

        if (!isOpen) {
            content.classList.add('open');
            icon.classList.replace('bi-chevron-down', 'bi-chevron-up');
        }
    });
});
