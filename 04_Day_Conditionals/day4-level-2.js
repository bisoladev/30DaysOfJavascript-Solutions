//Exercise 1
let studentGrade = prompt('Input score', '');
let studentGradeInt = parseInt(studentGrade);

if (studentGradeInt >= 80) {
    console.log('You scored A');
} else if (studentGradeInt >= 70 && studentGradeInt < 80) {
    console.log('You scored B')
} else if (studentGradeInt >= 60 && studentGradeInt < 70) {
    console.log('You scored C')
} else if (studentGradeInt >= 50 && studentGradeInt < 60) {
    console.log('You scored D')
} else if (studentGradeInt >= 0 && studentGradeInt < 50) {
        console.log('You scored F')   
} else {
    console.log('Input a valid score');
}  

//Exercise 2

let userSeasonInput = prompt('Enter month', '');
let userSeason = userSeasonInput.toLowerCase();

if(userSeason === 'september' || userSeason === 'october' || userSeason === 'november') {
    console.log('the season is Autumn');
} else if (userSeason === 'december' || userSeason === 'january' || userSeason === 'february') {
    console.log('The season is Winter'); 
} else if (userSeason === 'march' || userSeason === 'april' || userSeason === 'may') {
    console.log('The season is Spring');
} else if (userSeason === 'june' || userSeason === 'july' || userSeason === 'august') {
    console.log('The season is Summer');
} else {
    console.log('That is not a season');
}
    

//Exercise 3

let userDayInput = prompt('What is the day today', '');
let userDay = userDayInput.toLowerCase();

if (userDay === 'saturday' || userDay === 'sunday') {
    console.log(`${userDay} is a weekend`)
} else if (
    userDay === 'monday' ||
    userDay === 'tuesday' || 
    userDay === 'wednesday' ||
    userDay === 'thursday' || 
    userDay === 'friday') {
    console.log(`${userDay} is a weekday`);
} else {
    console.log ('Input a valid day');
}
