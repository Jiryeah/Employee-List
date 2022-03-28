// bringing in Employee object
const Employee = require('./Employee');

// using Employee object to create 'foundation' for the engineer object
class Engineer extends Employee {
  constructor(email, id, name, github) {
    // super used to access and call the functions from within the objects parent. In this case, the parent object is Employee
    super(email, id, name);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
