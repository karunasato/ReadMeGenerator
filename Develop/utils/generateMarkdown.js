// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.license}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data["table of contents"].map(item => `* [${item}](#${item})`).join("\n")}

  ## Installation
  to install, use the following command
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  to run  the application, use following command
  \`\`\`
  ${data.usage}
  \`\`\`

  ## Contributing
  ${data.contributing}

  ## Tests
  to run test on the app, use following command
  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions
  ${data.questions}
  
`;
}

module.exports = generateMarkdown;
