import {Instagram, Twitter, Facebook} from '@mui/icons-material/';

const contacts = [
  {
    link: "https://www.instagram.com/punesamvad1",
    icon: <Instagram />,
    text: "Follow Us On Instagram!"
  },
  {
    link: "https://twitter.com/punesamvad1",
    icon: <Twitter />,
    text: "Follow Us On X!"
  },
  {
    link: "https://www.facebook.com/profile.php?id=61557373841972",
    icon: <Facebook />,
    text: "Like Us On Facebook"
  }
];

interface Props {
  text: string;
}

export const About = (props: Props) => 
  <div style={{flexDirection: "column", ...styles.container}}>
    <img style={styles.logo} src={`${process.env.PUBLIC_URL}/logo.jpeg`} alt={"logo"}/>
    <p style={{textAlign: "center", width: "40%"}}>
    {props.text}
    </p>
    <div style={{flexDirection: "column", ...styles.contactsContainer}}>
      {contacts.map((contact, i) => <div key={i} style={styles.contacts}>{contact.icon}<a href={contact.link} target="_blank">{contact.text}</a></div>)}
    </div>
  </div>;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1%",
  },
  logo: {
    width: "20%"
  },
  contactsContainer: {
    display: "flex"
  },
  contacts: {
    display: "flex"
  }
};