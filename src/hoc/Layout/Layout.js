import React, { useState } from "react";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import ToggleButton from "../../components/SideDrawer/ToggleButton/ToggleButton";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import "./Layout.css";

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  return (
    <React.Fragment>
      <ToggleButton clicked={() => setShowSideDrawer(!showSideDrawer)} />
      <SideDrawer
        show={showSideDrawer}
        clicked={() => setShowSideDrawer(false)}
      />
      <Backdrop
        show={showSideDrawer}
        clicked={() => setShowSideDrawer(false)}
      />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
