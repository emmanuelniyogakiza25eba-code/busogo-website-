import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY, visible: true });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!position.visible) return null;

  const cursorPosition = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return (
    <>
      <div aria-hidden="true" className="cursor-ring" style={cursorPosition} />
      <div aria-hidden="true" className="cursor-dot" style={cursorPosition} />
    </>
  );
}
