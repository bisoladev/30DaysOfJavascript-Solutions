const badSentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;.\
 The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. \
 ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u \
 to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.";

const hash = /#/g;
const percent = /%/g;
const dollar = /\$/g;
const at = /@/g;
const and = /&/g;
const semicolon = /\;/g;

const cleanedText = badSentence
  .replace(hash, "")
  .replace(percent, "")
  .replace(dollar, "")
  .replace(at, "")
  .replace(and, "")
  .replace(semicolon, "");

console.log(cleanedText);

function findMostRepeatedWord(cleanedText) {
  let words = cleanedText.match(/\w+/g);
  console.log(`This is the result of the words variable: ${words}`);

  let occurances = {};

  for (let word of words) {
    if (occurances[word]) {
      occurances[word]++;
    } else {
      occurances[word] = 1;
    }
  }

  console.log(occurances);

  let max = 0;
  let mostRepeatedWord = "";

  for (let word of words) {
    if (occurances[word] > max) {
      max = occurances[word];
      mostRepeatedWord = word;
    }
  }

  return mostRepeatedWord;
}
console.log(findMostRepeatedWord(cleanedText));
console.log(mostRepeatedWord);