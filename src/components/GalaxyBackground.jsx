import React, { useEffect, useRef } from 'react';
import './Galaxy.css'; // Your existing CSS
import './Header.css'; // New CSS for the header
import Moon from'./Moon';
import Header from './Header';
import About from './About';

const GalaxyBackground = () => {
  const galaxyContainerRef = useRef(null);

  useEffect(() => {
    const galaxyContainer = galaxyContainerRef.current;

    // Create and add the nebula element to the container
    const nebula = document.createElement("div");
    nebula.classList.add("nebula");
    galaxyContainer.appendChild(nebula);

    // Function to update nebula position based on mouse movement
    const updateNebulaPosition = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      nebula.style.left = `${mouseX}px`;
      nebula.style.top = `${mouseY}px`;
    };

    document.addEventListener("mousemove", updateNebulaPosition);

    // Generate stars and meteors (same logic as before)
    const createTwinklingStar = () => {
      const star = document.createElement("div");
      star.classList.add("star");
      const size = Math.random() * 13 + 1 + "px";
      star.style.width = size;
      star.style.height = size;
      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * 100 + "vh";
      star.style.animationDuration = 1 + "s";
      galaxyContainer.appendChild(star);
    };

    const createMeteor = () => {
      const meteor = document.createElement("div");
      meteor.classList.add("meteor");
      meteor.style.left = Math.random() * 100 + "vw";
      meteor.style.top = Math.random() * -10 + "vh";
      meteor.style.animationDuration = Math.random() * 2 + 1.5 + "s";
      galaxyContainer.appendChild(meteor);

      setTimeout(() => {
        meteor.remove();
      }, 4000);
    };

    for (let i = 0; i < 100; i++) {
      createTwinklingStar();
    }

    const meteorInterval = setInterval(createMeteor, 1000);

    return () => {
      document.removeEventListener("mousemove", updateNebulaPosition);
      clearInterval(meteorInterval);
    };
  }, []);

  return (
    <div className="galaxy-container" ref={galaxyContainerRef}>
      <Header />
      <Moon/>
      <About/>
    </div>
  );
};

export default GalaxyBackground;
