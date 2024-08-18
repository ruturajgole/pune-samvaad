import { useMediaQuery } from "@mui/material";
import "./loader.css";

export const Loader: React.FC = () => {
  const isSmallDevice = useMediaQuery("(max-width: 1024px)");
  const file = `loader${isSmallDevice ? "_small" : ""}.png`;

  return <div style={styles.container}>
    <img style={styles.loader} className="spin" src={`${process.env.PUBLIC_URL}/${file}`} alt={"Loader"}/>
    <span>Loading</span>
  </div>
}
const styles = {
  container: {
    display: "flex",
    height: "75vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "large",
    color: "#e0452c"
  },
  loader: {
    height: "20%",
  }
} as Record<string, React.CSSProperties>;