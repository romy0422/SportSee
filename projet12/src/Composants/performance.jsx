import React from "react";
import PropTypes from "prop-types";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// Class
import UserPerformance from "../Modelisation/UserPerformance";
import { StyledPerformance } from "./perfo.styled.js";
const Performance = ({ performanceData }) => {
 
  const PERFORMANCE_CLASS = new UserPerformance(performanceData);
  // console.log(performanceData);
  return (
    <StyledPerformance>
    <div>
      
      {  }
      <RadarChart
        outerRadius={65}
        width={230}
        height={230}
        data={PERFORMANCE_CLASS.performance}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: "#ffffff", fontSize: 10 }}
          axisLine={true}
          tickLine={true}
        />

        <PolarRadiusAxis
          tickCount={6}
          domain={[0, 150]}
          axisLine={false}
          tick={false}
        />

        <Radar
          dataKey="value"
          stroke="rgba(230, 0, 0, .7)"
          fill="#E60000"
          fillOpacity={0.6}
        />
      </RadarChart>
      {}
      
    </div>
    </StyledPerformance>
  );
};

Performance.propTypes = {
  performanceData: PropTypes.object,
};

export default Performance;