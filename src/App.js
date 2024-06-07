// App.js

import React, { useState } from "react";
import Layout from "./components/Layouts/Layout";
import About from "./pages/About/About.js";
import Techstack from "./pages/Techstack/Techstack.js";
import Projects from "./pages/Projects/Projects.js";
import Education from "./pages/Education/Education.js";
import Work from "./pages/Work/Work.js";
import Contact from "./pages/Contact/Contact.js";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext.js";
import MobileNav from "./components/MobileNav/MobileNav.js";

function App() {
  const [sidebarToggle, setSidebar] = useState(true);

  const handleSidebar = () => {
    setSidebar(!sidebarToggle);
  };

  const year = new Date().getFullYear();

  const [theme] = useTheme();

  return (
    <div>
      <div id={theme}>
        <MobileNav />
        <Layout handleSidebar={handleSidebar} sidebarToggle={sidebarToggle} />
        <div className="container-fluid">
          <About sidebarToggle={sidebarToggle} />
          <Education sidebarToggle={sidebarToggle} />
          <Techstack sidebarToggle={sidebarToggle} />
          <Work sidebarToggle={sidebarToggle} />
          <Projects sidebarToggle={sidebarToggle} />
          <Contact sidebarToggle={sidebarToggle} />
        </div>
        <div className="footer p-3 ms-3">
          <h4 className="text-center">&copy; {year} </h4>
          <h4 className="text-center">Made with ❤️ by Varshith</h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        color={theme === "dark" ? "#ff9d00" : "#dc5f00"}
        style={{ backgroundColor: theme === "dark" ? "#fff" : "#343a40", borderRadius: "33%" }}
      />
    </div>
  );
}

export default App;
