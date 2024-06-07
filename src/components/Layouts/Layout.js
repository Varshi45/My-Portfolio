import React from "react";
import Home from "../../pages/Home/Home";
import Menus from "../Menus/Menus";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";

const Layout = ({ handleSidebar, sidebarToggle }) => {
  return (
    <div className="sidebar-section">
      <div className={sidebarToggle ? "sidebar" : "sidebar-toggle sidebar"}>
        <div className="sidebar-toggle-icons">
          <span onClick={handleSidebar}>
            {sidebarToggle ? (
              <AiOutlineDoubleRight size={35} />
            ) : (
              <AiOutlineDoubleLeft size={35} />
            )}
          </span>
        </div>
        <Menus sidebar = {sidebarToggle} />
      </div>
      {/* <div className="container-fluid" > */}
        <Home sidebar = {sidebarToggle} />
      {/* </div> */}
    </div>
  );
};

export default Layout;
