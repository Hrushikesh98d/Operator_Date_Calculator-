const { Engine } = require('json-rules-engine');
const { DateTime } = require('luxon');
const fs = require('fs');
const path = require('path');

// Load rules from rules.json
const rulesFilePath = path.join(__dirname, 'rules.json');
const rules = JSON.parse(fs.readFileSync(rulesFilePath, 'utf8'));

// Create the engine
const engine = new Engine(rules);

// Define the functions used in rules
engine.addOperator('greaterThanInclusive', (factValue, operatorValue) => {
    return DateTime.fromISO(factValue) >= DateTime.fromISO(operatorValue);
});

// Function to compare dates with rule enforcement
async function runCompareDates(date1, date2) {
    const facts = { date1, date2 };

    const { events } = await engine.run(facts);

    // Check for validation results
    const isValid = events.some(event => event.type === 'date-comparison-valid');
    if (!isValid) {
        throw new Error('Date1 is earlier than Date2.');
    }

    // If valid, proceed with the comparison
    const dt1 = DateTime.fromISO(date1);
    const dt2 = DateTime.fromISO(date2);

    const difference = dt1.diff(dt2, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();

    return difference;
}



// Function to convert time zones
async function runConvertTimeZone(date, fromTimeZone, toTimeZone) {
    const dt = DateTime.fromISO(date, { zone: fromTimeZone });
    const convertedDate = dt.setZone(toTimeZone).toISO();

    return convertedDate;
}



// Function to convert date format

async function runConvertDateFormat(date, format) {
    const dt = DateTime.fromISO(date);

    let formattedDate;
    if (format === 'MM/DD/YYYY') {
        formattedDate = dt.toFormat('MM/dd/yyyy');
    } else if (format === 'DD/MM/YYYY') {
        formattedDate = dt.toFormat('dd/MM/yyyy');
    } else {
        throw new Error('Unsupported date format');
    }

    return { formattedDate };
}


// Export the functions
module.exports = {
    runCompareDates,
    runConvertTimeZone,
    runConvertDateFormat
};

