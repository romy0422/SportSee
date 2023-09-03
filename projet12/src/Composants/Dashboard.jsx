import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// API
import {
  getUser,
  getActivity,
  getAverageSessions,
  getPerformance,
} from "../CallDatas/CallDatas";

// REACT Components
import Kpi from "./kpi";
import Score from "./score";
import Performance from "./performance";
import AverageSession from "./average";
import Activity from "./activity";

// JS Class
import User from "../Modelisation/user";
import { StyledDashboard } from "./Styled_composants/dash.styled";
import HeaderDashboard from "./HeaderDashboard";
function Dashboard() {
  let { id } = useParams();
  let { userswitch } = useParams();
  const [getUserById, setgetUserById] = useState({});
  const [getUserActivityById, setgetUserActivityById] = useState({});
  const [getUserAverageSessionById, setgetUserAverageSessionById] = useState(
    {}
  );
  const [getUserPerformanceById, setgetUserPerformanceById] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async (id, userswitch) => {
      const USER = await getUser(id, userswitch);
      const ACTIVITY = await getActivity(id, userswitch);
      const AVERAGE_SESSIONS = await getAverageSessions(id, userswitch);
      const PERFORMANCE = await getPerformance(id, userswitch);

      setgetUserById(USER);
      setgetUserActivityById(ACTIVITY);
      setgetUserAverageSessionById(AVERAGE_SESSIONS);
      setgetUserPerformanceById(PERFORMANCE);
      setIsLoading(false);
    };
    fetch(id, userswitch);
  }, [id, userswitch]);


  const USER_CLASS = !isLoading
    ? new User(
        getUserById?.userInfos.firstName,
        getUserById?.userInfos.lastName,
        getUserById?.userInfos.age,
        getUserById?.score ? getUserById.score : getUserById.todayScore,
        getUserById?.keyData.calorieCount,
        getUserById?.keyData.proteinCount,
        getUserById?.keyData.carbohydrateCount,
        getUserById?.keyData.lipidCount
      )
    : "";

  return ( 
    <StyledDashboard className="dashboard">
        <>
        <HeaderDashboard first={USER_CLASS.firstName} />
          <div>{USER_CLASS.firstName} {USER_CLASS.lastName} {USER_CLASS.age}</div>
          <div className="dashboard__charts">
            <div className="dashboard__charts-left">
              <Activity userActivityData={getUserActivityById} />
              <AverageSession averageSessionsData={getUserAverageSessionById} />
              <Performance performanceData={getUserPerformanceById} />
              <Score scoreData={USER_CLASS.arrayOfPercentScore} />
            </div>
            <div className="dashboard__charts-right">
              <Kpi
               
                value={USER_CLASS.calorie}
                title="Calories"
                unity="kCal"
                color="red"
              />
              <Kpi
               
                value={USER_CLASS.protein}
                title="Proteines"
                unity="g"
                color="blue"
              />
              <Kpi
               
                value={USER_CLASS.carbohydrate}
                title="Glucides"
                unity="g"
                color="yellow"
              />
              <Kpi
               
                value={USER_CLASS.lipid}
                title="Lipides"
                unity="g"
                color="pink"
              />
              
            </div>
          </div>
        </>
        </StyledDashboard>
      )}

export default Dashboard;