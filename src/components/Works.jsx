import React from "react";
import SectionTitle from "./SectionTitle";
import WorkItem from "./WorkItem";
import works from "../data/works";

const Works = () => {
  return (
    <div id="works" className="py-12">
      <SectionTitle>Recent Works</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {works.map((work) => (
          <WorkItem
            key={work.title}
            imgUrl={work.imgUrl}
            title={work.title}
            stack={work.stack}
            workUrl={work.workUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
