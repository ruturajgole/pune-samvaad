import { useEffect, useState } from "react";
import { Folder, Gallery, Page, Pages } from "services/models";
import { Photos } from "./photos";
import { Loader } from "view/lib";
import { Videos } from "./videos";
import { getMedia } from "services/api";

interface Props {
  readonly page?: Gallery;
  readonly setSubPage: (page: Page) => void;
}

enum Hover {
  None,
  Photos,
  Videos
}

const GalleryView = ({ page, setSubPage }: Props) => {
  const [folders, setFolders] = useState<ReadonlyArray<Folder>>([]);
  const [hover, setHover] = useState<Hover>(Hover.None);

  useEffect(() => {
    getMedia()
    .then((data) => setFolders(data))
    .catch((error) => {
      console.log(error, "ERROR");
    });
  }, []);

  const photos = folders.map((folder) => folder.photos).flat();
  const videos = folders.map((folder) => folder.videos).flat();

  return  (!!folders.length  
    ? (page === Gallery.Photos && (<Photos folders={folders}/>)) ||
      (page === Gallery.Videos && (<Videos folders={folders}/>)) ||
      (<div style={styles.container}>
        <span style={styles.title}>Photos</span>
        {<div style={styles.thumbnails} 
            onMouseEnter={() => setHover(Hover.Photos)}
            onMouseLeave={() => setHover(Hover.None)}>
            {hover === Hover.Photos && 
            <div 
              style={styles.overlay}
              onClick={() => setSubPage({page: Pages.Gallery, subPage: Gallery.Photos})}>
              See More
            </div>}
            {photos.map((photo) =>
              <img key={photo.id} style={styles.thumbnail} src={photo.thumbnailLink} alt={photo.name} />
            )}
          </div>}
          <span style={styles.title}>Videos</span>
        {<div style={styles.thumbnails} 
            onMouseEnter={() => setHover(Hover.Videos)}
            onMouseLeave={() => setHover(Hover.None)}>
            {hover === Hover.Videos && 
            <div 
              style={styles.overlay}
              onClick={() => setSubPage({page: Pages.Gallery, subPage: Gallery.Videos})}>
              See More
            </div>}
            {videos.map((video) =>
              <img key={video.id} style={styles.thumbnail} src={video.thumbnailLink} alt={video.name} />
            )}
          </div>}
        </div>)
    : <Loader />)
}

const styles = {
  container: {
    display: "flex",
    height: "max-content",
    padding: "1%",
    flexDirection: "column"
  },
  title: {
    fontSize: "xx-large"
  },
  horizontalLine: {
    width: "100%",
    border: "1px solid black"
  },
  thumbnails: {
    display: "flex",
    position: "relative",
    overflowX: "clip",
    cursor: "pointer"
  },
  thumbnail: {
    cursor: "pointer",
    objectFit: "cover"
  },
  arrow: {
    position: "absolute",
    color: "black",
    fontSize: "xxx-large",
    right: "10",
    background: `
    linear-gradient(to right, white, 95%, transparent),
    linear-gradient(to top, white, 95%, transparent),
    linear-gradient(to bottom, white, 95%, transparent)`,
    backgroundBlendMode: "screen",
  },
  overlay: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    fontSize: "xx-large",
    background: "rgb(0,0,0,0.8)",
    color: "white"
  }
} as Record<string, React.CSSProperties>;

export default GalleryView;