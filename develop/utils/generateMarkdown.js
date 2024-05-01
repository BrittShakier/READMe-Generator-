// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseBadge = '';
    switch (license) {
        case 'MIT':
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'Apache 2.0':
            licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;

        case 'none' = licenseBadge = '' :
            break;
    }

    return licenseBadge;


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = '';

    switch (license) {
        case 'MIT':
            licenseLink = 'https://opensource.org/licenses/MIT';
            break;
        case 'Apache 2.0':
            licenseLink = 'https://opensource.org/licenses/Apache-2.0';
            break;

        default:
            licenseLink = '';
            break;
    }

    return licenseLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseSection = '';

    switch (license) {
        case 'MIT':
            licenseSection = `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
`;
            break;
        case 'Apache 2.0':
            licenseSection = `
## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).
`;
            break;

    }

    return licenseSection;
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
  `;
  }
  module.exports = generateMarkdown;

