import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { StyledToolBar, StyledTypography, Wrapper } from "./styledSideBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { LoginLogoutBtnContainer } from "../../../components/LoginLogoutBtn";
import { SideBarDesktop } from "./SideBarDesktop";
import { SideBarMobile } from "./SideBarMobile";
import { useStyles } from "./useStyles";

export const drawerWidth = 240;
export const SideBar = ({ isMobile }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: !isMobile && open,
        })}
      >
        <StyledToolBar>
          <Wrapper>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <StyledTypography variant="h6" noWrap>
              Google Maps
            </StyledTypography>
          </Wrapper>

          <LoginLogoutBtnContainer />
        </StyledToolBar>
      </AppBar>

      {!isMobile ? (
        <SideBarDesktop
          classes={classes}
          theme={theme}
          open={open}
          handleDrawerClose={handleDrawerClose}
        />
      ) : (
        <SideBarMobile
          classes={classes}
          theme={theme}
          open={open}
          handleDrawerClose={handleDrawerClose}
        />
      )}
    </div>
  );
};
