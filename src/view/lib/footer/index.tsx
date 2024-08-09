import { Div, Text } from "../components";
import {Instagram, Twitter, Facebook} from '@mui/icons-material/';

const contacts = [
  {
    link: "https://www.instagram.com/punesamvad1",
    icon: <Instagram fontSize={"large"}/>,
    text: "Follow Us On Instagram!"
  },
  {
    link: "https://twitter.com/punesamvad1",
    icon: <Twitter fontSize={"large"}/>,
    text: "Follow Us On X!"
  },
  {
    link: "https://www.facebook.com/profile.php?id=61557373841972",
    icon: <Facebook fontSize={"large"}/>,
    text: "Like Us On Facebook"
  }
];

const Footer = () =>
  <Div style={styles.container}>
    <Text style={styles.title}>Connect With Us!</Text>
    {contacts.map((contact) =>
      <a href={contact.link} target="_blank" rel={"noreferrer"}>
        {contact.icon}
      </a>
    )}
  </Div>;

const styles = {
  container: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    maxHeight: "none",
    minHeight: ["5vh", "5vh", "10vh"],
    gap: "1%",
    backgroundColor: "white",
    padding: "1%",
    borderTop: "5px solid #ef7e1b"
  },
  title: {
    fontSize: ["large", "large", "xx-large"]
  }
} as const;

export default Footer;