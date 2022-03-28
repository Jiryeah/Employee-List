const Intern = require('../lib/Intern');

test('Can input school', () => {
  const testSchool = 'UTSA';
  const newInstance = new Intern('Test', 1, 'test1@testmail.com', testSchool);
  expect(newInstance.school).toBe(testSchool);
});

test('Testing getSchool()', () => {
  const testSchool = 'UTSA';
  const newInstance = new Intern('Test', 2, 'test2@testmail.com', testSchool);
  expect(newInstance.getSchool()).toBe(testSchool);
});

test('getRole() returns Intern', () => {
  const returnValue = 'Intern';
  const newInstance = new Intern('Test', 3, 'test3@testmail.com', 'UTSA');
  expect(newInstance.getRole()).toBe(returnValue);
});
