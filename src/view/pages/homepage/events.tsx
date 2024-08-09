import React from "react";
import { ModalProps } from "view/lib"; 
import { Event } from "services/models";
import { Button, Div, Image, Text } from "view/lib/components";

export const eventSlides = (events: ReadonlyArray<Event>, setModalProps: (props: ModalProps | null) => void) =>
  events.filter(event => event).map((event) => {
    const [day, month, year] = event.Date.split("/").map(Number);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return <React.Fragment key={event.Title}>
    <Div style={styles.container}>
      <Div style={styles.imageContainer}>
        <Image style={styles.image} src={`${process.env.PUBLIC_URL}/event.jpg`} />
      </Div>
      <Text style={styles.text}>{event.Guest}</Text>
      <Text style={styles.text}>{event.Date}</Text>
      {isUpcoming(event.Date) && <Button onClick={() => {}}>REGISTER</Button>}
    </Div>
  </React.Fragment>
});

const isUpcoming = (dateString: string) => {
  const [day, month, year] = dateString.split("/").map(Number);
  const date: Date = new Date(year, month - 1, day);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date >= today;
}

const getOrdinalSuffix = (date: number) => {
  if (date > 3 && date < 21) return 'th';
  switch (date % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    padding: "2%",
    width: "max-content",
    height: "max-content"
  },
  imageContainer: {
    padding: "5%"
  },
  image: {
    aspectRatio: "1/1",
    width: "100%",
    borderRadius: "100%",
    objectFit: "cover"
  },
  text: {
    textAlign: "center"
  }
} as const;