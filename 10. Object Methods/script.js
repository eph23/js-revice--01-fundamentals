"use strict";

const eph = {
    firstName: "Eph",
    lastName: "S",
    birthYear: 1988,
    job: "Web Dev",
    friends: ["Michael", "Steven", "Bob"],
    hasDriversLicense: true,

    calcAge: function () {
        console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    //     Challenge
    getSummery: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${
            this.job
        } and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
    },
};

console.log(eph.calcAge());
console.log(eph.age);

// Challenge
/* Write a getSummery method to get summery about eph
Eph is a 49 years old Web Dev and he has a drivers license
*/
console.log(eph.getSummery());
