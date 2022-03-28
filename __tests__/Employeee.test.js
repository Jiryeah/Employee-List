const Employee = require('../lib/Employee');

test('Can create a new instance from Employee object', () => {
  const newInstance = new Employee();
  expect(typeof newInstance).toBe('object');
});

test('Test email', () => {
  const testEmail = 'faissal5@testmail.com';
  const newInstance = new Employee(testEmail);
  expect(newInstance.email).toBe(testEmail);
});

test('Test id', () => {
  const testId = 5;
  const newInstance = new Employee(testId);
  expect(newInstance.id).toBe(testId);
});

test('Test names', () => {
  const testName = 'Faissal';
  const newInstance = new Employee(testName);
  expect(newInstance.name).toBe(testName);
});
