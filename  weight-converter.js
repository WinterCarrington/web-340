// weight-converter.js

const pounds = process.argv[2];

// Check if argument is missing
if (pounds === undefined) {
  console.error('Usage: node weight-converter.js <pounds>');
  process.exit(1);
}

// Check if argument is not a number
if (isNaN(pounds)) {
  console.error('Error: Please provide a numeric value for pounds.');
  process.exit(1);
}

// Convert pounds to kilograms
const kilograms = (parseFloat(pounds) * 0.45359237).toFixed(2);

// Print result
console.log(`${pounds} pounds is ${kilograms} kilograms.`);