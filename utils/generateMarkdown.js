function renderLicenseBadge(license) {
  if (license === 'None')
    {return ''}
    else {
      return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
    }
}

function renderLicenseLink(license) {
  if (license === 'None')
    {return ''}
    else {
      return `[license](#license)`
    }
}

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
