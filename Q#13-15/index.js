//Question #13
var transportation = ["car", "motorcycle", "jet",];
//for (let name of transportation){
//console.log(`I would like to own a ${name}`)
//}
transportation.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
//Question #14
var guestName = ["Atif", "Areeba", "Tooba"];
guestName.forEach(function (guest) {
    console.log("Helloo ".concat(guest, "! you would like to join me for dinner?"));
});
//Question #15
var unableToAttend = "Atif";
console.log("".concat(unableToAttend, " can't make it to dinner."));
//Replace the guest
var newGuest = "Rafia";
guestName[guestName.indexOf(unableToAttend)] = newGuest;
//New invitations
guestName.forEach(function (guest) {
    console.log("Dear ".concat(guest, "! you would like to join me for dinner?"));
});
