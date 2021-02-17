1. 
let userCurrentMonth = prompt('Enter month', '');
let currentMonth = userCurrentMonth.toLowerCase();

if (
    currentMonth === 'january' ||
    currentMonth === 'march' ||
    currentMonth === 'may' ||
    currentMonth === 'july' ||
    currentMonth === 'august' ||
    currentMonth === 'october' ||
    currentMonth === 'december' ){
        console.log(`${currentMonth} has 31 days`)
} else if (
    currentMonth === 'april' ||
    currentMonth === 'june' ||
    currentMonth === 'september' ||
    currentMonth === 'november' ) {
        console.log(`${currentMonth} has 30 days`)
} else if (currentMonth === 'february') {
        console.log (`${currentMonth} has 29 days`)
} else {
    console.log('please input a valid month');
}



