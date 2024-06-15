//Question #37
// Default value in function
function  makeShirt (size:number, message = "The Educator school") {
    console.log(`The size of teh shirt is ${size} and print ${message} on it.`)
}
makeShirt(20);

//Question #38
function cities(city = "karachi" , country= "Pakistan"){
    console.log(`${city} is the city of ${country}.`)
}
cities();
cities("lahore");
cities("Tokyo","Japan");

//Question #39
//Returning value
function cityCountry (city:string, country: string){
    return `${city} in ${country}.`
}
//let citiesLocation = cityCountry("karachi", "Pakistan");
//console.log(citiesLocation);
console.log(cityCountry("karachi","Pakistan"));
console.log(cityCountry("Multan","Pakistan"));
console.log(cityCountry("Tokyo","Japan"));