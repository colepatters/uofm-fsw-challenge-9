const licenses = require("./licenses")

function renderLicense(licenseName) {
  const license = licenses.find((entry) => entry.name === licenseName)
  if (!license) return ""
  else return license.md
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseName) {
  if (!licenseName || licenseName === "None") return ""
  const license = licenses.find((entry) => entry.name === licenseName)
  if (!license) return ""
  else return `
## License
### ${license.name}  
${license.md}  
${license.description}
(via [choosealicense.com](https://choosealicense.com/licenses/))
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  ${renderLicense(data.license)}

  ## Description
  ${data.projectDescription}

  ## Installation
  ${data.installationInstructions}
  
  ## Usage
  ${data.usageInfo}
  
  ## Contribution
  ${data.contributionGuidelines}
  
  ## Tests
  ${data.testInstructions}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  Questions? Feel free to reach out to me at [${data.emailAddress}](mailto:${data.emailAddress})  
  Love this project? [Follow me on GitHub](https://github.com/${data.githubUsername})!
`;
}

module.exports = generateMarkdown;
