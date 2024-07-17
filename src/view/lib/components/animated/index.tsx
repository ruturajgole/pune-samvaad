import React, { useState } from 'react';

const animate = (component: React.ReactNode) => {
  const WithEnterAnimation: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle isVisible to trigger animation
    setTimeout(() => setIsVisible(true), 150);

    return (
      <div style={styles.container} className={`fade${isVisible ? '-enter-active' : '-enter'}`}>{component}</div>
    );
  };

  return <WithEnterAnimation />;
};

const styles = {
  container: {
    height: "100%"
  }
}

export default animate;
