import React from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { ModalProps } from "view/lib"; 
import { Event } from "services/models";

export const eventSlides = (events: ReadonlyArray<Event>, setModalProps: (props: ModalProps | null) => void) =>
  events.filter(event => event).map((event) => {
    const [day, month, year] = event.Date.split("/").map(Number);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return <React.Fragment key={event.Title}>
    <div style={styles.slide}>
      <span style={styles.title}>{event.Title}</span>
      <span style={styles.guest}>{event.Guest}</span>
      <span style={styles.date}>{`${day+getOrdinalSuffix(day)} ${months[month]} ${year}`}</span>
    </div>
    <div style={styles.status}>
      {!!event.Video
        ? watchNow(() => setModalProps({
          title: event.Title,
          onClose: () => setModalProps(null),
          children: Youtube(event.Video!)
        }))
        : "UPCOMING"}
    </div>
  </React.Fragment>
});

const watchNow = (setModalProps: () => void) =>
  <button
    onClick={setModalProps}
    style={styles.watchNow}>
    <PlayCircleIcon fontSize={"large"} />
    Watch Now
  </button> 

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
    fontSize: "xxx-large",
  },
  guest: {
    fontSize: "xx-large",
  },
  date: {
    fontSize: "x-large",  
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
    fontSize: "large",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10%",
    backgroundColor: "#e0452c",
    color: "white",
    borderColor: "white",
    cursor: "pointer",
  }
} as Record<string, React.CSSProperties>;