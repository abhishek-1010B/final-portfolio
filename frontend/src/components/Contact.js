import React from "react";
import "../styles/styles.css";

const Contact = () => {
  return (
    <div className="container">
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />
        <label>Location:</label>
        <input type="text" placeholder="Your Location" />
        <label>Time Limit:</label>
        <select>
          <option>4-5 days (Urgent, extra charges)</option>
          <option>10-15 days</option>
          <option>15-20 days</option>
          <option>30 days</option>
        </select>
      </form>
    </div>
  );
};

export default Contact;
