import { useState } from "react";
import { Modal } from "view/lib";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { Folder } from "services/models";

interface Props {
  readonly folders: ReadonlyArray<Folder>;
}

export const Videos = ({folders}: Props) => {
  const [currentImage, setImage] = useState<Record<string, number>>({folderIndex: -1, videoIndex: -1});

  const { folderIndex, videoIndex } = currentImage;

  return <div style={styles.container}>
    <span style={styles.subtitle}>Gallery</span>
    <span style={styles.title}>Videos</span>
    {
      !!folders.length && folders.map((folder, folderIndex) =>
      !!folder.videos.length &&
      <div style={styles.folder}>
        <span style={styles.folderTitle}>{folder.name}</span>
        <div style={styles.grid}>
          {folder.videos.map((video, videoIndex) =>
          <img onClick={() => setImage({folderIndex, videoIndex})} style={styles.thumbnail} src={video.thumbnailLink} alt={video.name}/>)}
        </div>
        <hr style={styles.horizontalLine}/>
      </div>
    )}
    {
      folderIndex > -1 &&
      videoIndex > -1 &&
      <Modal title={folders[folderIndex].name} onClose={() => setImage({folderIndex: -1, videoIndex: -1})}>
        <div style={styles.modal}>
          <ArrowCircleLeft onClick={(e) => {
            e.stopPropagation();
            setImage({folderIndex, videoIndex: videoIndex - 1})
          }}
          style={{...styles.arrow, visibility: videoIndex > 0 ? "visible" : "hidden"}} />
          <iframe src={`https://drive.google.com/file/d/${folders[folderIndex].videos[videoIndex].id}/preview`} width={"70%"} height={"90%"}/>
          <ArrowCircleRight onClick={(e) => {
            e.stopPropagation();
            setImage({folderIndex, videoIndex: videoIndex + 1})
          }}
          style={{...styles.arrow, visibility: (videoIndex < folders[folderIndex].videos.length - 1) ? "visible" : "hidden"}} />
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
  videos: {
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