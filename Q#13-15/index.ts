//Question #13
let transportation = ["car","motorcycle","jet",];
//for (let name of transportation){
    //console.log(`I would like to own a ${name}`)
//}
transportation.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});

//Question #14
let guestName = ["Atif","Areeba","Tooba"];
guestName.forEach(guest => {
    console.log(`Helloo ${guest}! you would like to join me for dinner?`);
});

//Question #15
let unableToAttend = "Atif"
console.log(`${unableToAttend} can't make it to dinner.`);
//Replace the guest
let newGuest = "Rafia"
guestName[guestName.indexOf(unableToAttend)] = newGuest;
//New invitations
guestName.forEach(guest => {
    console.log(`Dear ${guest}! you would like to join me for dinner?`);
});
