const galaxyContainer = document.querySelector(".galaxy-container");

// Create and add the nebula element to the container
const nebula = document.createElement("div");
nebula.classList.add("nebula");
galaxyContainer.appendChild(nebula);

// Function to update nebula position based on mouse movement
function updateNebulaPosition(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  nebula.style.left = `${mouseX}px`;
  nebula.style.top = `${mouseY}px`;
}

// Add event listener for mouse movement
document.addEventListener("mousemove", updateNebulaPosition);

// Function to create a twinkling star element
function createTwinklingStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  // Random star size (small twinkling stars)
  const size = Math.random() * 13 + 1 + "px"; // Star size between 1px and 14px
  star.style.width = size;
  star.style.height = size;

  // Random position for stars
  star.style.left = Math.random() * 100 + "vw"; // Horizontal position
  star.style.top = Math.random() * 100 + "vh"; // Vertical position
  star.style.animationDuration = 1 + "s"; // Random twinkling speed (1-2 seconds)

  // Add the star to the galaxy container
  galaxyContainer.appendChild(star);
}

// Function to create a falling meteor element
function createMeteor() {
  const meteor = document.createElement("div");
  meteor.classList.add("meteor");

  // Random starting position for meteors
  meteor.style.left = Math.random() * 100 + "vw"; // Random horizontal position
  meteor.style.top = Math.random() * -10 + "vh"; // Slightly off the top of the screen
  meteor.style.animationDuration = Math.random() * 2 + 1.5 + "s"; // Random fall speed (1.5-3.5 seconds)

  // Add the meteor to the galaxy container
  galaxyContainer.appendChild(meteor);

  // Remove the meteor after its animation ends
  setTimeout(() => {
    meteor.remove();
  }, 4000);
}

// Generate twinkling stars at the beginning
for (let i = 0; i < 100; i++) {
  createTwinklingStar();
}

// Create meteors at random intervals to simulate continuous motion
setInterval(createMeteor, 1000); // Create a meteor every second
