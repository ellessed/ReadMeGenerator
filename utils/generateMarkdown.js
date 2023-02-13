function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

const checkIfTests = (tests) => {
  if (tests === "") {
    return "Not applicable";
  } else {
    return tests;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("from generate markdown", data);

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests
  ${checkIfTests(data.tests)}

  ## Contributions
  ${data.contributions}
  
  ## Questions

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).
`;
}

module.exports = generateMarkdown;
