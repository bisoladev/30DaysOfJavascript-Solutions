//Exercise 1

const now = new Date()
const presentYear = now.getFullYear() // return year

let month = now.getMonth() + 1 // (01-12)
if(month > 9) {
    month;
} else if (month < 9) {
    month = `0${month}`;
}

let date = now.getDate() // return date (01 - 31)
if(date > 9) {
    date;
} else if (date < 9) {
    date = `0${date}`;
}

let hours = now.getHours() // return number (00 - 23)
if(hours > 9) {
    hours;
} else if (hours < 9) {
    hours = `0${hours}`;
}

let minutes = now.getMinutes() // return number (00 -59)
if(minutes > 9) {
    minutes;
} else if (month < 9) {
    minutes = `0${minutes}`;
}

console.log(`${presentYear}-${month}-${date} ${hours}:${minutes}`) //2021-02-17 00:08
