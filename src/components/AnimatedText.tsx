import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  texts: string[];
  className?: string;
  speed?: number;
}

export const AnimatedText = ({ texts, className = "", speed = 2000 }: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 300);
    }, speed);

    return () => clearInterval(interval);
  }, [texts.length, speed]);

  return (
    <span 
      className={`transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      } ${className}`}
    >
      {texts[currentIndex]}
    </span>
  );
};