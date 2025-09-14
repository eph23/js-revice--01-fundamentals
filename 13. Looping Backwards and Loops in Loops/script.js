"use strict";

const eph = ["Eph", "S", 2037 - 1988, "Web Dev", ["Michael", "Steven", "Bob"]];
console.log(eph);

// Looping backwards
for (let i = eph.length - 1; i >= 0; i--) {
    console.log(i, eph[i]);
}

// Loops in loops

for (let exercise = 1; exercise <= 3; exercise++) {
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}, repetition ${rep}`);
    }

    console.log("=====BREAK=====");
}
