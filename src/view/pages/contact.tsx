import { Button, Div, Text } from "view/lib/components";

const Contact = () =>
  <Div style={styles.container}>
    <Text style={styles.title}>Contact Us Form</Text>
    <form style={styles.form}>
      <input style={styles.input} type="text" name="name" placeholder="Full Name*"/>
      <Div style={styles.contact}>
        <input style={styles.input} type="email" name="email" required placeholder="Email*"/>
        <input style={styles.input} type="text" name="mobile" required placeholder="Mobile*"/>
      </Div>
      <textarea rows={4} style={{...styles.input, resize: "none"}} name="query" placeholder="Additional Information (Optional)"/>
    </form>
    <Div style={styles.buttons}>
      <input style={styles.submit} type="submit" value="SUBMIT"/>
      <Button style={styles.button} onClick={() => {}}>Clear</Button>
    </Div>
  </Div>;

const styles = {
  container: {
    padding: "1%"
  },
  title: {
    fontSize: "xx-large"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "2%",
    padding: "1%"
  },
  contact: {
    display: "flex",
    gap: "1%",
    justifyContent: "space-evenly"
  },
  input: {
    fontSize: "large",
    margin: "0.5% 0%",
    padding: "1%",
    flex: "1"
  },
  buttons: {
    display: "flex",
    padding: "1%",
    gap: "1%"
  },
  button: {
    color: "white",
    fontSize: "large",
    backgroundColor: "#ef7f1b"
  },
  submit: {
    color: "white",
    borderRadius: "4px",
    fontSize: "large",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#ef7f1b"
  },
  loading: {
    opacity: 0.5,
    pointerEvents: "none"
  },
  loader: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: "0",
    right: "0",
    zIndex: 100
  },
  submitted: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    gap: "1%",
    width: "100%"
  },
  submittedText: {
    fontSize: "xx-large"
  }
} as const;


export default Contact;