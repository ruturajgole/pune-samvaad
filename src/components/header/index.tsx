import { Page } from "../../services/models";
import { NavigationBar } from "../";

const navigationOptions = [
  {
    title: "Home",
    page: Page.Homepage,
  },
  {
    title: "Events",
    page: Page.Events,
    suboptions: [
      { title: "Upcoming Events", page: Page.UnderConstruction }, { title: "Past Events", page: Page.UnderConstruction }
    ]
  },
  {
    title: "Gallery",
    page: Page.Gallery,
    suboptions: [
      { title: "Photos", page: Page.UnderConstruction }, { title: "Videos", page: Page.UnderConstruction }
    ]
  },
  {
    title: "Suggestions",
    page: Page.Suggestions
  },
  {
    title: "About Us",
    page: Page.About,
  }
]

interface Props {
  readonly currentPage: Page;
  readonly setPage: (page: Page) => void;
}

export const Header = ({ currentPage, setPage }: Props) =>
  <div style={styles.header}>
    <div style={styles.logoContainer}>
      <img
        onClick={() => setPage(Page.Homepage)}
        src={`${process.env.PUBLIC_URL}/logo.jpeg`}
        style={styles.logo}
        alt={"logo"} />
      <img
        style={styles.banner}
        src={`${process.env.PUBLIC_URL}/shaniwar-wada.jpg`} />
    </div>
    <NavigationBar currentPage={currentPage} setPage={setPage} options={navigationOptions} />
  </div>

const styles = {
  header: {
    padding: "0.5% 1%",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  logo: {
    height: "8%",
    width: "8%",
    cursor: "pointer"
  },
  banner: {
    height: "10%",
    width: "10%",
    alignSelf: "end"
  }
} as Record<string, React.CSSProperties>;