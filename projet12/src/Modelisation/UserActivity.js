
  class UserActivity {
    constructor(data) {
      if (data.sessions) {
        this._activities = data.sessions.map((session) => {
          return {
            name: this.initDate(session.day),
            ...session,
          };
        });
      } else {
        // Gérer le cas où data.sessions n'est pas défini
        this._activities = []; // Par exemple, initialiser avec un tableau vide
      }
    }


  initDate = (date) => {
    const day = new Date(date);
    return day.getDate().toString();
  };

  get activitésInitiales() {
    return this._activities;
  }
}

export default UserActivity;
