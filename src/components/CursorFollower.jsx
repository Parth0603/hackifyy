import React, { useEffect, useRef } from 'react';

const CursorFollower = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let animationId;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth following animation with different speeds
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.1;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.1;
      
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.8;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.8;

      cursor.style.transform = `translate(${cursorPos.current.x - 20}px, ${cursorPos.current.y - 20}px)`;
      cursorDot.style.transform = `translate(${dotPos.current.x - 4}px, ${dotPos.current.y - 4}px)`;

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      cursorDot.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursorDot.style.opacity = '0';
    };

    const handleMouseDown = () => {
      cursor.style.transform += ' scale(0.8)';
      cursorDot.style.transform += ' scale(1.5)';
    };

    const handleMouseUp = () => {
      cursor.style.transform = cursor.style.transform.replace(' scale(0.8)', '');
      cursorDot.style.transform = cursorDot.style.transform.replace(' scale(1.5)', '');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Main cursor circle */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid rgba(99, 102, 241, 0.6)',
          background: 'rgba(99, 102, 241, 0.1)',
          backdropFilter: 'blur(10px)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: '0',
          transition: 'opacity 0.3s ease, transform 0.1s ease',
          mixBlendMode: 'difference'
        }}
      />

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          pointerEvents: 'none',
          zIndex: 10000,
          opacity: '0',
          transition: 'opacity 0.3s ease, transform 0.05s ease',
          boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)'
        }}
      />

      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        a, button, [role="button"], input, textarea, select {
          cursor: none !important;
        }
        
        a:hover ~ div[ref], 
        button:hover ~ div[ref],
        [role="button"]:hover ~ div[ref] {
          transform: scale(1.5) !important;
          border-color: rgba(139, 92, 246, 0.8) !important;
          background: rgba(139, 92, 246, 0.2) !important;
        }
      `}</style>
    </>
  );
};

export default CursorFollower;