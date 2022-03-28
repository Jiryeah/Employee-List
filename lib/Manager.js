const Employee = require('./Employee');

class Manager extends Employee {
  constructor(email, id, name, officeNumber) {
    super(email, id, name);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
