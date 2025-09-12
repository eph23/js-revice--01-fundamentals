"use strict";

// Array literal
const friends = ["Michael", "Steven", "Bob"];
console.log(friends);

// Array Constructor Function
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// Accessing Array Elements
console.log(friends[0]);
console.log(friends[2]);

// Array property
console.log(friends.length);
console.log(friends[friends.length - 1]);

// Mutating Array Value
friends[2] = "Jay";
console.log(friends);

//JS can hold any type of data
const firstName = "Ephraim";
const eph = [firstName, "Sangma", 2037 - 1988, "Web Dev", friends];
console.log(eph.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const birthYears = [1990, 1967, 2002, 2010, 2018];
const ages = [
    calcAge(birthYears[0]),
    calcAge(birthYears[1]),
    calcAge(birthYears[birthYears.length - 1]),
];

console.log(ages);
