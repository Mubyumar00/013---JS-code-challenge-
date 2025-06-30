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


// const johnMass = 78;
// const johnHeight = 1.69;

// const markMass = 92;
// const markHeight = 1.69;


// const johnBMI = johnMass / johnHeight ** 2;
// const markBMI = markMass / markHeight ** 2;

// const markHigherBMI = markBMI > johnBMI;


// console.log(johnBMI);
// console.log(markBMI);
// console.log(markHigherBMI);

// const johnMassTwo = 85;
// const johnHeightTwo = 1.76;

// const markMassTwo = 95;
// const markHeightTwo = 1.88;

// const johnBMITwo = johnMassTwo / johnHeightTwo ** 2;
// const markBMITwo = markMassTwo / markHeightTwo ** 2;

// const markTwoHigherBMI = markBMITwo > johnBMITwo;


// console.log(johnBMITwo);
// console.log(markBMITwo);
// console.log(markTwoHigherBMI);


// // Type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);


// // 5 falsy values : 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('mubee'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//     console.log("don't spend it all.");
// } else {
//     console.log("You should get a job");
// }

// let height = 123;
// if (height) {
//     console.log('YAY! height is defined');
// } else {
//     console.log('Height is undefined');
// }

// Equality Operators

// const favorite = Number(prompt("what's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     console.log('Cool! 23 is the right answer');
// } else if (favorite === 7) {
//     console.log('7 is also a cool number');
// } else if (favorite === 9) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('Number is not 23, or 7 or 9');
// }

// if (favorite !== 23) {
//     console.log('Why not 23?');
// }

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is greater than John's (${BMIJohn})`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is greater than Mark's (${BMIMark})`);
// }

// LOGICAL OPERATORS

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense);
// console.log(hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('yay!! you can drive');
// } else {
//     console.log('opps!! someone should drive...');
// }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('yay!! you can drive');
// } else {
//     console.log('oops!! someone should drive...');
// }


// CODE CHALLENGE 03
// both team compete 3 times, winner with avg scores win. 

// const teamDolphins = 0;
// const teamKoalas = 0;

// const teamA = teamDolphins;
// const teamB = teamKoalas;

// console.log(teamA, teamB);

// const teamAScoreOne = 96;
// const teamAScoreTwo = 108;
// const teamAScoreThree = 89;

// const teamBScoreOne = 88;
// const teamBScoreTwo = 91;
// const teamBScoreThree = 110;

// const avgteamA = (teamAScoreOne + teamAScoreTwo + teamAScoreThree) / 3;
// const avgteamB = (teamBScoreOne + teamBScoreTwo + teamBScoreThree) / 3;

// 1 - Average score of teamA & teamB
// console.log(avgteamA, avgteamB);

// 2 - Determine the winner based on average scores
// if (avgteamA > avgteamB) {
//     console.log(`Team A wins with an average score of ${avgteamA}`);
// } else if (avgteamB > avgteamA) {   
//     console.log(`Team B wins with an average score of ${avgteamB}`);
// } else if (avgteamA === avgteamB) {
//     console.log(`It's a draw with both teams scoring ${avgteamA}`);
// } else {
//     console.log('No team wins');
// }


//  Bonus - 1: 100 points as minimum score to win
// const minScore = 100;

// if (avgteamA > avgteamB && avgteamA >= minScore) {
//     console.log(`Team A wins having score greater than 100, with ${avgteamA}`);
// } else if (avgteamB > avgteamA && avgteamB >= minScore) {
//     console.log(`Team B wins having score greater than 100, with ${avgteamB}`);
// } else if (avgteamA === avgteamB && avgteamA >= minScore) {
//     console.log(`It's a draw with both teams scoring ${avgteamA, avgteamB} which is greater than 100`);
// } else {
//     console.log('No team wins as no team scored above 100');
// }


//  CONDITIONAL OPERATORS
// const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);


// Code challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant.
// 1. Create a variable called bill for the bill value. 
// 2. Create a variable called tip, for the tip value. using the formula: tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// 3. Create a variable called total, for the total value (bill + tip).
// TEST DATA: Test for bill values 275, 40 and 430.

// TEST 01
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const total = bill + tip;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${total}.`);

// TEST 02
// const bill = 40;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const total = bill + tip;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${total}.`);

// TEST 03
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${total}.`);