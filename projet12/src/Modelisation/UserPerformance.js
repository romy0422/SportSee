class UserPerformance {
  
  constructor(performances) {
    if (performances && performances.data) {
    this.kind = performances.kind;
    this._performance = performances.data.map((performance) => {
      return {
        ...performance,
        kind: this.kind[performance.kind],
      };
    });
  }}

  get performance() {
    return this._performance.reverse();  }
}

export default UserPerformance;
