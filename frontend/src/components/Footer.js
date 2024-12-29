import React from "react";
import "../styles/styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Abhishek Duggal © 2025</p>
      <div>
        <img src="./assets/linkedin.png" alt="LinkedIn" />
        <img src="./assets/github.png" alt="GitHub" />
        <img src="./assets/google-cloud.png" alt="Google Cloud" />
      </div>
    </div>
  );
};

export default Footer;
