import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Typewriter from "typewriter-effect"; // Import Typewriter library
import Mypic from "./assests/Abhi.JPG";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 2, y: 1 });

  // Update mouse position when the mouse moves
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="container">
      {/* Mouse Tracker */}
      <div
        className="mouse-tracker-dot"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>
      <div
        className="mouse-tracker-circle"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>

      {/* Left side: Profile Image */}
      <div className="left-side">
        <img src={Mypic} alt="Abhishek Duggal" className="profile-pic" />
      </div>

      {/* Right side: Navbar and Typing Effect */}
      <div className="right-side">
        {/* Navigation Bar */}
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Typing Effect */}
        <div className="intro-text">
          <h1 className="highlight">
            <Typewriter
              options={{
                strings: [
                  "I am Abhishek Duggal",
                  "A passionate freelancer",
                  "Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                pauseFor: 1500,
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
