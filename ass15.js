// Changing Guest List:you just heared that one of your guest can't make the dinner,so you need to send out a new set of invitations.you'll have to think of someone else to invite.
// start with your program from exercise 14 Add a print statement at the end of your program starting the name of the guest who can't  make it.
//Modify your list ,replacing the name of the guest,who can't make it with the ame of the new person you are inviting.
// print a second set of invitation message,one for each perspon who is still in your list.
var guestarr = ["ahad", "samad", "bilal", "ali"];
var canNotAttend = "ali";
console.log(canNotAttend + " ", "canNot attend the dinner.");
var newGuest = "Imran";
guestarr[guestarr.indexof(canNotAttend)] = newGuest;
console.log(guestarr);
guestarr.map(function (items) {
    return console.log(" Dear ".concat(items, ",you are invited the dinner."));
});
