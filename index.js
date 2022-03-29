const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
// paths
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const generatePage = require('./src/template');

const roster = [];
const rosterId = [];

const startApp = () => {
  const createManagement = () => {
    console.log('Please create your employee roster.');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is the new manager's name?",
          validate: (userInput) => {
            if (userInput !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'managerId',
          message: "What is the new manager's id?",
          validate: (userInput) => {
            if (userInput !== '') {
              return true;
            }
            return 'Please enter at least one number.';
          },
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the new manager's email?",
          validate: (userInput) => {
            if (userInput !== '') {
              return true;
            }
            return 'Please enter a valid email.';
          },
        },
        {
          type: 'input',
          name: 'managerOffice',
          message: "What is the new manager's office number?",
          validate: (userInput) => {
            if (userInput !== '') {
              return true;
            }
            return 'Please enter at least one number.';
          },
        },
      ])
      .then((userInput) => {
        const manager = new Manager(
          userInput.managerName,
          userInput.managerId,
          userInput.managerEmail,
          userInput.managerOffice
        );
        roster.push(manager);
        rosterId.push(userInput.managerId);
        createRoster();
      });
  };

  function createRoster() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'choiceSelection',
          message: 'Which role would you like to add to your team?',
          choices: ['Intern', 'Engineer', 'None. I am okay with the size of my team.'],
        },
      ])
      .then((userInput) => {
        switch (userInput.choiceSelection) {
          case 'Intern':
            createIntern();
            break;
          case 'Engineer':
            createEngineer();
            break;
          default:
            renderRoster();
        }
      });
  }

  const createIntern = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internsName',
          message: "What is the intern's name?",
          validate: (userInput) => {
            if (userInput !== '') {
              return true;
            }
            return 'Please enter a name.';
          },
        },
        {
          type: 'input',
          name: 'internsId',
          message: "What is your intern's id?",
          validate: (userInput) => {
            const pass = userInput.match(/^[1-9]\d*$/);
            if (pass) {
              if (rosterId.includes(userInput)) {
                return 'This ID is taken. Please enter a different number.';
              } else {
                return true;
              }
            }
            return 'Please enter a number greater than zero.';
          },
        },
        {
          type: 'input',
          name: 'internsEmail',
          message: "What is your intern's email?",
          validate: (userInput) => {
            const pass = userInput.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
          },
        },
        {
          type: 'input',
          name: 'internsSchool',
          message: 'What school did the intern come from?',
          validate: (userInput) => {
            if (userInput !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
      ])
      .then((userInputs) => {
        const intern = new Intern(
          userInputs.internsName,
          userInputs.internsId,
          userInputs.internsEmail,
          userInputs.internsSchool
        );
        roster.push(intern);
        rosterId.push(userInputs.internsId);
        createRoster();
      });
  };

  const createEngineer = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineersName',
          message: "What is your engineer's name?",
          validate: (userInput) => {
            if (userInput !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'engineersId',
          message: "What is your engineer's id?",
          validate: (userInput) => {
            const pass = userInput.match(/^[1-9]\d*$/);
            if (pass) {
              if (rosterId.includes(userInput)) {
                return 'This ID is taken. Please enter a different number.';
              } else {
                return true;
              }
            }
            return 'Please enter a number greater than zero.';
          },
        },
        {
          type: 'input',
          name: 'engineersEmail',
          message: "What is your engineer's email?",
          validate: (userInput) => {
            const pass = userInput.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
          },
        },
        {
          type: 'input',
          name: 'engineersGithub',
          message: "What is the engineer's GitHub username?",
          validate: (userInput) => {
            if (userInput !== '') {
              return true;
            }
            return 'Please enter a valid username.';
          },
        },
      ])
      .then((userInputs) => {
        const engineer = new Engineer(
          userInputs.engineersName,
          userInputs.engineersId,
          userInputs.engineersEmail,
          userInputs.engineersGithub
        );
        roster.push(engineer);
        rosterId.push(userInputs.engineersId);
        createRoster();
      });
  };

  const renderRoster = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }

    fs.writeFileSync(outputPath, generatePage(roster), 'utf-8');
  };

  createManagement();
};

startApp();
