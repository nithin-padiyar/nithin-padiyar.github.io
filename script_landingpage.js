function generateDynamicBalls() {
  const container = document.getElementById("circle-bg");

  // Remove previously generated balls
  document.querySelectorAll(".bounce-ball").forEach(el => el.remove());

  // Calculate how many new balls based on screen width
  const screenWidth = window.innerWidth;
  const additionalBalls = Math.floor((screenWidth - 600) / 200); // e.g., 1 ball per 200px beyond 600

  const sizes = ["ball-sm", "ball-md", "ball-lg"];

  for (let i = 0; i < additionalBalls; i++) {
    const ball = document.createElement("div");
    ball.classList.add("bounce-ball");

    // Random size
    const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
    ball.classList.add(sizeClass);

    // Random position
    ball.style.left = `${Math.random() * 100}%`;
    ball.style.top = `${Math.random() * 100}%`;

    // Vary animation duration slightly
    const duration = 5 + Math.random() * 4;
    ball.style.animationDuration = `${duration}s`;

    container.appendChild(ball);
  }
}

// Run on load and on resize
window.addEventListener("load", generateDynamicBalls);
window.addEventListener("resize", generateDynamicBalls);
