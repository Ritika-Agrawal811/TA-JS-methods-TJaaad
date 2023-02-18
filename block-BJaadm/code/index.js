let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map((value) => value.name);

console.log(peopleName);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((value) => value.grade);

console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((value) => value.sex);

console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(
  peopleName.filter((value) => value.startsWith("J") || value.startsWith("P"))
);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let newArray = peopleName.filter(
  (value) => value.startsWith("A") || value.startsWith("C")
);

console.log(newArray.map((value) => value.length));

// Log all the filtered male ('M') in persons array
console.log(persons.filter((value) => value.sex === "M"));

// Log all the filtered female ('F') in persons array
console.log(persons.filter((value) => value.sex === "F"));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(
  persons.filter(
    (value) =>
      value.sex === "F" &&
      (value.name.startsWith("C") || value.name.startsWith("J"))
  )
);

// Log all the even numbers from peopleGrade array
let evenNumbers = peopleGrade.filter((value) => value % 2 == 0);

console.log(evenNumbers);

// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find((value) => value.name.startsWith("J")));

// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find((value) => value.name.startsWith("P")));

// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(
  persons.find(
    (value) =>
      value.name.startsWith("J") && value.grade > 10 && value.sex == "F"
  )
);

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((value) => value.sex == "F");

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((value) => value.sex == "M");

// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.reduce((total, value) => total + value.grade, 0);

console.log(gradeTotal);

// Find the average grade
console.log(gradeTotal / persons.length);

// Find the average grade of male
let gradeMaleTotal = malePersons.reduce(
  (total, value) => total + value.grade,
  0
);

console.log(gradeMaleTotal / malePersons.length);

// Find the average grade of female

let gradeFemaleTotal = femalePersons.reduce(
  (total, value) => total + value.grade,
  0
);

console.log(gradeFemaleTotal / femalePersons.length);

// Find the highest grade
console.log(peopleGrade.reduce((max, value) => (max > value ? max : value), 0));

// Find the highest grade in male
console.log(
  malePersons.reduce((max, value) => (max > value.grade ? max : value.grade), 0)
);

// Find the highest grade in female
console.log(
  femalePersons.reduce(
    (max, value) => (max > value.grade ? max : value.grade),
    0
  )
);

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a, b) => a - b);

console.log(peopleGrade);

// Sort the peopleGrade in descending order

peopleGrade.sort((a, b) => b - a);

console.log(peopleGrade);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();

console.log(peopleName);

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
