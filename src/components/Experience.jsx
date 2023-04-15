import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className=' max-w-[1100px]  px-6  justify-center '>
      
      <VerticalTimeline lineColor="#c82323">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education "
          date="2014 - 2018"
          iconStyle={{ background: "#82b6b5" , color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title ">
            Maine East High School, Park Ridge, IL
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education h-20"
          date="2018 - 2022"
          iconStyle={{ background: "#82b6b5", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            DePaul University, Chic
          </h3>

          <h4 className="vertical-timeline-element-subtitle ">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#fd4a4a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Back End Engineer Intern - CCC Intelligent Solutions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chicago, IL
          </h4>
          <p>Developed and implemented solutiions for the backend infrastructure for multiple projects.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#fd4a4a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Looking for a software dev opportunity.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Manor, TX
          </h4>
          <p>
            Working on self improvement fullstack projects using latest technologies.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
