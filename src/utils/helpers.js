/***
 * Convert date to time in AM or PM
 * @param date
 * @returns {string}
 */

export const convertTimestamp =(timestamp)=> {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    let d = new Date(timestamp), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm =  monthNames[d.getMonth()],  // Months are zero based. Add leading 0.
        dd = ("0" + d.getDate()).slice(-2),         // Add leading 0.
        hh = d.getHours(),
        h = hh,
        min = ("0" + d.getMinutes()).slice(-2),     // Add leading 0.
        ampm = "AM",
        time;
    if (hh > 12) {
        h = hh - 12;
        ampm = "PM";
    } else if (hh === 12) {
        h = 12;
        ampm = "PM";
    } else if (hh == 0) {
        h = 12;
    }
    time = dd + " " + mm + " " + yyyy + ", " + h + ":" + min + " " + ampm;
    return time;
};
