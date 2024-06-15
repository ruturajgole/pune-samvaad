import React, { useState, useEffect } from 'react';

interface CarouselProps {
  children: ReadonlyArray<React.ReactNode>;
  childrenStyles?: React.CSSProperties;
  interval: number;
}
export const Carousel = ({ children, childrenStyles, interval = 3000 }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % children.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval, children.length]);

  return (
    <div style={styles.carousel}>
      {children.map((child: React.ReactNode, index: number) => (
        <div
          style={{...styles.carouselSlide,
            ...(index === currentSlide && {...styles.carouselSlideActive}),
            ...childrenStyles
          }}
          key={index}>
        {child}
      </div>
      ))}
    </div>
  );
};

const styles = {
  carouselSlide: {
    position: "fixed",
    width: "100%",
    height: "35vh",
    opacity: 0,
    transition: "opacity 1s ease-in-out",
    display: "flex", 
    justifyContent: "space-between", 
    flexDirection: "row", 
    padding: "2%",
    background: `
    linear-gradient(to right, #e0452c, 95%, white),
    linear-gradient(to top, #e0452c, 95%, white),
    linear-gradient(to bottom, #e0452c, 95%, white)`,
    backgroundBlendMode: "screen",
    color: "black",
    pointerEvents: "none"
  },
  carouselSlideActive: {
    opacity: 1,
    pointerEvents: "all"
  }
} as Record<string, React.CSSProperties>;

export default Carousel;
