#!/usr/bin/env node
function greet(name) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log("hello", rest);
}
greet("neha mehboob", 26, "thursday", "wasted");
function greet2(name, age) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    console.log("hello", name, rest);
}
greet2("neha mehboob", 26, "thursday", "wasted");
function greet3(name) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log("thursday is wasted successfully", rest);
}
greet3("boring", "time taken", "morning class", "wasted", "9 to 12");
function movie(name, releaseDate) {
    if (releaseDate === void 0) { releaseDate = 2024; }
    console.log("this movie name is ".concat(name, " and release date is ").concat(releaseDate));
}
movie("winne the Pooh");
movie("tom & jerry ", 2023);
var sayHello = function (userName) {
    return console.log("hello, ".concat(userName));
};
sayHello("neha mehboob");
var calculator = function (num1, num2) {
    var result = num1 - num2;
    return result;
};
var subtraction = calculator(2, 1);
console.log(subtraction);
var calculator2 = function (num1, num2) {
    var result = num1 + num2;
    return result;
};
var addition = calculator2(2, 1);
console.log(addition);
var missneha = {
    studentName: "ayesha",
    age: 6,
    class: 1,
    role: "student"
};
console.log(missneha);
var staff = {
    members: 5,
    age: 12,
    job: "technician",
    timing: "5 hours",
    offday: "sunday only"
};
console.log(staff.offday);
