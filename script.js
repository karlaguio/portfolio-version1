document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu-visible');
    });

    // Fun Confetti effect on click (optional)
    document.body.addEventListener('click', (e) => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = e.clientX + 'px';
        confetti.style.top = e.clientY + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 1000);
    });

    // Check if the card element exists before adding the click listener
    const projectCards = document.querySelectorAll('.card');
    if (projectCards.length > 0) {
        projectCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const link = card.querySelector('.card-link');
                if (link) {
                    window.location.href = link.href;
                }
            });
        });
    }
});
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
};
