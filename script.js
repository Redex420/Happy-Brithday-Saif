// --- Code to Add: Selectors for the overlay and body ---
const card = document.querySelector('.card');
const overlay = document.querySelector('.overlay');
const body = document.body;

// Your existing confetti container code (unchanged)
const confettiRoot = document.createElement('div');
confettiRoot.className = 'confetti-container';
document.body.appendChild(confettiRoot);

// --- Code to Add: A function to close the card ---
function closeCard() {
    if (!card.classList.contains('is-open')) {
        return; // Do nothing if it's already closed
    }
    card.classList.remove('is-open');
    body.classList.remove('card-open'); // This hides the overlay
}

// Your existing card click listener, with one line added to show the overlay
card.addEventListener('click', function () {
    if (card.classList.contains('is-open')) return;
    card.classList.add('is-open');
    body.classList.add('card-open'); // <-- This line was added
    createConfetti();
});

// --- Code to Add: An event listener for the overlay ---
overlay.addEventListener('click', closeCard);


// Your entire createConfetti function (unchanged)
function createConfetti() {
    const colors = ['#fce4ec', '#f8bbd0', '#e1bee7', '#c3aed6', '#ace0f9', '#ffffff'];
    const confettiCount = 120;

    for (let i = 0; i < confettiCount; i++) {
        const conf = document.createElement('div');
        const size = Math.random() * 14 + 6; // 6 - 20px
        const left = Math.random() * 100; // vw
        const startY = Math.random() * -40; // start slightly above viewport (vh)
        const duration = Math.random() * 3 + 3; // 3 - 6s
        const delay = Math.random() * 1.5; // stagger start
        const rotateStart = Math.random() * 360; // start rotation
        const rotateEnd = rotateStart + (Math.random() * 720 + 180); // spin while falling

        conf.style.position = 'absolute';
        conf.style.left = `${left}vw`;
        conf.style.top = `${startY}vh`;
        conf.style.width = `${size}px`;
        conf.style.height = `${size}px`;
        conf.style.borderRadius = `${Math.random() > 0.6 ? '0' : '50%'}`; // mix shapes
        conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        conf.style.opacity = '0.95';
        conf.style.pointerEvents = 'none';
        conf.style.zIndex = '9999';
        conf.style.transform = `rotate(${rotateStart}deg)`;
        conf.style.animation = `fall ${duration}s linear ${delay}s forwards`;
        conf.style.filter = `blur(${Math.random()*0.3}px)`;

        if (Math.random() > 0.8) {
            conf.style.width = `${size * 1.6}px`;
            conf.style.height = `${size * 0.6}px`;
            conf.style.borderRadius = '3px';
        }

        confettiRoot.appendChild(conf);

        setTimeout(() => conf.remove(), (duration + delay) * 1000 + 50);
    }
}