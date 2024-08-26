const express = require('express');
const rulesEngine = require('./rulesengine');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/compareDates', async (req, res) => {
    const { date1, date2 } = req.body;

    try {
        const result = await rulesEngine.runCompareDates(date1, date2);
        res.json({ difference: result });
    } catch (error) {
        console.error("Error comparing dates:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post('/convertTimeZone', async (req, res) => {
    const { date, timezone } = req.body;

    try {
        // Use 'America/New_York' as the default fromTimeZone
        const convertedDate = await rulesEngine.runConvertTimeZone(date, 'America/New_York', timezone);
        res.json({ convertedDate });
    } catch (error) {
        console.error("Error converting time zone:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.post('/convertDateFormat', async (req, res) => {
    const { date, format } = req.body;

    try {
        const result = await rulesEngine.runConvertDateFormat(date, format);
        res.json(result);
    } catch (error) {
        console.error("Error converting date format:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
