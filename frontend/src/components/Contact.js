import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact Me</h1>
      <form id="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason</label>
          <select id="reason" name="reason" required>
            <option value="">Select a reason</option>
            <option value="website-designing">Website Designing</option>
            <option value="hire-me">Hire Me</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
