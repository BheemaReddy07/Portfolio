import React, { useRef } from "react";

const GlowWrapper = ({ children, className = "" }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX);
    angle = (angle * 180) / Math.PI;
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`card border border-black-50 bg-black-100 rounded-xl relative overflow-hidden ${className}`}
    >
      <div className="glow" />
       {children}
    </div>
  );
};

export default GlowWrapper;
