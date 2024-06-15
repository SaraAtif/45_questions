//Question #37
// Default value in function
function makeShirt(size, message) {
    if (message === void 0) { message = "The Educator school"; }
    console.log("The size of teh shirt is ".concat(size, " and print ").concat(message, " on it."));
}
makeShirt(20);
//Question #38
function cities(city, country) {
    if (city === void 0) { city = "karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is the city of ").concat(country, "."));
}
cities();
cities("lahore");
cities("Tokyo", "Japan");
//Question #39
//Returning value
function cityCountry(city, country) {
    return "".concat(city, " in ").concat(country, ".");
}
//let citiesLocation = cityCountry("karachi", "Pakistan");
//console.log(citiesLocation);
console.log(cityCountry("karachi", "Pakistan"));
console.log(cityCountry("Multan", "Pakistan"));
console.log(cityCountry("Tokyo", "Japan"));
