import React from "react";
import "./ContentSection.css";

export default function ContentSection({
  subtitle,
  title,
  description,
  buttonLabel,
  videoSrc,
  reverse = false,
}) {
  return (
    <section className={`content-section ${reverse ? "reverse" : ""}`}>
      <div className="content-info">
        <h4 className="subtitle">{subtitle}</h4>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <button className="cta-button">{buttonLabel}</button>
      </div>
      <div className="content-media">
        <video autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      </div>
    </section>
  );
}
