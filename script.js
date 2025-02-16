


document.getElementById("surprise1").addEventListener("click", function() {
    document.getElementById("message").innerHTML = "🎂 You are amazing! Enjoy your special day! 🎈";
});

document.getElementById("surprise2").addEventListener("click", function() {
    document.getElementById("message").innerHTML = "💖 Sending love, joy, and lots of birthday hugs your way! 🎁";
});


/* Confetti Effect */
const canvas = document.getElementById("surprise1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
const confettiCount = 150;

function createConfetti() {
    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 5,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 3 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c) => {
        ctx.fillStyle = c.color;
        ctx.fillRect(c.x, c.y, c.size, c.size);
    });
}

function updateConfetti() {
    confetti.forEach((c) => {
        c.x += c.speedX;
        c.y += c.speedY;
        if (c.y > canvas.height) {
            c.y = 0;
            c.x = Math.random() * canvas.width;
        }
    });
}

function animateConfetti() {
    drawConfetti();
    updateConfetti();
    requestAnimationFrame(animateConfetti);
}

function startConfetti() {
    confetti = [];
    createConfetti();
    animateConfetti();
}
