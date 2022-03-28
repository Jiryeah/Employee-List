const Employee = require('./Employee');

class Intern extends Employee {
  constructor(email, id, name, school) {
    super(email, id, name);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;
