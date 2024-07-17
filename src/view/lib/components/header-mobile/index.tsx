import React, { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Div, Text } from '..';
import { Navigation, Page } from "services/models";
import Button from '../button';

interface Props {
  readonly options: ReadonlyArray<Navigation>;
  readonly setPage: (page: Page) => void;
  readonly currentPage: Page;
}

function HeaderMobile({ options, currentPage, setPage }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.TouchEvent | React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' &&
       ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(prev => open);
  };

  return (
    <Div id="header" style={styles.container}>
      <IconButton color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        <List style={styles.list}>
          <Text style={{...styles.text, marginLeft: "5%"}}>Pune Samvad</Text>
          <hr />
          {options.map((item, index) => (
            <ListItem
              style={{
                cursor: "pointer",
                backgroundColor: currentPage.page === item.page ? "#9574bd" : "lavender",
              }}
              key={index}
              onClick={(e) => {
              toggleDrawer(false)(e);
              setPage({page: item.page});
            }}>
              {item.icon}
              <ListItemText style={{ 
                color: currentPage.page === item.page ? "white" : "black",
              }} primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Div>
  );
}

const styles = {
  container: {
    display: ["flex", "flex", "none"],
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "end",
    width: "100%",
  },
  list: {
    backgroundColor: "lavender",
    width: "80vw",
    height: "100vh"
  },
  text: {
    fontWeight: "bold",
    fontSize: "large"
  }
} as const;

export default HeaderMobile;
