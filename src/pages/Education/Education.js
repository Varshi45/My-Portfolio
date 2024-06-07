import React from "react";
import "./Education.css";
import { IoSchoolSharp } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EducationList } from "../../utilities/EducationList";
import { useTheme } from "../../context/ThemeContext";

const Education = ({ sidebarToggle }) => {
  const containerClass = sidebarToggle
    ? "education-content"
    : "education-content-toggled";
  const [theme] = useTheme();

  return (
    <>
      <div id="education" className={containerClass}>
        <div className="education">
          <h2 className="text-center">Education Details</h2>
          <hr />
        </div>
        <VerticalTimeline>
          {EducationList.map((education) => (
            <VerticalTimelineElement
            key={education._id}
            className={`vertical-timeline-element--work ${theme}`}
            contentArrowStyle={{
              borderRight: `7px solid var(--arrow-color)`,
            }}
            date={education.duration}
            iconStyle={{ background: theme === "dark" ? "#ff9d00" : "#dc5f00", color: "#fff" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">{education.degree}</h3>
            <h4 className="vertical-timeline-element-subtitle">{education.institute}</h4>
          </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
