interface Props {
  text: string;
}

export const Suggestions = ({text}: Props) =>
  <div style={styles.container}>
    <label htmlFor={"suggestionBox"}>{text}</label>
    <textarea style={styles.textarea} id="suggestionBox" />
  </div>

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "x-large",
  },
  textarea: {
    width: "50vw",
    height: "20vh"
  }
} as Record<string, React.CSSProperties>;