import React, { useState } from "react";
import { Page } from "../../services/models";

interface Option {
  title: string;
  page: Page;
  suboptions?: ReadonlyArray<Option>;
  isActive?: boolean;
}

interface Props {
  options: ReadonlyArray<Option>;
  setPage: (page: Page) => void;
  currentPage: Page;
}

export const NavigationBar = ({currentPage, options, setPage}: Props) => {
  const [currentOptions, setActive] = useState(options);

  return <div style={styles.container}>
    {currentOptions.map((option: Option) =>
      <div key={option.title} style={styles.options}
        onMouseEnter={() => option.suboptions && setActive(options.map((value) => value.title === option.title ? ({...option, isActive: true}) : value))}
        onMouseLeave={() => option.suboptions && setActive(options.map((value) => value.title === option.title ? ({...option, isActive: false}) : value))}>
        <span
          style={{...styles.option, color: currentPage === option.page ? "#e0452c" : "initial"}}
          onClick={() => setPage(option.page)}>
          {option.title}
        </span>
        {option.isActive &&
          <div style={styles.suboptions}>{option.suboptions?.map((suboption) =>
            <span
              key={suboption.title}
              style={styles.suboption}
              onClick={() => setPage(suboption.page)}>
              {suboption.title}
            </span>)}
          </div>}
      </div>
    )}
  </div>;
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: "1%",
    fontSize: "large",
    fontFamily: "circular",
    borderBottom: "outset",
    borderColor: "#e0452c"
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
    marginTop: "22px",
    borderBottom: "outset #e0452c",
    borderRight: "outset #e0452c",
    borderLeft: "outset #e0452c"
  },
  suboption: {
    cursor: "pointer"
  }
} as Record<string, React.CSSProperties>;