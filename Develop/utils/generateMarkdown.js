// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseLink = '';
let Label = '';
function renderLicenseBadge(data) {
  Label = `<img src='https://img.shields.io/static/v1?label=${encodeURIComponent(data.license.trim())}&message=license&color=blue'>`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  console.log(data)
  if (data.license === 'No license'){
    Label = 'This app has no license';
  }
  if (data.license === 'GNU AGPLv3') {
    licenseLink = 'agpl-3.0';
  }
  if (data.license === 'GNU GPLv3') {
    licenseLink = 'gpl-3.0';
  }
  if (data.license === 'GNU LGPLv3') {
    licenseLink = 'lgpl-3.0';
  }
  if (data.license === 'Mozilla Public License 2.0') {
    licenseLink = 'mpl-2.0';
  }
  if (data.license === 'Apache License 2.0') {
    licenseLink = 'apache-2.0';
  }
  if (data.license === 'MIT License') {
    licenseLink = 'mit';
  }
  if (data.license === 'Boost Software License 1.0') {
    licenseLink = 'bsl-1.0';
  }
  if (data.license === 'The Unlicense') {
    licenseLink = 'unlicense';
  }}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data);
  renderLicenseLink(data);
  
  return `# ${data.title}
  ${data.description}

  ## Table of contents

  [Installation section](#Installation)
  
  [Usage section](#Usage)
  
  [Contributing section](#Contributing)

  [How to use section](#How-to-use-the-app)

  [License Section](#License)

  [Email section](#Email)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## How to use the app
  ${data.tests}
  
  ## License
  [${Label}](https://choosealicense.com/licenses/${licenseLink}/)

  ## Email
  Send any questions about the app to my email at [${data.email}](mailto:${data.email})

  Made with ❤️ by ${data.github}.
`;
  };

module.exports = generateMarkdown;
