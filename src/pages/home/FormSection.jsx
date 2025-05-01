import React from "react";
import "./FormSection.css";

export default function FormSection() {
  return (
    <section className="form-section">
      <div className="form-content">
        <h1 className="form-title">
          Shape Your Business’s Future: Begin Your App Creation
        </h1>
        <form className="form-container">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <button type="submit" className="form-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
