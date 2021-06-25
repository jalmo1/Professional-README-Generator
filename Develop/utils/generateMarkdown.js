
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ### [![license](https://img.shields.io/badge/license-${data.license}-blueviolet)](https://shields.io)


  ## Table of contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Contact](#contact)

  # ${data.title}

  ## Description:
    ${data.description}
  ## Video:

  ## Test:
  ${data.testing}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contributors:
  ${data.contributors}

  ## Contact:
    - Email: ${data.email}
    - Github: https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
