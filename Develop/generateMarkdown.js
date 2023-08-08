function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${encodeURIComponent(
    license
  )}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `* [License](#license)`;
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `
## License

This project is covered under the ${license} license.
`;
}

function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
${renderLicenseLink(data.license)}
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

For additional questions, you can reach me through:

* [GitHub](https://github.com/${data.githubUsername})
* Email: ${data.email}
`;
}

module.exports = generateMarkdown;
