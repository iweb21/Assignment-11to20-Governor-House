"use strict";
// More Guest:your just found a bigger dinner table,so nw more space is available.Think of three more guest to invite to dinner.
// Start your program from exercise15 .Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Add one new guest to te begginning of your array.
// Add one new guest to the middle of your array.
// Use append()to add one new guest to the end of your list.
// Print a new set of invitation messages,one for each person in your list.
let guestArr = ["Alishba", "Haseeb", "Ahad", "samad"];
let canNotAttend = "Alishba";
let newGuest = "imran";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map((items) => console.log(`Dear ${items}, i found a bigger dinner table so i am invited more peoples.`));
//  part2 Began
let guestBeg = "moiz";
guestArr.unshift(guestBeg);
console.log(guestArr);
//  part3 Middle
let middleGuest = "Fatima";
let middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
// part4 Append
guestArr.push("zeeshan");
console.log(guestArr);
// part5 
guestArr.map((items) => console.log(` Dear ${items},you are invited in the more people list on dinner`));
