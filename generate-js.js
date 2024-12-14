const fs = require("fs");
const path = require("path");

// Get arguments
const [, , mjmlFilePath, htmlFilePath] = process.argv;

// Extract the filename (without extension) from the MJML file
const baseName = path.basename(mjmlFilePath, ".mjml");

// Read the generated HTML content
let htmlContent = fs.readFileSync(htmlFilePath, "utf-8");

// Remove the MJML comment at the top
htmlContent = htmlContent.replace(/<!-- FILE: .*? -->\n?/, "");

// Find all variables enclosed in ${...}
const variableMatches = [...htmlContent.matchAll(/\$\{([\w\d_]+)\}/g)];
const variables = [...new Set(variableMatches.map((match) => match[1]))]; // Remove duplicates

// Convert the list of variables into function parameters
const functionParams = variables.join(", ");

// Replace ${variable} with string interpolation in the template literal
htmlContent = htmlContent.replace(/\$\{([\w\d_]+)\}/g, "${$1}");

// Format the JavaScript file content
const jsContent = `
export const ${baseName} = (${functionParams}) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return \`${htmlContent.replace(/`/g, "\\`")}\`;
};
`;

// Save the JS file to the emails/ directory
const outputFilePath = path.join("emails", `${baseName}.js`);
fs.writeFileSync(outputFilePath, jsContent, "utf-8");

console.log(`Generated: ${outputFilePath}`);
