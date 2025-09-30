import React, { useEffect, useRef, useState } from 'react';

// Lightweight smooth cursor inspired by MagicUI behavior
export function SmoothCursor() {
  const ringRef = useRef(null);
  const arrowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState('black');

  // Function to get the background color at cursor position
  const getBackgroundColor = (x, y) => {
    const element = document.elementFromPoint(x, y);
    if (!element) return 'white';
    
    // Get computed styles
    const styles = window.getComputedStyle(element);
    let backgroundColor = styles.backgroundColor;
    
    // If background is transparent, check parent elements
    if (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
      let parent = element.parentElement;
      while (parent && parent !== document.body) {
        const parentStyles = window.getComputedStyle(parent);
        const parentBg = parentStyles.backgroundColor;
        if (parentBg !== 'rgba(0, 0, 0, 0)' && parentBg !== 'transparent') {
          backgroundColor = parentBg;
          break;
        }
        parent = parent.parentElement;
      }
    }
    
    // If still transparent, check body
    if (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
      const bodyStyles = window.getComputedStyle(document.body);
      backgroundColor = bodyStyles.backgroundColor;
    }
    
    return backgroundColor;
  };

  // Function to determine if background is dark or light
  const isDarkBackground = (color) => {
    // Handle different color formats
    let r, g, b;
    
    if (color.startsWith('rgb')) {
      const matches = color.match(/\d+/g);
      if (matches && matches.length >= 3) {
        r = parseInt(matches[0]);
        g = parseInt(matches[1]);
        b = parseInt(matches[2]);
      }
    } else if (color.startsWith('#')) {
      const hex = color.slice(1);
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    } else {
      // Default to light background for unknown formats
      return false;
    }
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
  };

  useEffect(() => {
    const handleMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      
      // Update cursor color based on background
      const bgColor = getBackgroundColor(e.clientX, e.clientY);
      const isDark = isDarkBackground(bgColor);
      setCursorColor(isDark ? 'white' : 'black');
      
      if (arrowRef.current) {
        arrowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove);
    const id = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div 
        ref={ringRef} 
        className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 transition-colors duration-200"
        style={{ 
          borderColor: 'rgba(255, 255, 255, 0.8)'
        }}
      ></div>
      <svg
        ref={arrowRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 transition-colors duration-200"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={cursorColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 2L3 20L8.2 14.8L12.5 22L15.3 20.4L11 13.2L18 13.2L3 2Z" />
      </svg>
    </div>
  );
}

export default SmoothCursor;


