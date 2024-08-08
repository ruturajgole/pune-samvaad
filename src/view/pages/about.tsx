import {Instagram, Twitter, Facebook, YouTube} from '@mui/icons-material/';

const contacts = [
  {
    link: "https://www.youtube.com/@PuneSamvad1",
    icon: <YouTube color={"error"}/>,
    text: "Subscribe To Our YouTube Channel"
  },
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
  <div style={styles.container}>
    <img style={styles.logo} src={`${process.env.PUBLIC_URL}/logo.jpeg`} alt={"logo"}/>
    <p style={styles.aboutText}>
    {props.text}
    </p>
    <div style={styles.contactsContainer}>
      {contacts.map((contact, i) =>
        <div key={i} style={styles.contacts}>
          {contact.icon}
          <a href={contact.link} target="_blank">
            {contact.text}
          </a>
        </div>
      )}
    </div>
  </div>;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "1%",
  },
  aboutText: {
    textAlign: "center",
    width: "40%"
  },
  logo: {
    width: "20%"
  },
  contactsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1%"
  },
  contacts: {
    display: "flex",
    alignItems: "center",
    gap: "1%"
  }
} as const;