// Q19. Dinner guests : working with one of the programs from exercise 14 through 18 print a message indicating the number of people you are inviting dinner

let myFriends: string [] = ["Ali","Ahmed","waqas","Manzoor","Taiq"];

console.log(`i am inviting ${myFriends.length} number of friends to my dinner which are following\n`);

for(let i=0; i < myFriends.length ; i++){
    console.log(`${i + 1}. ${myFriends [i]} `)
}