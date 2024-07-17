import "./loader.css";

export const Loader: React.FC = () => 
  <div style={styles.container}>
    <img style={styles.loader} className="spin" src={`${process.env.PUBLIC_URL}/loader.png`} alt={"Loader"}/>
    <span>Loading</span>
  </div>

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