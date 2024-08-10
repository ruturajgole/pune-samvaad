import React from "react";
import { ModalProps } from "view/lib"; 
import { Event } from "services/models";
import { Button, Div, Image, Text } from "view/lib/components";
import { AccountCircle } from "@mui/icons-material";

export const eventSlides = (events: ReadonlyArray<Event>, setModalProps: (props: ModalProps | null) => void) =>
  events.filter(event => event).map((event) =>
    <React.Fragment key={event.Title}>
      <Div style={styles.container}>
        <Div style={styles.imageContainer}>
          {event.photo
          ? <Image style={styles.image} src={`${event.photo}`} />
          : <AccountCircle style={styles.placeholderImage} />
        }
        </Div>
        <Text style={styles.text}>{event.Guest}</Text>
        <Text style={styles.text}>{event.Date}</Text>
        {isUpcoming(event.Date) && <Button onClick={() => {}}>REGISTER</Button>}
      </Div>
    </React.Fragment>
  );

const isUpcoming = (dateString: string) => {
  const [day, month, year] = dateString.split("/").map(Number);
  const date: Date = new Date(year, month - 1, day);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date >= today;
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    padding: "2%",
    width: "40vh",
    height: "50vh"
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
  placeholderImage: {
    height: "200px",
    width: "200px"
  },
  text: {
    textAlign: "center"
  }
} as const;