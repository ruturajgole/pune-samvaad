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
    page: Page.UnderConstruction,
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
  readonly setPage: (page: Page) => void;
}

export const Header = ({ setPage }: Props) =>
  <div style={styles.header}>
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <img src={`${process.env.PUBLIC_URL}/logo.jpeg`} style={styles.logo} alt={"logo"}/>
    </div>
    <NavigationBar setPage={setPage} options={navigationOptions} />
  </div>

const styles = {
  header: {
    padding: "0.5% 1%"
  },
  logo: {
    height: "8%",
    width: "8%",
    cursor: "pointer"
  }
} as Record<string, React.CSSProperties>;