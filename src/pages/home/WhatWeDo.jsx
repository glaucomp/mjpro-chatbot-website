import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import "./WhatWeDo.css";

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDo() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const services = [
    "Facilitation",
    "Product Strategy",
    "Prototyping",
    "UX/UI",
    "Development",
  ];

  return (
    <section className="what-we-do-section" ref={containerRef}>
      <h3 className="subtitle">WHAT WE DO</h3>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            className="service-item"
            key={service}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <span className="service-number">{`0${index + 1}`}</span>
            <h2 className="service-name">{service}</h2>
          </div>
        ))}
      </div>
      <button className="explore-button">Explore</button>
    </section>
  );
}
