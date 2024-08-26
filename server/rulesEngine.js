const { DateTime } = require('luxon');

// Function to compare two dates
async function runCompareDates(date1, date2) {
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

