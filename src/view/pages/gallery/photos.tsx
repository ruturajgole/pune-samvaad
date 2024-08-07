import { useState } from "react";
import { Modal } from "view/lib";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { Folder } from "services/models";

interface Props {
  readonly folders: ReadonlyArray<Folder>;
}

export const Photos = ({folders}: Props) => {
  const [currentImage, setImage] = useState<Record<string, number>>({folderIndex: -1, photoIndex: -1});

  const { folderIndex, photoIndex } = currentImage;

  return <div style={styles.container}>
    <span style={styles.subtitle}>Gallery</span>
    <span style={styles.title}>Photos</span>
    {
      !!folders.length && folders.map((folder, folderIndex) =>
      <div key={folder.name} style={styles.folder}>
        <span style={styles.folderTitle}>{folder.name}</span>
        <div style={styles.grid}>
          {folder.photos.map((photo, photoIndex) =>
          <img loading={"lazy"} key={photo.id} onClick={() => setImage({folderIndex, photoIndex})} style={styles.thumbnail} src={photo.thumbnailLink} alt={photo.name}/>)}
        </div>
        <hr style={styles.horizontalLine}/>
      </div>
    )}
    {
      folderIndex > -1 &&
      photoIndex > -1 &&
      <Modal title={folders[folderIndex].name} onClose={() => setImage({folderIndex: -1, photoIndex: -1})}>
        <div style={styles.modal}>
          <ArrowCircleLeft onClick={(e) => {
            e.stopPropagation();
            setImage({folderIndex, photoIndex: photoIndex - 1})
          }}
          style={{...styles.arrow, visibility: photoIndex > 0 ? "visible" : "hidden"}} />
          <iframe
            style={{pointerEvents: "none"}}
            src={`https://drive.google.com/file/d/${folders[folderIndex].photos[photoIndex].id}/preview`}
            width={"70%"}
            height={"90%"} />
          <ArrowCircleRight onClick={(e) => {
            e.stopPropagation();
            setImage({folderIndex, photoIndex: photoIndex + 1})
          }}
          style={{...styles.arrow, visibility: (photoIndex < folders[folderIndex].photos.length - 1) ? "visible" : "hidden"}} />
        </div>
      </Modal>
    }
  </div>
}

const styles = {
  container: {
    display: "flex",
    height: "75vh",
    padding: "1%",
    flexDirection: "column"
  },
  title: {
    fontSize: "xx-large"
  },  
  subtitle: {
    fontSize: "x-large"
  },
  folder: {
    display: "flex",
    flexDirection: "column"
  },
  folderTitle: {
    fontSize: "x-large"
  },
  horizontalLine: {
    width: "100%",
    border: "1px solid black"
  },
  photos: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1%"
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
  }
} as Record<string, React.CSSProperties>;