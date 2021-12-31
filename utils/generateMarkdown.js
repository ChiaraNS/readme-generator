// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === undefined || "none") {
    return "";
  } else {
    return `[![Badge](https://img.shields.io/badge/license-${license}-ff69b4)]`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === undefined) {
    return "";
  } else if (license === "Apache") {
    return `[license](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license === "GNU") {
    return `[license](https://choosealicense.com/licenses/gpl-3.0/)`
  } else if (license === "ISC") {
    return `[license](https://choosealicense.com/licenses/isc/)`
  } else if (license === "MIT") {
    return `[license](https://choosealicense.com/licenses/mit/)`
  } else if (license === "Mozilla") {
    return `[license](https://choosealicense.com/licenses/mpl-2.0/)`
  } else if (license === "other") {
    return "other";
  } else {
    return "No License";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## License
  -${renderLicenseBadge(answers.license)}
  -${renderLicenseLink(answers.license)}

  ## Table of Contents
  -[Description](#descritption)
  -[Installation](#installation)
  -[Technology](#technology)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)

  ## Description
  -${answers.description}

  ## Installation
  -${answers.installation}

  ## Technology
  -${answers.technology}

  ## Usage
  -${answers.usage}

  ## Contributing
  -${answers.contributing}

  ## Tests
  -${answers.tests}

  ## Questions
  -Contact me for any further questions!
  -GitHub: [${answers.gitbhub}](https://github.com/${answers.github})
  -Email: ${answers.email}

`;
}

module.exports = generateMarkdown;
