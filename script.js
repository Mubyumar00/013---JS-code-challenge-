// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const johnMass = 78;
// const johnHeight = 1.69;

// const markMass = 92;
// const markHeight = 1.95;

// const BMI = mass / height ** 2;
// console.log(BMI);


const johnMass = 78;
const johnHeight = 1.69;

const markMass = 92;
const markHeight = 1.69;


const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / markHeight ** 2;

const markHigherBMI = markBMI > johnBMI;


console.log(johnBMI);
console.log(markBMI);
console.log(markHigherBMI);

const johnMassTwo = 85;
const johnHeightTwo = 1.76;

const markMassTwo = 95;
const markHeightTwo = 1.88;

const johnBMITwo = johnMassTwo / johnHeightTwo ** 2;
const markBMITwo = markMassTwo / markHeightTwo ** 2;

const markTwoHigherBMI = markBMITwo > johnBMITwo;

console.log(johnBMITwo);
console.log(markBMITwo);
console.log(markTwoHigherBMI);


// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);


// 5 falsy values : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('mubee'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("don't spend it all.");
} else {
    console.log("You should get a job");
}

let height = 123;
if (height) {
    console.log('YAY! height is defined');
} else {
    console.log('Height is undefined');
}

// Equality Operators

const favorite = Number(prompt("what's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool! 23 is the right answer');
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else if (favorite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23, or 7 or 9');
}

if (favorite !== 23) {
    console.log('Why not 23?');
}