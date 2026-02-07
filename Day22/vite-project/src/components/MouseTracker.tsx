import { useState } from "react";
import type { JSX } from "react/jsx-runtime";

interface MouseTrackerProps {
  children: (pos: { x: number; y: number }) => JSX.Element;
}

function MouseTracker({ children }: MouseTrackerProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      style={{ border: "1px solid #ccc", height: "200px" }}
      onMouseMove={handleMouseMove}
    >
      {children(pos)}
    </div>
  );
}

export default MouseTracker;
