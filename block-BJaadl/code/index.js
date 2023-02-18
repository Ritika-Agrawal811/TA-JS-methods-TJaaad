let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(arr) {
  let longestWord = "";
  for (let word of arr) {
    if (longestWord.length <= word.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord(words));

// - Convert the above array "words" into an array of length of word instead of word.
let wordsLength = words.map((value) => value.length);

console.log(wordsLength);

// - Create a new array that only contains word with atleast one vowel.
let newWords = words.filter((value) => {
  if (
    value.includes("a") ||
    value.includes("e") ||
    value.includes("i") ||
    value.includes("o") ||
    value.includes("u")
  ) {
    return true;
  } else {
    return false;
  }
});

console.log(newWords);

// - Find the index of the word "rhythm"
console.log(words.findIndex((value) => value == "rhythm"));

// - Create a new array that contians words not starting with vowel.

let newWords1 = words.filter(
  (value) => !["a", "e", "i", "o", "u"].includes(value.charAt(0))
);

console.log(newWords1);

// - Create a new array that contianse words not ending with vowel
let newWords2 = words.filter(
  (value) => !["a", "e", "i", "o", "u"].includes(value.charAt(value.length - 1))
);

console.log(newWords2);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum = sum + num;
  }

  return sum;
}

console.log(sumArray(numbers));

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipliedBy3 = numbers.map((value) => value * 3);

// - Create a new array that contains only even numbers
let evenNumbers = numbers.filter((value) => value % 2 == 0);

// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter((value) => value % 2 != 0);

// - Create a new array that should have true for even number and false for odd numbers.
let numbers1 = numbers.map((value) => (value % 2 == 0 ? true : false));

console.log(numbers1);

// - Sort the above number in assending order.
numbers.sort((a, b) => a - b);

console.log(numbers);

// - Does sort mutate the original array?
// yes

// - Find the sum of the numbers in the array.

console.log(numbers.reduce((total, value) => total + value, 0));

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(arr) {
  let total = 0;
  for (let value of arr) {
    total = total + value;
  }
  return total / arr.length;
}

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(arr) {
  let total = 0;
  for (let word of arr) {
    total = total + word.length;
  }

  return total / arr.length;
}
