//Question #34
var pizzas = ["Fajita", "Tikka", "Cheese"];
pizzas.forEach(function (pizza) {
    return console.log("I like ".concat(pizza, " pizza"));
});
console.log("I usually eat these pizzas");
//Question #35
var animalsName = ["cat", "dog", "goat", "cow"];
animalsName.forEach(function (animal) {
    return console.log("".concat(animal, " is a pet animal."));
});
//Question #36
function shirts(size, message) {
    console.log("The size of the shirt is ".concat(size, " and ").concat(message, " print on it."));
}
shirts(20, "The Educator school");
