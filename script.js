document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');

    setTimeout(() => {
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    }, 2000); // Delay to ensure fade-in completes before scrolling
});
