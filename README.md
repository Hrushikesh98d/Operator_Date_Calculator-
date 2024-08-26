# Trade Sun

## Author
Hrushikesh Dandge

# Date Manipulation and Conversion App

A web application for comparing dates, converting time zones, and formatting dates. This project uses Node.js, Express, Luxon, and a JSON rules engine to handle various date-related operations.

## Features

- Compare two dates and calculate their difference in years, months, days, hours, minutes, and seconds.
- Convert a date from one time zone to another.
- Convert the date format between MM/DD/YYYY and DD/MM/YYYY.
- Rule-based validation to ensure `date1` is not earlier than `date2` before comparison.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/date-manipulation.git
    cd date-manipulation
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the application:

    ```bash
    npm start
    ```

## Usage

- Open your browser and go to `http://localhost:3000`.
- Use the endpoints:
    - `/compareDates` to compare two dates.
    - `/convertTimeZone` to convert a date from one time zone to another.
    - `/convertDateFormat` to convert the date format between MM/DD/YYYY and DD/MM/YYYY.

## Dependencies

- `express` - Web framework for Node.js.
- `luxon` - Library for handling dates and times.
- `json-rules-engine` - Rules engine for defining and evaluating business rules.

## Rules

- **Ensure date1 is not earlier than date2**: This rule checks that `date1` is not earlier than `date2` before performing date comparison.
