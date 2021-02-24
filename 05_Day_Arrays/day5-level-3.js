//Exercise 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);

median = (ages[4] + ages[5]) / 2;
console.log(median);

average = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] +
 ages[8] + ages[9]) / ages.length;
console.log(average);

range = ages[9] - ages[0];
console.log(range);

let minMinusAve = Maths.abs(ages[0] - average);
let maxMinusAve = Maths.abs(ages[9] - average);

if(minMinusAve > maxMinusAve) {
    console.log(`${minMinusAve} is greater than ${maxMinusAve}`);
} else if (maxMinusAve > minMinusAve) {
    console.log(`${maxMinusAve} is greater than ${minMinusAve}`);
}