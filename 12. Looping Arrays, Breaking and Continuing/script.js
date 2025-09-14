"use strict";

const eph = [
    "Eph",
    "S",
    2037 - 1988,
    "Web Dev",
    ["Michael", "Steven", "Bob"],
    true,
];

console.log(eph);

const types = [];

for (let i = 0; i <= eph.length - 1; i++) {
    if (typeof eph[i] === "string") {
        types.push(eph[i]);
    }
}
console.log(types);

// Exercise
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i <= years.length - 1; i++) {
    const age = 2037 - years[i];
    ages.push(age);
}

console.log(ages);

// Continue
console.log("===Continue===");
for (let i = 0; i <= eph.length - 1; i++) {
    if (typeof eph[i] !== "string") {
        continue;
    }
    console.log(eph[i]);
}

// Break
console.log("===Break===");
for (let i = 0; i <= eph.length - 1; i++) {
    if (typeof eph[i] === "number") {
        break;
    }
    console.log(eph[i]);
}
