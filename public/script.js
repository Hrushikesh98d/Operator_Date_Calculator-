document.addEventListener('DOMContentLoaded', () => {
    populateTimeZones();
});

// Hardcoded list of time zones for demonstration purposes
const timeZones = [
    'Africa/Abidjan', 'Africa/Accra', 'Africa/Addis_Ababa', 'Africa/Algiers',
    'Africa/Bamako', 'Africa/Bangui', 'Africa/Banjul', 'Africa/Bissau',
    'America/Adak', 'America/Anchorage', 'America/Anguilla', 'America/Antigua',
    'America/Araguaina', 'America/Argentina/Buenos_Aires', 'America/Argentina/Catamarca',
    'America/Argentina/ComodRivadavia', 'America/Argentina/Jujuy', 'America/Argentina/La_Rioja',
    'America/Argentina/Mendoza', 'America/Argentina/San_Juan', 'America/Argentina/San_Luis',
    'America/Argentina/Tucuman', 'America/Argentina/Ushuaia', 'America/Aruba',
    'America/Asuncion', 'America/Bahia', 'America/Bahia_Banderas', 'America/Barbados',
    'America/Belem', 'America/Belize', 'America/Blanc-Sablon', 'America/Boa_Vista',
    'America/Bogota', 'America/Boise', 'America/Cambridge_Bay', 'America/Campo_Grande',
    'America/Cancun', 'America/Cardenas', 'America/Cayenne', 'America/Cayman',
    'America/Chicago', 'America/Chihuahua', 'America/Costa_Rica', 'America/Creston',
    'America/Cuiaba', 'America/Curacao', 'America/Danmarkshavn', 'America/Dawson',
    'America/Dawson_Creek', 'America/Denver', 'America/Detroit', 'America/Dominica',
    'America/Edmonton', 'America/Eirunepe', 'America/El_Salvador', 'America/Fort_Nelson',
    'America/Fortaleza', 'America/Glace_Bay', 'America/Godthab', 'America/Goose_Bay',
    'America/Grand_Turk', 'America/Grenada', 'America/Guadeloupe', 'America/Guatemala',
    'America/Guayaquil', 'America/Guyana', 'America/Halifax', 'America/Havana',
    'America/Hermosillo', 'America/Indiana/Indianapolis', 'America/Indiana/Knox',
    'America/Indiana/Marengo', 'America/Indiana/Petersburg', 'America/Indiana/Tell_City',
    'America/Indiana/Vincennes', 'America/Indiana/Winamac', 'America/Inuvik',
    'America/Iqaluit', 'America/Jamaica', 'America/Jujuy', 'America/Jujuy',
    'America/Juneau', 'America/Kentucky/Louisville', 'America/Kentucky/Monticello',
    'America/Kralendijk', 'America/La_Paz', 'America/Lima', 'America/Los_Angeles',
    'America/Louisville', 'America/Maceio', 'America/Managua', 'America/Manaus',
    'America/Marigot', 'America/Martinique', 'America/Matamoros', 'America/Mazatlan',
    'America/Mendoza', 'America/Mexico_City', 'America/Miquelon', 'America/Moncton',
    'America/Montevideo', 'America/Montreal', 'America/Moscow', 'America/Nassau',
    'America/New_York', 'America/Nipigon', 'America/Nome', 'America/Noronha',
    'America/North_Dakota/Beulah', 'America/North_Dakota/Center', 'America/North_Dakota/New_Salem',
    'America/Ojinaga', 'America/Panama', 'America/Pangnirtung', 'America/Paramaribo',
    'America/Phoenix', 'America/Port-au-Prince', 'America/Porto_Acre', 'America/Porto_Velho',
    'America/Puerto_Rico', 'America/Rainy_River', 'America/Recife', 'America/Regina',
    'America/Rio_Branco', 'America/Rosario', 'America/Santarem', 'America/Santiago',
    'America/Santo_Domingo', 'America/Sao_Paulo', 'America/Scoresby_Sund', 'America/Shiprock',
    'America/Sitka', 'America/St_Johns', 'America/Swift_Current', 'America/Tegucigalpa',
    'America/Thule', 'America/Tijuana', 'America/Toronto', 'America/Tortola',
    'America/Vancouver', 'America/Whitehorse', 'America/Winnipeg', 'America/Yakutat',
    'America/Yellowknife', 'Antarctica/Palmer', 'Antarctica/Rothera', 'Asia/Almaty',
    'Asia/Amman', 'Asia/Anadyr', 'Asia/Aqtau', 'Asia/Aqtobe', 'Asia/Ashgabat',
    'Asia/Baghdad', 'Asia/Baku', 'Asia/Bangkok', 'Asia/Barnaul', 'Asia/Beirut',
    'Asia/Bishkek', 'Asia/Brunei', 'Asia/Calcutta', 'Asia/Chongqing', 'Asia/Colombo',
    'Asia/Damascus', 'Asia/Dhaka', 'Asia/Dili', 'Asia/Dubai', 'Asia/Dushanbe',
    'Asia/Famagusta', 'Asia/Gaza', 'Asia/Hebron', 'Asia/Ho_Chi_Minh', 'Asia/Hong_Kong',
    'Asia/Hovd', 'Asia/Irkutsk', 'Asia/Jakarta', 'Asia/Jayapura', 'Asia/Jerusalem',
    'Asia/Kabul', 'Asia/Kamchatka', 'Asia/Karachi', 'Asia/Kathmandu', 'Asia/Kolkata',
    'Asia/Krasnoyarsk', 'Asia/Kuala_Lumpur', 'Asia/Kuching', 'Asia/Kuwait', 'Asia/Macau',
    'Asia/Magadan', 'Asia/Makassar', 'Asia/Manila', 'Asia/Muscat', 'Asia/Nicosia',
    'Asia/Novokuznetsk', 'Asia/Novosibirsk', 'Asia/Omsk', 'Asia/Oral', 'Asia/Phnom_Penh',
    'Asia/Pontianak', 'Asia/Pyongyang', 'Asia/Qatar', 'Asia/Qyzylorda', 'Asia/Riyadh',
    'Asia/Sakhalin', 'Asia/Samarkand', 'Asia/Seoul', 'Asia/Singapore', 'Asia/Srednekolymsk',
    'Asia/Taipei', 'Asia/Tashkent', 'Asia/Tbilisi', 'Asia/Tehran', 'Asia/Tokyo',
    'Asia/Ulaanbaatar', 'Asia/Urumqi', 'Asia/Ust-Nera', 'Asia/Vientiane', 'Asia/Vladivostok',
    'Asia/Yakutsk', 'Asia/Yangon', 'Asia/Yekaterinburg', 'Asia/Yerevan', 'Atlantic/Azores',
    'Atlantic/Bermuda', 'Atlantic/Canary', 'Atlantic/Cape_Verde', 'Atlantic/Faroe',
    'Atlantic/Madeira', 'Atlantic/Reykjavik', 'Atlantic/South_Georgia', 'Atlantic/St_Helena',
    'Australia/Adelaide', 'Australia/Brisbane', 'Australia/Broken_Hill', 'Australia/Currie',
    'Australia/Darwin', 'Australia/Eucla', 'Australia/Hobart', 'Australia/Lindeman',
    'Australia/Melbourne', 'Australia/Perth', 'Australia/Sydney', 'Europe/Amsterdam',
    'Europe/Andorra', 'Europe/Athens', 'Europe/Belgrade', 'Europe/Berlin', 'Europe/Bratislava',
    'Europe/Brussels', 'Europe/Bucharest', 'Europe/Budapest', 'Europe/Busingen', 'Europe/Chisinau',
    'Europe/Copenhagen', 'Europe/Dublin', 'Europe/Gibraltar', 'Europe/Guernsey', 'Europe/Helsinki',
    'Europe/Isle_of_Man', 'Europe/Istanbul', 'Europe/Jersey', 'Europe/Kaliningrad', 'Europe/Kiev',
    'Europe/Lisbon', 'Europe/Ljubljana', 'Europe/London', 'Europe/Luxembourg', 'Europe/Madrid',
    'Europe/Malta', 'Europe/Mariehamn', 'Europe/Minsk', 'Europe/Monaco', 'Europe/Moscow',
    'Europe/Nicosia', 'Europe/Oslo', 'Europe/Paris', 'Europe/Podgorica', 'Europe/Prague',
    'Europe/Riga', 'Europe/Rome', 'Europe/San_Marino', 'Europe/Sarajevo', 'Europe/Sofia',
    'Europe/Stockholm', 'Europe/Tallinn', 'Europe/Tirane', 'Europe/Uzhgorod', 'Europe/Vaduz',
    'Europe/Vatican', 'Europe/Vienna', 'Europe/Vilnius', 'Europe/Volgograd', 'Europe/Warsaw',
    'Europe/Zagreb', 'Europe/Zaporozhye', 'Europe/Zurich', 'Indian/Antananarivo', 'Indian/Chagos',
    'Indian/Christmas', 'Indian/Cocos', 'Indian/Kerguelen', 'Indian/Mahe', 'Indian/Maldives',
    'Indian/Mauritius', 'Indian/Reunion', 'Pacific/Apia', 'Pacific/Auckland', 'Pacific/Chatham',
    'Pacific/Chuuk', 'Pacific/Easter', 'Pacific/Efate', 'Pacific/Enderbury', 'Pacific/Fakaofo',
    'Pacific/Fiji', 'Pacific/Funafuti', 'Pacific/Galapagos', 'Pacific/Gambier', 'Pacific/Guadalcanal',
    'Pacific/Guam', 'Pacific/Kiritimati', 'Pacific/Kosrae', 'Pacific/Kwajalein', 'Pacific/Majuro',
    'Pacific/Marquesas', 'Pacific/Midway', 'Pacific/Nauru', 'Pacific/Niue', 'Pacific/Norfolk',
    'Pacific/Noumea', 'Pacific/Pago_Pago', 'Pacific/Palau', 'Pacific/Pitcairn', 'Pacific/Ponape',
    'Pacific/Port_Moresby', 'Pacific/Rarotonga', 'Pacific/Saipan', 'Pacific/Tahiti', 'Pacific/Tarawa',
    'Pacific/Tongatapu', 'Pacific/Truk', 'Pacific/Wake', 'Pacific/Wallis', 'Pacific/West'
];

// Populate time zones in the dropdown
function populateTimeZones() {
    const timezoneSelect = document.getElementById('timezoneSelect');

    timeZones.forEach(timezone => {
        const option = document.createElement('option');
        option.value = timezone;
        option.textContent = timezone;
        timezoneSelect.appendChild(option);
    });
}

// Function to compare two dates
async function compareDates() {
    const date1 = document.getElementById('date1').value;
    const date2 = document.getElementById('date2').value;

    try {
        const response = await fetch('/compareDates', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date1, date2 })
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const result = await response.json();
        document.getElementById('compareResult').innerText = formatDifference(result.difference);
    } catch (error) {
        document.getElementById('compareResult').innerText = `Error comparing dates: ${error.message}`;
    }
}

// Function to convert time zone
async function convertTimeZone() {
    const date = document.getElementById('timezoneInput').value;
    const timezone = document.getElementById('timezoneSelect').value;

    try {
        const response = await fetch('/convertTimeZone', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date, timezone })
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const result = await response.json();
        document.getElementById('timezoneResult').innerText = result.convertedDate;
    } catch (error) {
        document.getElementById('timezoneResult').innerText = `Error converting time zone: ${error.message}`;
    }
}

// Function to convert date format
async function convertDateFormat() {
    const date = document.getElementById('dateFormatInput').value;
    const format = document.getElementById('dateFormatSelect').value;

    const inputFormat = 'MM/dd/yyyy';
    const dt = luxon.DateTime.fromFormat(date, inputFormat);

    if (!dt.isValid) {
        document.getElementById('dateFormatResult').innerText = 'Invalid input date format';
        return;
    }

    try {
        const response = await fetch('/convertDateFormat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: dt.toISO(), format })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        document.getElementById('dateFormatResult').innerText = result.formattedDate || 'No formatted date returned';
    } catch (error) {
        document.getElementById('dateFormatResult').innerText = `Error converting date format: ${error.message}`;
    }
}



// Function to format date differences
function formatDifference(difference) {
    const { years, months, days, hours, minutes, seconds } = difference;
    return `${years || 0} years, ${months || 0} months, ${days || 0} days, ${hours || 0} hours, ${minutes || 0} minutes, ${seconds || 0} seconds`;
}
