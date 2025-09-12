"use strict";

const friends = ["Michael", "Steven", "Jay"];
console.log(friends);

// push method
console.log("push method");
friends.push("Sarah");
console.log(friends);

// unshift method
console.log("unshift method");
friends.unshift("Bob");
console.log(friends);

// pop method
console.log("pop method");
const popped = friends.pop();
console.log("Popped>", popped);
console.log(friends);

// shift method
console.log("shift method");
const shifted = friends.pop();
console.log("Shifted>", shifted);
console.log(friends);

// indexOf
console.log("indexOf method");
console.log(friends.indexOf("Bob"));
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Sarah"));

// includes
console.log("includes method");
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("Sarah"));
console.log(friends.includes("bob"));
