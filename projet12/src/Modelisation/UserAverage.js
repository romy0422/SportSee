
class UserAverageSession {

  constructor(averageSessions) {
    if (averageSessions && averageSessions.sessions) {
      this._averageSessions = averageSessions.sessions.map((session) => {
        
 
    switch (session.day) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
      default:
        break;
    }
  
        return {
          name: session.day,
          ...session,
        };
      });
    } else {
      this._averageSessions = [];
    }
  }

  get sessions() {
    return this._averageSessions;
  }

 
  initDay = (day) => {
    switch (day) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
      default:
        break;
    }
  };
}

export default UserAverageSession;
