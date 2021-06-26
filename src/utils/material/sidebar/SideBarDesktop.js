import React from "react";
import { NavLink } from "react-router-dom";
import { StyledList } from "./styledSideBar";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import RoomIcon from "@material-ui/icons/Room";
import AssessmentIcon from "@material-ui/icons/Assessment";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export const SideBarDesktop = ({ classes, theme, open, handleDrawerClose }) => {
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <StyledList>
        {[
          { text: "Googl Maps", icon: <RoomIcon /> },
          { text: "Table", icon: <AssessmentIcon /> },
          { text: "Login", icon: <VpnKeyIcon /> },
        ].map((obj, i) => (
          <NavLink
            key={i}
            to={
              i === 0
                ? "/"
                : obj.text === "Add processors"
                ? `/Additem`
                : `/${obj.text}`
            }
          >
            <ListItem button key={obj.text}>
              <ListItemIcon>{obj.icon}</ListItemIcon>
              <ListItemText primary={obj.text} />
            </ListItem>
          </NavLink>
        ))}
      </StyledList>
    </Drawer>
  );
};
