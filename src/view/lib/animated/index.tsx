import React, { useState } from 'react';

const animate = (component: React.ReactNode) => {
  const WithEnterAnimation: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle isVisible to trigger animation
    setTimeout(() => setIsVisible(true), 250);

    return (
      <div className={`fade${isVisible ? '-enter-active' : '-enter'}`}>{component}</div>
    );
  };

  return <WithEnterAnimation />;
};

export default animate;
