import axios from "axios";
import * as MOCKED_DATA from "../DataMocked/datas";
async function getURL(id, userswitch, uri) {
  try {
    if (userswitch === "user") {
      const response = await axios.get(
        `http://localhost:3001/${userswitch}/${id}/${uri}`
      );
      return response.data.data;
    } else if (userswitch === "mock") {
      let mockedData;
      switch (uri) {
        case "":
          mockedData = MOCKED_DATA.USER_MAIN_DATA.find(
            (user) => user.id === parseInt(id)
          );
          break;
        case "activity":
          mockedData = MOCKED_DATA.USER_ACTIVITY.find(
            (user) => user.userId === parseInt(id)
          );
          break;
        case "average-sessions":
          mockedData = MOCKED_DATA.USER_AVERAGE_SESSIONS.find(
            (user) => user.userId === parseInt(id)
          );
          break;
        case "performance":
          mockedData = MOCKED_DATA.USER_PERFORMANCE.find(
            (user) => user.userId === parseInt(id)
          );
          break;
        default:
          throw new Error('URI non reconnue.');
      }
      if (!mockedData) {
        throw new Error('Données mockées non trouvées.');
      }
      return mockedData;
    }
  } catch (error) {
    return Promise.reject(new Error(`Une erreur est survenue : ${error.message}`));
  }
}

async function getUser(id, userswitch) {
  return await getURL(id, userswitch, "");
}

async function getActivity(id, userswitch) {
  return await getURL(id, userswitch, "activity");
}

async function getAverageSessions(id, userswitch) {
  return await getURL(id, userswitch, "average-sessions");
}

async function getPerformance(id, userswitch) {
  return await getURL(id, userswitch, "performance");
}

export { getUser, getActivity, getAverageSessions, getPerformance };
