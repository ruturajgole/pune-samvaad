import React from "react";
import { animate, ModalProps, RegistrationForm } from "view/lib"; 
import { Event } from "services/models";
import { Button, Div, Image, Text } from "view/lib/components";
import { AccountCircle, PlayCircle } from "@mui/icons-material";

export const eventSlides = (events: ReadonlyArray<Event>, isSmallDevice: boolean, setModalProps: (props: ModalProps | null) => void) =>
  events.filter(event => event).map((event) =>
    <React.Fragment key={event.Title}>
      <Div style={styles.container}>
        <Div style={styles.imageContainer}>
          {event.photo
          ? animate(<Image style={styles.image} src={`${event.photo}`} />)
          : <AccountCircle sx={styles.placeholderImage} />
        }
        </Div>
        <Text style={styles.text}>{event.Guest}</Text>
        <Text style={styles.text}>{event.Date}</Text>
        {isUpcoming(event.Date) 
        ? <Button onClick={() => setModalProps({
            title: "Registration Form",
            onClose: () => {console.log("HERE"); setModalProps(null);},
            children: <RegistrationForm event={event}/>
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
    </React.Fragment>
  );



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
    width: ["20vh", "20vh", "40vh"],
    height: ["40vh", "40vh", "55vh"]
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
    height: ["130px", "130px", "220px"],
    width: ["150px", "150px", "250px"]
  },
  text: {
    textAlign: "center"
  },
  watchNow: {
    display: "flex",
    fontSize: ["small", "small", "large"],
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10%",
    backgroundColor: "#e0452c",
    color: "white",
    borderColor: "white",
    cursor: "pointer"
  }
} as const;