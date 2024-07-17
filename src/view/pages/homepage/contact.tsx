import { Div, Text } from "view/lib/components";

const Contact = () =>
  <Div style={styles.container}>
    <Text style={styles.title}>CONTACT US</Text>
    <Div style={styles.contact}>
      <Div style={styles.addressContainer}>
        <Text style={styles.addressTitle}>ADDRESS</Text>
      </Div>
      <Div style={styles.formContainer}>
        <input style={styles.input} type="text" placeholder="NAME"/>
        <input style={styles.input} type="email" placeholder="EMAIL"/>
        <input style={styles.input} type="tel" placeholder="MOBILE"/>
        <input style={styles.input} type="text" placeholder="MESSAGE"/>
      </Div>
    </Div>
  </Div>;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    padding: "1% 0%",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#ef7e1b"
  },
  contact: {
    display: "flex",
    padding: "1%"
  },
  addressContainer: {
    display: "flex",
    flex: "0.5",
    flexDirection: "column"
  },
  addressTitle: {
    fontWeight: "bold"
  },
  formContainer: {
    display: "flex",
    flex: "0.5",
    flexDirection: "column"
  },
  input: {
    padding: "1%",
    margin: "1% 0%",
    border: "1% solid #ef7e1b"
  }
}

export default Contact;