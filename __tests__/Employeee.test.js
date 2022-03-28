const Employee = require('../lib/Employee');

test('Can create a new instance from Employee object', () => {
  const newInstance = new Employee();
  expect(typeof newInstance).toBe('object');
});

test('Test names', () => {
  const testName = 'Faissal';
  const newInstance = new Employee(testName);
  expect(newInstance.name).toBe(testName);
});

test('Test id', () => {
  const testId = 5;
  const newInstance = new Employee('Test', testId);
  expect(newInstance.id).toBe(testId);
});

test('Test email', () => {
  const testEmail = 'faissal5@testmail.com';
  const newInstance = new Employee('Test', 5, testEmail);
  expect(newInstance.email).toBe(testEmail);
});

test('Can retrieve name w/ getName()', () => {
  const testName = 'Faissal';
  const newInstance = new Employee(testName);
  expect(newInstance.getName()).toBe(testName);
});

test('Can retrieve id w/ getId()', () => {
  const testId = 5;
  const newInstance = new Employee('Test', testId);
  expect(newInstance.getId()).toBe(testId);
});

test('Can retrieve email w/ getEmail()', () => {
  const testEmail = 'faissal5@testmail.com';
  const newInstance = new Employee('Test', 5, testEmail);
  expect(newInstance.getEmail()).toBe(testEmail);
});

test('getRole() returns Employee', () => {
  const returnValue = 'Employee';
  const newInstance = new Employee('Faissal', 5, 'faissal5@testmail.com');
  expect(newInstance.getRole()).toBe(returnValue);
});
