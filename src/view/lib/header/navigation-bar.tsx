import React, { useState } from "react";
import { Navigation, Page } from "services/models";
import { Div } from "../components";

interface Option extends Navigation {
  isActive?: boolean;
}

interface Props {
  options: ReadonlyArray<Option>;
  setPage: (currentPage: Page) => void;
  currentPage: Page;
}

export const NavigationBar = ({currentPage, options, setPage}: Props) => {
  const [currentOptions, setActive] = useState(options);

  return <Div style={styles.container}>
    {currentOptions.map((navigation: Option) =>
      <div key={navigation.title} style={styles.options}
        onMouseEnter={() => navigation.subPages && setActive(options.map((value) => value.title === navigation.title ? ({...navigation, isActive: true}) : value))}
        onMouseLeave={() => navigation.subPages && setActive(options.map((value) => value.title === navigation.title ? ({...navigation, isActive: false}) : value))}>
        <span
          style={{...styles.option, color: currentPage.page === navigation.page ? "#e0452c" : "initial"}}
          onClick={() => setPage({page: navigation.page})}>
          {navigation.title}
        </span>
        {navigation.isActive &&
          <div style={styles.suboptions}>{navigation.subPages?.map((suboption) =>
            <span
              key={suboption.title}
              style={{...styles.suboption, color: currentPage.subPage === suboption.page ? "#e0452c" : "initial"}}
              onClick={() => setPage({page: navigation.page, subPage: suboption.page})}>
              {suboption.title}
            </span>)}
          </div>}
      </div>
    )}
  </Div>;
}
const styles = {
  container: {
    display: ["none", "none", "flex"],
    flexDirection: "row",
    marginTop: "1%",
    fontSize: "large",
    flex: "0.5",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    margin: "0% 1%",
    width: "100%"
  },
  option: {
    margin: "0% 2%",
    cursor: "pointer"
  },
  suboptions: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    backgroundColor: "white",
    padding: "1%",
    zIndex: 1,
    marginTop: "30px",
    borderBottom: "outset #ef7e1b",
    borderRight: "outset #ef7e1b",
    borderLeft: "outset #ef7e1b"
  },
  suboption: {
    cursor: "pointer"
  }
} as const;