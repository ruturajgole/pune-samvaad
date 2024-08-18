import React from "react";
import { animate, Loader } from "view/lib"; 
import { Div, Image, Text } from "view/lib/components";

export const newsSlides = (
  newsArticles: ReadonlyArray<Record<string, any>>
) =>
  newsArticles.map((article, index) =>
    <React.Fragment key={index + Math.random()}>
      <Div style={styles.container}>
        {/* <Div style={styles.imageContainer}> */}
          <Text style={styles.text}>News Article - {index + 1}</Text>
        {/* </Div> */}
      </Div>
    </React.Fragment>
  );

const NewsImage = (url: string) =>
  url 
  ? animate(<Image style={styles.image} src={`${url}`} />)
  : <Div><Loader /></Div>;
  
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: "2%",
    width: ["40vh", "40vh", "45vh"],
    height: ["40vh", "40vh", "45vh"],
    borderRadius: "2%",
    border: "4px double #ef7e1b",
    marginBottom: ["1%", "1%", "unset"]
  },
  imageContainer: {
    padding: "5%",
    color: "white"
  },
  image: {
    aspectRatio: "1/1",
    width: "100%",
    borderRadius: "100%",
    objectFit: "cover",
    cursor: "pointer"
  },
  placeholderImage: {
    height: ["130px", "130px", "220px"],
    width: ["150px", "150px", "250px"],
    cursor: "pointer"
  },
  text: {
    textAlign: "center",
    fontSize: ["medium", "medium", "x-large"],
    fontStyle: "italic"
  }
} as const;