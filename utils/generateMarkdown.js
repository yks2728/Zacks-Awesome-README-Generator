// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None')
    {return ''}
    else {
      return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None')
    {return ''}
    else {
      return `[license](#license)`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None')
    {return ''}
    else {
      return `## license
      This Project is Licensed under ${license}`
    }
}


function generateMarkdown(data) {
  return `
  # Description
  ${data.description}

  # Table of Contents

  [Github](#Github)
  [Email](#Email)
  [Repo](#Repo)
  ${renderLicenseLink(data.license)}
  [Installation](#Installation)
  [Tests](#Tests)
  [Usage](#Usage)
  [Contribution](#Contribution)

  # Github
  ${data.github}
  
  # Email
  ${data.email}
  
  # Repo
  
  ${data.repo}

  ${renderLicenseSection(data.license)}
   
  ${renderLicenseBadge(data.license)}

  # Installation
  
  ${data.installation}

  # Tests
  
  ${data.tests}

  # Usage
  
  ${data.usage}

  # Contribution
  
  ${data.contribution}

`;
}

module.exports = generateMarkdown;
