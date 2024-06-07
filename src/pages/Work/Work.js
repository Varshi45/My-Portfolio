import React from "react";
import "./Work.css";
import { WorkList } from "../../utilities/WorkList";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { useTheme } from "../../context/ThemeContext";
import "react-vertical-timeline-component/style.min.css";
import { LiaLaptopCodeSolid } from "react-icons/lia";

const Work = ({ sidebarToggle }) => {
  const containerClass = sidebarToggle ? "work-content" : "work-content-toggled";
  const [theme] = useTheme();

  return (
    <>
      <div id="work" className={containerClass}>
        <div className="work">
          <h2 className="text-center">Work Experience</h2>
          <hr />
        </div>
        <VerticalTimeline>
          {WorkList.map((work) => (
            <VerticalTimelineElement
              key={work._id}
              className="vertical-timeline-element--work"
              date={work.duration}
              iconStyle={{ background: theme === "dark" ? "#ff9d00" : "#dc5f00", color: "#fff" }}
              contentArrowStyle={{ borderRight: `7px solid var(--arrow-color)` }}
              icon={<LiaLaptopCodeSolid />}
            >
              <h3 className="vertical-timeline-element-title">{work.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{`${work.company}, ${work.duration}`}</h4>
              <p>{work.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Work;
