// shrinking Guest list: you just found out that your new dinner table 

// initial list of guest
let guest : string[] = ["Ali","Bilal"];

// informing that only two people can be invited
console.log("Due to limited space,only two people can be invited for dinner.");

// Removing guest will only two names remain
while (guest.length > 2){
    const removeGuest = guest.pop();  //Remove the last guest from the list
    console.log(`sorry, ${removeGuest},ypu are no longer invited to dinner.`);
}

// printing invitations to the remaining two guests

guest.forEach((guest) => {
    console.log(` Dear ${guest}, you're still invited to dinner.`);

});

// Removing the last two names from the list
guest.pop();
guest.pop();

// printing the final list to confirm it's empty
console.log( "final guest list", guest);