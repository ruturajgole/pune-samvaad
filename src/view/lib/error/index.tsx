import React from "react"
import {ConstructionRounded, ErrorOutline} from '@mui/icons-material/';

interface Props {
  error?: Error;
}

export const Error = ({ error }: Props) =>
  <div style={styles.container}>
    {error
      ? <>
          <ErrorOutline fontSize="large" color="error"/>
          <span style={styles.text}>Error</span>
          <span style={styles.text}>{error.message}</span>
          <span style={styles.message}>Please contact the administrator at ruturaj.gole813@gmail.com</span>
        </>
      : <>
          <span style={styles.text}>This Page Is Under Construction</span>
          <ConstructionRounded fontSize="large" color="info"/>
        </>
    }
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
    fontSize: "xx-large",
    textAlign: "center"
  },
  message: {
    textAlign: "center"
  }
} as Record<string, React.CSSProperties>;