/*
Game plan=>

LICENSE BADGE

then TABLE OF CONTENTS

then TITLE

then DETAILED DESCRIPTION

then VIDEO 

then INSTALLATION

then USAGE

then CONTRIBUTORS 

then CONTACT
*/

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ### [![license](https://img.shields.io/badge/license-${data.license}-blueviolet)](https://shields.io)
  ## Table of contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Questions](#questions)

  # **${data.title}**

  ## **Description:**

  ## Video:

  ## Installation:

  ## Usage:

  ## Contributors:

  ### Questions:

`;
}

module.exports = generateMarkdown;
