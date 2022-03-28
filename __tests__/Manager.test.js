const Manager = require('../lib/Manager');

test('Can create office number', () => {
  const testNumber = 5;
  const newInstance = new Manager('Faissal', 5, 'faissal5@testmail.com', testNumber);
  expect(newInstance.officeNumber).toBe(testNumber);
});

test('Retrieve office number with getOffice()', () => {
  const testNumber = 5;
  const newInstance = new Manager('Faissal', 5, 'faissal5@testmail.com', testNumber);
  expect(newInstance.getOfficeNumber()).toBe(testNumber);
});

test('getRole() return Manager', () => {
  const returnValue = 'Manager';
  const newInstance = new Manager('Faissal', 5, 'faissal5@testmail.com', 5);
  expect(newInstance.getRole()).toBe(returnValue);
});
