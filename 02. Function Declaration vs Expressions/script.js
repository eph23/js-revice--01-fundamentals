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
