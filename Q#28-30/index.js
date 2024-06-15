"use strict";
//Question #28
let age = 36;
if (age < 2) {
    console.log("You are a Baby.");
}
else if (age < 4) {
    console.log("you are a Toosler.");
}
else if (age < 13) {
    console.log("You are a Kid.");
}
else if (age < 20) {
    console.log("You are a teenager.");
}
else if (age < 65) {
    console.log("You are an Adult.");
}
else {
    console.log("You are an Elder. ");
}
//Question # 29
let favFruits = ["mango", "orange", "banana"];
if (favFruits.includes("mango")) {
    console.log("I want to eat mango.");
}
if (favFruits.includes("banana")) {
    console.log("I want to eat banana.");
}
//Question #30
//if else statement with loop
let usernames = ["admin", "user1", "user2", "user3"];
usernames.forEach(username => {
    if (username === "admin") {
        console.log("Helloo admin! you can show status.");
    }
    else {
        console.log(`Hello  ${username}! Thank you for logging in again.`);
    }
});
