import { UnderConstruction } from "../components/under-construction";

export const Gallery = () =>
  <div style={styles.container}>
    <UnderConstruction />
  </div>

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "75vh"
  }
} as Record<string, React.CSSProperties>;