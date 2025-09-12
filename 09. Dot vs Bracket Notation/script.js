"use strict";

// Object literal
const eph = {
    firstName: "Eph",
    lastName: "Sangma",
    age: 2037 - 1988,
    job: "Web Dev",
    friends: ["Michael", "Steven", "Bob"],
};

console.log(eph);

// Accessing object properties
console.log(eph.lastName); //dot notation
console.log(eph["firstName"]); //bracket notation

const nameKey = "Name";
console.log(eph["first" + nameKey]);
console.log(eph["last" + nameKey]);

/* 
const interestedIn = prompt(`What do you want to know about Ephraim?
Choose between firstName, lastName, age, job and friends`);
if (interestedIn) {
    console.log(interestedIn);
    console.log(eph[interestedIn]);
} else {
    console.log(`Wrong request!`);
}
*/

// Mutating object property
eph.location = "Canada";
eph["twitter"] = "@ephs23";
console.log(eph);

eph["twitter"] = "@helloEphs";
console.log(eph);

// Challenge
/* Eph has 3 friends and his best friend is called Steven */
console.log(
    `${eph.firstName} has ${eph.friends.length} friends and his best friend is called ${eph.friends[1]}`
);
