import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import astronautHelmet from "../../assets/images/bg_helmet.png";
import "./FinalCtaSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCtaSection() {
  const helmetRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        helmetRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: helmetRef.current,
            start: "top 90%",
            end: "top 55%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 90%",
            end: "top 65%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="final-cta-section" ref={containerRef}>
      <img
        src={astronautHelmet}
        alt="Astronaut Helmet"
        className="helmet-image"
        ref={helmetRef}
      />
      <div className="content-container" ref={contentRef}>
        <h1 className="cta-title">
          Let’s Master
          <br />
          Your Journey
          <br />
          <span className="highlight">Together.</span>
        </h1>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
}
