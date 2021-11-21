"use strict";

let num = 20;

function showFirstMessge(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessge('Hello World');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 3));
console.log(calc(6, 3));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();