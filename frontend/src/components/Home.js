import React from "react";
import "../styles/styles.css";
import Mypic from "./assests/My pic.jpeg"
const Home = () => {
  return (
    <div className="container">
      <div className="left-side">
        <img src={Mypic} alt="Abhishek Duggal" />
      </div>
      <div className="right-side">
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Home;
