import React from "react";
import PropTypes from "prop-types";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LinearGradient,
} from "recharts";

import UserAverageSession from "../Modelisation/UserAverage";
import { StyledAverageSession } from "./Styled_composants/ave.styled";

const AverageSession = ({ averageSessionsData }) => {
  const AVERAGE_SESSIONS_CLASS = new UserAverageSession(averageSessionsData);
  const lastIndex = AVERAGE_SESSIONS_CLASS.sessions.length - 1;

  if (lastIndex < 1) {
    return null;
  }

  return (
    <StyledAverageSession className="average-session">
      <h6 className="average-session--label">Durée moyenne des sessions</h6>
      <ResponsiveContainer width="100%" aspect={1}>
        <AreaChart
          width={233}
          height={233}
          data={AVERAGE_SESSIONS_CLASS._averageSessions}
          margin={{
            top: 1,
            right: 7,
            bottom: 9,
            left: 7,
          }}
        >
          <defs>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="80%" stopColor="red" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
              </linearGradient>
            </defs>

          </defs>

          <rect x="0" y="0" width="100%" height="100%" fill="url(#colorGradient)" />

          <XAxis
            dataKey="name"
            tickLine={false}
            tickSize={20}
            axisLine={false}
            tick={{ fill: "rgba(255, 255, 255, .5)" }}
          />
          <YAxis hide={true} domain={[0, "dataMax + 51"]} />
          <Tooltip
            filterNull={false}
            separator=""
            itemStyle={{
              color: "#000000",
              backgroundColor: "#ffffff",
              fontSize: "10px",
              padding: "rem",
              margin: 3,
              border: 0,
            }}
            formatter={(name, value) => [name, ""]}
            contentStyle={{
              padding: ".4rem",
              backgroundColor: "#ffffff",
              border: 0,
            }}
            labelStyle={{
              display: "none",
            }}
          />
          <Area
            type="natural"
            dataKey="sessionLength"
            stroke="#ffffff"
            activeDot={{
              stroke: "rgba(255, 255, 255, .5)",
              strokeWidth: 10,
              r: 2.5,
            }}
            dot={false}
            unit="min"
            strokeWidth={2}
            connectNulls={true}
            fillOpacity={1}
            fill="rgba(255, 255, 255, .1)"
          />
          
        </AreaChart>
      </ResponsiveContainer>
    </StyledAverageSession>
  );
};

AverageSession.propTypes = {
  averageSessionsData: PropTypes.object.isRequired,
};

export default AverageSession;
