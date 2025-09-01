"use client";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa6";

export default function Icon3D() {
  const iconRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");

  const intensity = 0.8;
  const size = 120;
  const depth = 50;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!iconRef.current) return;

      const rect = iconRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from center
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Convert to rotation angles based on mouse position relative to icon
      const maxRotation = 60; // Maximum rotation in degrees
      const rotateY = (deltaX / window.innerWidth) * maxRotation * intensity;
      const rotateX = -(deltaY / window.innerHeight) * maxRotation * intensity;

      setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [intensity]);

  return (
    <div
      ref={iconRef}
      className="relative flex items-center justify-center"
      style={{
        perspective: "1000px",
        width: size,
        height: size,
      }}
    >
      {/* 3D Cube Structure */}
      <div
        className="relative transition-transform duration-200 ease-out"
        style={{
          transform: transform,
          transformStyle: "preserve-3d",
          width: size * 0.8,
          height: size * 0.8,
        }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 flex items-center justify-center border border-slate-600"
          style={{
            transform: `translateZ(${depth / 2}px)`,
            background: "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
            boxShadow: "inset 0 0 20px rgba(255,255,255,0.1)",
          }}
        >
          <FaGithub className="w-16 h-16 text-white drop-shadow-lg" />
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 flex items-center justify-center border border-slate-700"
          style={{
            transform: `rotateY(180deg) translateZ(${depth / 2}px)`,
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          }}
        >
          <FaGithub className="w-16 h-16 text-slate-500 opacity-50" />
        </div>

        {/* Glow Effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: `translateZ(${depth / 2 + 5}px)`,
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}
