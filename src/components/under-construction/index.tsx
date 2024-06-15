import React from "react"
import {ConstructionRounded} from '@mui/icons-material/';

export const UnderConstruction = () =>
  <div style={styles.container}>
    <span style={styles.text}>This Page Is Under Construction</span>
    <ConstructionRounded fontSize="large" color="info"/>
  </div>;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "75vh"
  },
  text: {
    fontSize: "xx-large"
  }
} as Record<string, React.CSSProperties>;