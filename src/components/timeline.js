import React from "react";
import Sidebar from "../Sibar";
// import Feed from "../Feed";
import TimelineDisplay from "./timelineDisplay";
import "../App.css";

function Timeline() {
  return (
    <div className="app">
      <Sidebar/>
      {/* <Feed/> */}
      <TimelineDisplay />
    </div>
  );
}

export default Timeline;
