// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(lic) {
  if (lic == "MIT"){
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (lic == "Apache"){
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (lic == "Modzilla"){
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
  }else if (lic == "Boost"){
    return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
  }else if (lic == "GNU"){
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }else if (lic == "None"){
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(lic) {
  if (lic == "MIT"){
    return '(https://opensource.org/licenses/MIT)';
  } else if (lic == "Apache"){
    return '(https://opensource.org/licenses/Apache-2.0)';
  }else if (lic == "Modzilla"){
    return '(https://opensource.org/licenses/MPL-2.0)';
  }else if (lic == "Boost"){
    return '(https://www.boost.org/LICENSE_1_0.txt)';
  }else if (lic == "GNU"){
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  }else if (lic == "None"){
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(lic) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description:
  ${data.description}

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributors](#Contributors)
  * [Tests](#Tests)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contributors:
  ${data.contribution}

  ## Tests:
  ${data.test}

  ## Contact Me:
  Please reach out to me if you have any questions at ${data.question2} and my Github profile is ${data.question1}.
  
`;
}

module.exports = generateMarkdown;
