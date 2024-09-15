// src/components/magicui/animated-gradient-text.jsx
import React from 'react';
import styles from '../magicui/animated-gradient-text.module.css'; // Import the CSS module

const AnimatedGradientText = ({ children }) => {
  return (
    <div className={styles.animatedGradientText}>
      {children}
    </div>
  );
};

export default AnimatedGradientText;
