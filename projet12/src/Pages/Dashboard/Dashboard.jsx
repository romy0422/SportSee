import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getUser,
} from "../../CallDatas/CallDatas";
import User from "../../Modelisation/user";


function Dashboard() {
  let { id } = useParams();
  let { userswitch } = useParams();
  const [getUserById, setgetUserById] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async (id, userswitch) => {
      const USER = await getUser(id, userswitch);


      setgetUserById(USER);
      setIsLoading(false);
    };
    fetch(id, userswitch);
  }, [id, userswitch]);

  const USER_CLASS = !isLoading
    ? new User(
        getUserById?.userInfos.firstName,
        getUserById?.userInfos.lastName,
        getUserById?.userInfos.age,
      )
    : "";

  return (

        <>
                {USER_CLASS.firstName}
                {USER_CLASS.lastName}
                {USER_CLASS.age}
        </>
      )}
 



export default Dashboard;