import { Div, Text } from "view/lib/components";

interface Props {
  readonly about: string;
}

const About = ({ about }: Props) =>
  <Div style={styles.container}>
    <Div style={styles.imageContainer}>Image PlaceHolder</Div>
    <Div style={styles.textContainer}>
      <Text>ABOUT US</Text>
      <Text style={styles.text}>{about}</Text>
      <Text style={styles.readMore}>Read More {`>>`}</Text>
    </Div>
  </Div>;

const styles = {
  container: {
    display: "flex",
    flex: "0.25",
    backgroundColor: "#631046",
    justifyContent: "space-evenly",
    padding: "2%"
  },
  imageContainer: {
    display: "flex",
    border: "1px solid black",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "20%",
    backgroundColor: "white"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    width: "50%"
  },
  text: {
    marginTop: "2%"
  },
  readMore: {
    justifySelf: "end",
    textAlign: "end"
  }
}

export default About;