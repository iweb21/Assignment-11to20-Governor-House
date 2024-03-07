"use strict";
// Q18. Seeing the World: think at least five places in the world you would like to visit
// store the location in a array. make sure the array is not in alpabetical order.
// print your array in its original order
// print your array in alphabetical order without modifying the actual list
// show that your array is still in its original order by printing it
// print your array in reverse alphabetical order wihtout changing the order of the original list
// show that your array is still in its original order by printing it again
// reverse the order of your list print the array to show that its order has changed.
// reverse the order of your list again. print the list to show its back to its original order
// sort your array so its stored in alphabetical order. print the array to show that its order has been changed
// sort to change your array so its a store in reverse alphabetical order. print the list to show that its order has changed
let myPlaces = ["karachi", "larkana", "sukkur", "uk", "Quetta"];
console.log(myPlaces);
// making a copy of an array
let copyofArr = myPlaces.slice();
let sortedArr = copyofArr.sort();
console.log(sortedArr);
// printing original array
console.log(myPlaces);
// reversing original array
// first we have make a copy of original array
let copyofArr2 = myPlaces.slice();
let reverseorArrar = copyofArr2.reverse();
console.log(reverseorArrar);
// printing original array
console.log(myPlaces);
// reverse the order of original array
let reverseorArray2 = myPlaces.reverse();
console.log(reverseorArray2);
let againReverse = reverseorArray2.reverse();
console.log(againReverse); //same as original array
// sorting original array
let sortorArr = myPlaces.sort();
console.log(sortorArr);
let reversesortedArr = sortorArr.reverse();
console.log(reverseorArrar);
