import React, { useState, useEffect } from 'react';
import { Div } from '../components';
import { SxProps } from '@mui/material';

interface CarouselProps {
  children: ReadonlyArray<React.ReactNode>;
  childrenStyles?: React.CSSProperties | SxProps;
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
    <Div>
      {children.map((child: React.ReactNode, index: number) => (
        <Div
          style={{...styles.carouselSlide,
            ...(index === currentSlide && {...styles.carouselSlideActive}),
            ...childrenStyles
          }}
          key={index}>
        {child}
      </Div>
      ))}
    </Div>
  );
};

const styles = {
  carouselSlide: {
    position: "fixed",
    width: "100%",
    height: ["30vh", "30vh", "40vh"],
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
} as const;

export default Carousel;
