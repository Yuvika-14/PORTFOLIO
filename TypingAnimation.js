import React, { useState, useEffect } from 'react';
import './type.css';

const TypingAnimation = ({ texts, speed = 250, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
          setTimeout(() => {}, pause);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, charIndex, isDeleting, speed, pause, texts, textIndex]);

  return (
    <div className="typing-container">
      <span className="typing-text">{displayedText}</span>
      <span className="typing-cursor">|</span>
    </div>
  );
};

export default TypingAnimation;
