const Engineer = require('../lib/Engineer');

test('Testing Github retrieval', () => {
  const testHub = 'GitHub';
  const newInstance = new Engineer('Test', 1, 'test1@testmail.com', testHub);
  expect(newInstance.github).toBe(testHub);
});

test('Testing getGitHub()', () => {
  const testHub = 'GitHub';
  const newInstance = new Engineer('Test', 2, 'test2@testmail.com', testHub);
  expect(newInstance.getGithub()).toBe(testHub);
});

test('Testing getRole()', () => {
  const returnValue = 'Engineer';
  const newInstance = new Engineer('Test', 3, 'test3@testmail.com', 'GitHub');
  expect(newInstance.getRole()).toBe(returnValue);
});
