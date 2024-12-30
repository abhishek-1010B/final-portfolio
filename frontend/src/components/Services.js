import React from "react";
import "../styles/services.css"; 

const Services = () => {
  return (
    <div>
      <section id="services">
      <h1>Services</h1>
        <div className="service-box" id="box-1">
          <div className="box-content">
            <p>Website from Scratch</p>
          </div>
        </div>
        <div className="service-box" id="box-2">
          <div className="box-content">
            <p>Updating the existing website</p>
          </div>
        </div>
        <div className="service-box" id="box-3">
          <div className="box-content">
            <p>Hire me for your company</p>
          </div>
        </div>
        <div className="service-box" id="box-4">
          <div className="box-content">
            <p>Collaboration</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
