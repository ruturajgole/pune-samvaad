import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { getPhotos } from "services/api";
import { Event, Folder } from "services/models";
import { Modal } from "view/lib";
import { Div, Text } from "view/lib/components";

interface Props {
  readonly event: Event;
}

const EventView = ({event}: Props) => {
  const [media, setMedia] = useState<Folder>();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(-1);

  useEffect(() => {
    getPhotos(event.Title)
    .then((data) => setMedia(data))
    .catch((error) => {
      console.log(error, "ERROR");
    });
  }, []);

  return <Div style={styles.container}>
    <Text style={styles.title}>{event.Title}</Text>
    <Div style={styles.videoContainer}>
      <Div style={styles.summary}>
        <Text>{event.Summary}</Text>
      </Div>
      <Div style={styles.video}>
        {event.Video
          ? <>
              <Text style={styles.watchNow}>Watch Now</Text>
              <iframe
                width="100%"
                height="100%"
                src={event.Video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
            </>
          : <Div style={styles.videoUnavailable}><Text>Video Will Be Available Soon</Text></Div>}  
      </Div>
    </Div>
    <Div>
      <Text style={styles.subtitle}>Photos</Text>
      {(media && media.photos && media.photos.length) 
      ? <Div>
        {media.photos.map((photo, photoIndex) =>
        <img loading={"lazy"} key={photo.id} onClick={() => setCurrentPhotoIndex(photoIndex)} style={styles.thumbnail} src={photo.thumbnailLink} alt={photo.name}/>)}
      </Div>
      : <Div>
        <Text>No Photos Available</Text>
      </Div>
      }
    </Div>
    {media && currentPhotoIndex > -1 &&
      <Modal title={event.Title} onClose={() => setCurrentPhotoIndex(-1)}>
        <div style={styles.modal}>
          <ArrowCircleLeft onClick={(e) => {
            e.stopPropagation();
            setCurrentPhotoIndex((photoIndex) => photoIndex - 1)
          }}
          style={{...styles.arrow, visibility: currentPhotoIndex > 0 ? "visible" : "hidden"}} />
          <iframe
            style={{pointerEvents: "none"}}
            src={`https://drive.google.com/file/d/${media.photos[currentPhotoIndex].id}/preview`}
            width={"100%"}
            height={"100%"} />
          <ArrowCircleRight onClick={(e) => {
            e.stopPropagation();
            setCurrentPhotoIndex((photoIndex) => photoIndex + 1)
          }}
          style={{...styles.arrow, visibility: (currentPhotoIndex < media.photos.length - 1) ? "visible" : "hidden"}} />
        </div>
      </Modal>}
  </Div>;
}

const styles = {
  container: {
    padding: "1%"
  },
  title: {
    fontSize: "xx-large"
  },
  videoContainer: {
    display: "flex",
    height: "50vh",
    padding: "2%",
    gap: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
  summary: {
    display: "flex",
    flex: "0.5"
  },
  video: {
    display: "flex",
    flex: "0.5",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  thumbnail: {
    cursor: "pointer",
    margin: "1%"
  },
  modal: {
    display: "flex",
    width: "80%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center"
  },
  arrow: {
    color: "white",
    fontSize: "xxx-large",
    cursor: "pointer"
  },
  subtitle: {
    fontSize: "x-large"
  },
  watchNow: {
    fontWeight: "bold",
    fontSize: "x-large",
    textAlign: "start",
    alignSelf: "start"
  },
  videoUnavailable: {
    display: "flex",
    border: "1px solid black",
    height: "100%",
    justifyContent: "center",
    width: "100%",
    flex: 1
  }
} as const;

export default EventView;