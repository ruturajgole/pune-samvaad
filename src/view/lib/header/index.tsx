import { Events, Gallery, Navigation, Page, Pages } from "services/models";
import { NavigationBar } from "./navigation-bar";
import { Collections, ContactPage, Event, Home, Info } from '@mui/icons-material';
import { HeaderMobile, Image } from "../components";

const navigation: ReadonlyArray<Navigation> = [
  {
    icon: <Home />,
    title: "HOME",
    page: Pages.Homepage,
  },
  {
    icon: <Info />,
    title: "ABOUT US",
    page: Pages.About,
  },
  {
    icon: <Collections />,
    title: "GALLERY",
    page: Pages.Gallery,
    subPages: [
      { title: "PHOTOS", page: Gallery.Photos }, { title: "VIDEOS", page: Gallery.Videos }
    ]
  },
  {
    icon: <ContactPage />,
    title: "CONTACT",
    page: Pages.Contact
  }
];

interface Props {
  readonly currentPage: Page;
  readonly setPage: (currentPage: Page) => void;
}

export const Header = ({ currentPage, setPage }: Props) =>
  <div style={styles.header}>
    <div style={styles.logoContainer}>
      <Image
        onClick={() => setPage({page: Pages.Homepage})}
        src={`${process.env.PUBLIC_URL}/logo.jpeg`}
        style={styles.logo} />
      <HeaderMobile currentPage={currentPage} setPage={setPage} options={navigation} />
      <NavigationBar currentPage={currentPage} setPage={setPage} options={navigation} />
    </div>
  </div>;

const styles = {
  header: {
    padding: "0.5% 1%",
    borderBottom: "5px solid #ef7e1b"
  },
  logoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end"
  },
  logo: {
    height: ["10%", "10%", "8%"],
    width: ["10%", "10%", "8%"],
    cursor: "pointer"
  }
} as const;