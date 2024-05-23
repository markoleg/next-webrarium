"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@/app/components/Delta/Delta.css";

interface Position {
  x: number;
  y: number;
}

const ProximityMovingComponent: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  // Set initial random position
  useEffect(() => {
    const initialX = Math.floor(Math.random() * (1000 - 100) + 100);
    const initialY = Math.floor(Math.random() * (700 - 100) + 100);
    setInitialPosition({ x: initialX, y: initialY });
    setPosition({ x: initialX, y: initialY });
  }, []);

  const updatePosition = (e: MouseEvent) => {
    const distanceToElement = Math.sqrt(
      Math.pow(e.clientX - position.x, 2) + Math.pow(e.clientY - position.y, 2)
    );

    if (distanceToElement < 150) {
      const directionX = Math.random() > 0.5 ? 1 : -1;
      const directionY = Math.random() > 0.5 ? 1 : -1;
      const distance = Math.floor(Math.random() * 50);
      setPosition({
        x: position.x + directionX * distance,
        y: position.y + directionY * distance,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, [position]);

  // Reset position every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(initialPosition);
    }, 10000);
    return () => clearInterval(interval);
  }, [initialPosition]);

  return (
    <div
      className="delta"
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        // zIndex: 999,
        transition: ".4s ease-in-out",
      }}
    >
      <Image src="/sticker.webp" width={100} height={100} alt="Pupa" />
    </div>
  );
};

export default ProximityMovingComponent;
