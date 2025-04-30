import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import "./AnimatedCards.css";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCards() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { x: i === 0 ? -350 : 350, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,

              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="animated-cards-section" ref={containerRef}>
      <h1 className="animated-title">
        Build your intelligence within Your data, your power.
      </h1>
      <div className="cards-container">
        <div className="card" ref={(el) => (cardsRef.current[0] = el)}>
          <h2>Let’s Design A New App</h2>
          <p>
            Partner with us to bring your ideas to life, ensuring your vision is
            realized with expertly crafted design and innovative strategies.
          </p>
          <button className="card-btn">Get Started</button>
        </div>

        <div className="card" ref={(el) => (cardsRef.current[1] = el)}>
          <h2>Give Your App An Upgrade</h2>
          <p>
            Join forces with us to uplift your app, enhancing its functionality,
            user experience through insightful, targeted upgrades.
          </p>
          <button className="card-btn">Take Me There</button>
        </div>
      </div>
    </section>
  );
}
