

const day = "Friday";
const month = "September";
const date = 29;
const time = "21:49";

const macTimeDisplay = `${day.slice(0,3)} ${date} ${month.slice(0,3)} ${time}`;

// Before running code, answer the following - write down your answers:
// a) how many function calls are there in this file? two
// b) predict and explain what macTimeDisplay will evaluate to. You can use documentation to look up slice
macTimeDisplay will evaluate to "Fri 29 Sep 21:49". The slice method is used to extract a section of a string and return it as a new string. In this case, it takes the first three characters of the day and month strings.
