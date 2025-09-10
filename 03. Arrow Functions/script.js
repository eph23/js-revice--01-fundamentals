"use strict";

// Function Declarations
function calcAgeFD(birthYear) {
    //     const age = 2037 - birthYear;
    return 2037 - birthYear;
    //     return age;
}

const ageFromFD = calcAgeFD(1988);
console.log("Function Declarations ", ageFromFD);

// Function Expressions
const calcAgeFE = function (birthYear) {
    //     const age = 2037 - birthYear;
    return 2037 - birthYear;
    //     return age;
};

const ageFromFE = calcAgeFE(1988);
console.log("Function Expressions ", ageFromFE);

// Arrow Functions
// Simple form
const calcAgeArr = (birthYear) => 2037 - birthYear;

const ageFromArr = calcAgeArr(1988);
console.log("Arrow Functions ", calcAgeArr(1988));

// Extended/Standard form
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    return `${firstName} will retire in ${retirement}-years`;
};

console.log(yearsUntilRetirement(1988, "Eph"));
console.log(yearsUntilRetirement(1980, "Bob"));
