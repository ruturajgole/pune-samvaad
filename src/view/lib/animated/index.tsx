import React, { useEffect, useState } from 'react';

const animate = (component: React.ReactNode) => {
  const WithEnterAnimation: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => setIsVisible(true), 250);

      return () => clearTimeout(timeout);
    }, []);

    return (
      <div className={`fade${isVisible ? '-enter-active' : '-enter'}`}>{component}</div>
    );
  };

  return <WithEnterAnimation />;
};

export default animate;
