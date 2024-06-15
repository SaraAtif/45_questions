"use strict";
//Question #31
let doctorNames = [];
if (doctorNames.length === 0) {
    console.log("we find some doctors.");
}
else {
    console.log("Hello doctor!");
}
//Question #32
let current_user = ["Haris", "Tom", "Aslam", "Usama", "Owais"];
let new_user = ["Sam", "Tom", "Fakhir", "Ahmed", "Aslam"];
new_user.forEach(newuser => {
    if (current_user.some(currentuser => currentuser.toLowerCase() === newuser.toLowerCase())) {
        console.log(`${newuser} will need to enter a new username.`);
    }
    else {
        console.log(`${newuser} is available.`);
    }
});
//Question #33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
