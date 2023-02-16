// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log([...strings].join(" "));

// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "sentence");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log([...strings].join(" "));

// - Remove the first word in the array (strings)
strings.shift();

// - Find all the words that contain 'is' use string method 'includes'
for (let word of strings) {
  if (word.includes("is")) {
    console.log(word);
  }
}

// - Find all the words that contain 'is' use string method 'indexOf'
for (let word of strings) {
  if (word.indexOf("is") != -1) {
    console.log(word);
  }
}

// - Check if all the numbers in numbers array are divisible by three use array method (every)
let isDivisibleByThree = numbers.every((value) => value / 3);
console.log(isDivisibleByThree);

// -  Sort Array from smallest to largest

console.log([...numbers].sort((a, b) => a - b));

// - Remove the last word in strings

strings.pop();

// - Find largest number in numbers
let largestNum = numbers.reduce((max, value) => {
  return max < value ? value : max;
}, numbers[0]);

console.log(largestNum);

// - Find longest string in strings
let longestString = strings.reduce((maxString, value) => {
  return maxString.length < value.length ? value : maxString;
}, strings[0]);

console.log(longestString);

// - Find all the even numbers

let evenNumbers = numbers.filter((value) => value % 2 == 0);

console.log(evenNumbers);

// - Find all the odd numbers

let oddNumbers = numbers.filter((value) => value % 2 != 0);

console.log(oddNumbers);

// - Place a new word at the start of the array use (unshift)

strings.unshift("Hello");

// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 7));

// - Make a subset of strings array ['a','collection']

console.log(strings.slice(2, 4));

// - Replace 12 & 18 with 1221 and 1881
let indexOf12 = numbers.indexOf(12);
let indexOf18 = numbers.indexOf(18);

numbers[indexOf12] = 1221;
numbers[indexOf18] = 1881;

console.log(numbers);

// - Replace words in strings array with the length of the word

for (let wordIndex in strings) {
  strings[wordIndex] = strings[wordIndex].length;
}

console.log(strings);

// - Find the sum of the length of words using above question

let lengthSum = strings.reduce((total, value) => total + value, 0);

console.log(lengthSum);

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'
for (let customer of customers) {
  if (customer.firstname.startsWith("J")) {
    console.log(customer);
  }
}

// - Create new array with only first name

let firstName = customers.map((customer) => customer.firstname);

console.log(firstName);

// - Create new array with all the full names (ex: "Joe Blogs")

let fullName = customers.map(
  (customer) => customer.firstname + " " + customer.lastname
);

console.log(fullName);

// - Sort the array created above alphabetically

fullName.sort();

console.log(fullName);

// - Create a new array that contains only user who has at least one vowel in the firstname.
