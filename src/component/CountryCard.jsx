import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const CountryCard = ({ label, value }) => (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: "2px solid #ffffff",
      }}
      date={label}
      iconStyle={{
        background: "grey",
        
      }}
    >
      <div>
        <p className="text-secondary text-[26px] font-semibold" style={{ margin: 0 }}>
          {value}
        </p>
      </div>
    </VerticalTimelineElement>
  );
  export default CountryCard;