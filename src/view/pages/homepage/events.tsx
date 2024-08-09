import React from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { ModalProps } from "view/lib"; 
import { Event } from "services/models";
import { Button, Div, Text } from "view/lib/components";

export const eventSlides = (events: ReadonlyArray<Event>, setModalProps: (props: ModalProps | null) => void) =>
  events.filter(event => event).map((event) => {
    const [day, month, year] = event.Date.split("/").map(Number);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return <React.Fragment key={event.Title}>
    <Div style={styles.slide}>
      <Text style={styles.title}>{event.Title}</Text>
      <Text style={styles.guest}>{event.Guest}</Text>
      <Text style={styles.date}>{`${day+getOrdinalSuffix(day)} ${months[month]} ${year}`}</Text>
    </Div>
    <Div style={styles.status}>
      {!!event.Video
        ? watchNow(() => setModalProps({
          title: event.Title,
          onClose: () => setModalProps(null),
          children: Youtube(event.Video!)
        }))
        : "UPCOMING"}
    </Div>
  </React.Fragment>
});

const watchNow = (setModalProps: () => void) =>
  <Button
    onClick={setModalProps}
    style={styles.watchNow}>
    <PlayCircleIcon fontSize={"large"} />
    Watch Now
  </Button>

const Youtube = (link: string) => 
  <iframe
    width="50%"
    height="50%"
    src={link}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />  

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
  title: {
    fontSize: ["x-large", "x-large", "xxx-large"],
  },
  guest: {
    fontSize: ["large", "large", "xx-large"],
  },
  date: {
    fontSize: ["medium", "medium","x-large"],  
  },
  slide: {
    display: "flex",
    flexDirection: "column",
    justifySelf: "end",
    alignSelf: "end"
  },
  status: {
    display: "flex",
    flexDirection: "column",
    justifySelf: "end",
    alignSelf: "end",
    fontSize: "x-large",
    zIndex: 20,
  },
  watchNow: {
    display: "flex",
    fontSize: ["medium", "medium", "large"],
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10%",
    backgroundColor: "#e0452c",
    color: "white",
    borderColor: "white",
    cursor: "pointer",
  }
} as const;