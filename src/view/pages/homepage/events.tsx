import { Event } from "services/models";
import { Button, Div, ExpandableText, Image, Text } from "view/lib/components";
import { AccessTime, CalendarMonth, Map, PlayCircle } from "@mui/icons-material";
import { Loader, ModalProps, RegistrationForm } from "view/lib";

export const eventSlides = (
  events: ReadonlyArray<Event>,
  isSmallDevice: boolean,
  setModalProps: (props: ModalProps | null) => void
) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return events.map((event) => {
    const [day, month, year] = event.Date.split("/").map(Number);

    const upcoming = isUpcoming(event.Date);

    return <Div key={event.Title} style={styles.eventsContainer}>
      {upcoming
        ? <Text style={styles.upcoming}>{"UPCOMING"}</Text>
        : <Text style={(isSmallDevice ? styles.upcoming : styles.past)}>{"PAST EVENTS"}</Text>}
      {event.banner
        ? <Image style={styles.eventImage} src={`${event.banner}`} />
        : <Div style={{...styles.eventImage, ...styles.loader}}><Loader /></Div>}
      <Div style={styles.eventDetailsContainer}>
        <Text style={styles.eventTitle}>{event.Title}</Text>
        <Text>{event.Guest}</Text>
        <Text style={styles.text}><CalendarMonth /> {`${day+getOrdinalSuffix(day)} ${months[month]} ${year}`}</Text>
        {upcoming && event.Time && <Text style={styles.text}><AccessTime /> {event.Time}</Text>}
        {upcoming && <Text style={styles.text}><Map /> {event.Venue}</Text>}
        {!upcoming && event.Summary && (isSmallDevice ? <ExpandableText text={event.Summary} maxLines={3}/> : <Text>{event.Summary}</Text>)}
        {upcoming 
          ? <Button
              style={styles.registrationButton}
              onClick={() => setModalProps({
              title: "Registration Form",
              onClose: () => setModalProps(null),
              children: <RegistrationForm event={event} onClose={() => setModalProps(null)}/>
            })}>
              REGISTER
            </Button>
      
          : watchNow(isSmallDevice
            ? () => event.Video && window.open(event.Video)
            : () => setModalProps({
            title: event.Title,
            onClose: () => setModalProps(null),
            children: Youtube(event.Video!)
          }))}
      </Div>
    </Div>
  });
}

const watchNow = (setModalProps: () => void) =>
  <Button
    onClick={setModalProps}
    style={styles.watchNow}>
    <PlayCircle fontSize={"large"} />
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

const isUpcoming = (dateString: string) => {
  const [day, month, year] = dateString.split("/").map(Number);
  const date: Date = new Date(year, month - 1, day);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date >= today;
}

const styles = {
  eventsContainer: {  
    display: "flex",
    height: ["60vh", "60vh", "60vh"],
    flexDirection: ["column", "column", "row"],
    position: "relative",
    backgroundColor: "#ef7f1b",
    border: "5px solid #ef7e1b",
    width: "100%",
    marginBottom: ["auto", "auto", "unset"],
  },
  eventImage: {
    display: "flex",
    flex: ["0.1", "0.3", "0.4"],
    objectFit: "cover",
    width: ["100%", "100%", "70%"],
    aspectRatio: ["2", "2", "2.5"]
  },
  eventDetailsContainer: {
    display: "flex",
    flex: ["0.8", "0.7", "0.6"],
    padding: "1%",
    color: "white",
    flexDirection: "column",
    gap: "1%"
  },
  eventTitle: {
    fontSize: ["large", "large", "x-large"],
    fontStyle: "italic",
    fontWeight: "bold"
  },
  past: {
    position: "absolute",
    padding: "0.5%",
    bottom: ["-15%", "-10%", "-21%", "-13%"],
    color: "white",
    backgroundColor: "rgb(0, 0, 0, 0.5)",
    fontSize: ["large", "large", "xx-large"],
    transformOrigin: "0 0",
    transform: "rotate(-90deg)"
  },
  upcoming: {
    position: "absolute",
    padding: "0.5%",
    top: "0",
    color: "white",
    backgroundColor: "rgb(0, 0, 0, 0.5)",
    fontSize: ["large", "large", "xx-large"],
  },
  loader: {
    alignItems: "center",
    height: ["35%", "35%", "unset"],
    justifyContent: "center",
    background: [
      `linear-gradient(to bottom, white, 95%, transparent)`,
      `linear-gradient(to bottom, white, 95%, transparent)`,
      `linear-gradient(to right, white, 95%, transparent)`],
    backgroundBlendMode: "screen",
  },
  watchNow: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    fontSize: ["small", "small", "large"],
    borderRadius: "10%",
    backgroundColor: "#e0452c",
    color: "white",
    alignSelf: "end",
    justifySelf: "bottom",
    borderColor: "white",
    cursor: "pointer",
    marginTop: "auto"
  },
  registrationButton: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    fontSize: ["small", "small", "large"],
    borderRadius: "10%",
    backgroundColor: "indigo",
    color: "white",
    alignSelf: "end",
    justifySelf: "bottom",
    borderColor: "white",
    cursor: "pointer",
    marginTop: "auto"
  },
  text: {
    display: "flex",
    gap: "1%"
  }
} as const;
