#!/usr/bin/env node

function greet(name:string,...rest: (string | number)[]){
     console.log("hello" , rest)
}
greet("neha mehboob", 26,"thursday","wasted");

function greet2(name:string, age:number,...rest: string[]){
    console.log("hello" ,name , rest)
}
greet2("neha mehboob", 26,"thursday","wasted");

function greet3(name:string,...rest: string[]){
console.log("thursday is wasted successfully", rest)
}
greet3("boring","time taken" ,"morning class","wasted", "9 to 12")

function movie(name:string,releaseDate:number=2024){
console.log(`this movie name is ${name} and release date is ${releaseDate}`)
}
movie("winne the Pooh")
movie("tom & jerry ",2023)

const sayHello =(userName:string) =>
    console.log(`hello, ${userName}`);
sayHello("neha mehboob")

const calculator = (num1:number,num2:number) => {
    let result = num1- num2;
    return result
}
let subtraction = calculator (2,1)
console.log(subtraction)

const calculator2 = (num1:number,num2:number) => {
    let result = num1+ num2;
    return result
}
let addition = calculator2 (2,1)
console.log(addition);

let missneha = {
    studentName:"ayesha",
    age:6,
    class:1,
    role:"student"
}
console.log(missneha);
let staff = {
    members :5,
    age: 12,
    job: "technician",
    timing: "5 hours",
    offday: "sunday only"
}
console.log(staff.offday);

