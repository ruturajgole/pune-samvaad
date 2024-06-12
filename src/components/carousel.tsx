import React, { useState, useEffect } from 'react';
import './carousel.css';

interface Event {
  Title: string;
  Guest: string;
  Venue: string;
  Date: string;
}
interface CarouselProps {
  events: ReadonlyArray<Event>;
  interval: number;
}
const Carousel = ({ events, interval = 3000 }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % events.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval, events.length]);

  return (
    <div className="carousel">
      {events.map((event: Event, index: number) => (
        <div
          style={{display: "flex", flexDirection: "column", justifyContent: "end", padding: "1%",
            background: "linear-gradient(to right, black, white)",
            color: "white"
          }}
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
        >
        <span style={styles.title}>{event.Title}</span>
        <span style={styles.guest}>{event.Guest}</span>
        <span style={styles.date}>{event.Date}</span>
      </div>
      ))}
    </div>
  );
};

const styles = {
  slideContainer: {
    display: "flex",
  },
  title: {
    fontSize: "xx-large"
  },
  guest: {
    fontSize: "x-large"
  },
  date: {
    fontSize: "large"    
  }
}

export default Carousel;
