import React, { useState, useEffect } from "react";
import { SideBar } from "../../utils/material/sidebar/sidebar";
import Content from "../Content/Content";
import StyledApp from "./StyledApp";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.addEventListener(
      `resize`,
      (event) => {
        document.body.clientWidth >= 800
          ? setIsMobile(false)
          : setIsMobile(true);
      },
      false
    );
  }, []);

  useEffect(() => {
    // dispatch(getProcessorList());
  }, []);

  return (
    <StyledApp>
      <SideBar isMobile={isMobile} />
      <Content />
    </StyledApp>
  );
};
export default App;
