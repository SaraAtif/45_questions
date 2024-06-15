//Question #16
var guest = ["Sara", "Tooba", "Areeba"];
console.log("Graeat news! i have a big place for Party");
//Adding more guest
guest.unshift("Nida");
guest.splice(guest.length / 2, 0, "Sidra");
guest.push("Sundus");
guest.forEach(function (guests) {
    console.log("Dear ".concat(guests, "! would u like to jion me for Party?"));
});
//Question #17
console.log("unfortunately, i can only invite two people for Party.");
//Remove from the list
while (guest.length > 2) {
    var removedGuest = guest.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you for Party"));
    console.log(removedGuest + "sorry, cant invite");
}
guest.forEach(function (guests) {
    console.log("Dear ".concat(guests, "! you are still invite for Party."));
});
//show an empty list
guest.splice(0, guest.length);
console.log(guest);
//Question #18
var places = ["London", "India", "Turkey", "Palistan", "Switzerland"];
//Original Order
console.log("Original order:", places);
//Alphabetical Order
console.log("Alphabetical order:", places.sort());
//Reverse Alphabetical order
console.log("Reverse Order:", places.reverse());
