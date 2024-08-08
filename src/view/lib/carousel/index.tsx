import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Div, Text } from '../components';
import { SxProps } from '@mui/material';

interface CarouselProps {
  children: ReadonlyArray<React.ReactNode>;
  childrenStyles?: React.CSSProperties | SxProps;
  interval: number;
  title?: string;
}
export const Carousel = ({ title, children, childrenStyles, interval = 3000 }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSlideInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % children.length);
    }, interval);
  }, [children.length, interval]);

  useEffect(() => {
    startSlideInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startSlideInterval]);

  const handleSlideChange = (index: number) => {
    if(index < 0) {index = children.length - 1;}
    if(index >= children.length) {index = 0;}
    setCurrentSlide(index);
    startSlideInterval(); // Clear and reset interval when slide changes
  };

  return (
    <Div>
      {title && <Text style={styles.title}>{title}</Text>}
      <Div style={styles.carouselContainer}>
        {children.map((child: React.ReactNode, index: number) => (
          <Div
            style={{...styles.carouselSlide,
              ...(index === currentSlide && {...styles.carouselSlideActive}),
              ...childrenStyles
            }}
            key={index}>
          <ArrowLeft onClick={() => handleSlideChange(index - 1)} style={styles.arrow}/>
          {child}
          <ArrowRight onClick={() => handleSlideChange(index + 1)} style={styles.arrow}/>
        </Div>
        ))}
      </Div>
    </Div>
  );
};

const styles = {
  carouselSlide: {
    gridArea: "stack",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "opacity 1s ease-in-out",
    display: "flex", 
    pointerEvents: "none"
  },
  carouselSlideActive: {
    opacity: 1,
    pointerEvents: "all"
  },
  carouselContainer: {
    display: "grid",
    position: "relative",
    gridTemplateAreas: "stack"
  },
  title: {
    textAlign: "center",
    color: "#581541",
    fontWeight: "bold"
  },
  arrow: {
    transform: "scale(3)",
    cursor: "pointer"
  }
} as const;

export default Carousel;
