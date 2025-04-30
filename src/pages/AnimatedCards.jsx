import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "./AnimatedCards.css";

export default function AnimatedCards() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const zDistance = useTransform(scrollYProgress, [0, 1], [-300, 0]); // Aproximação 3D
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section className="animated-cards-section" ref={containerRef}>
      <h1 className="animated-title">
        Build your intelligence within Your data, your power.
      </h1>
      <div className="cards-container">
        <motion.div
          className="card"
          style={{
            opacity,
            transform: "perspective(800px)",
            z: zDistance, // Agora corrigido corretamente
          }}
        >
          <h2>Let’s Design A New App</h2>
          <p>
            Partner with us to bring your ideas to life, ensuring your vision is
            realized with expertly crafted design and innovative strategies.
          </p>
          <button className="card-btn">Get Started</button>
        </motion.div>

        <motion.div
          className="card"
          style={{
            opacity,
            transform: "perspective(800px)",
            z: zDistance, // Agora corrigido corretamente
          }}
        >
          <h2>Give Your App An Upgrade</h2>
          <p>
            Join forces with us to uplift your app, enhancing its functionality,
            user experience through insightful, targeted upgrades.
          </p>
          <button className="card-btn">Take Me There</button>
        </motion.div>
      </div>
    </section>
  );
}
