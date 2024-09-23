const { exec } = require('child_process');
const reporter = require('cucumber-html-reporter');
const path = require('path');


exec(`npx cucumber-js`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log(`Test Output: ${stdout}`);
});


const options = {
  theme: 'bootstrap', // Other options: simple, hierarchy, foundation
  jsonFile: path.resolve(__dirname, './reports/cucumber-report.json'),
  output: path.resolve(__dirname, './reports/cucumber_report.html'),
  reportSuiteAsScenarios: true,
  launchReport: false, // Automatically opens the report in the default browser
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "TEST",
  },
};

reporter.generate(options);
