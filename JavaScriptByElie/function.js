"use strict";

function printHello() {
  console.log("Helllo");
}
printHello();

function printLog(msg) {
  console.log(msg);
}

printLog("Hello");
printLog(12345);

function changeName(obj) {
  obj.name = "misra";
}
const epick = { name: "tablo" };
changeName(epick);
console.log(epick);

function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi");

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
printAll("tablo", "misra", "tucut");

let globalMessage = "global";
function printMessage() {
  let message = "hello";
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
}
printMessage();

function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic..
}

console.log("--------Function Expression-----------");
const print = function () {
  console.log("print");
};
print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));

function randomQuiz(answer, printYes, printNo) {
  if (answer === "love u") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log("yes!!");
};

const printNo = function print() {
  console.log("NO!!!");
};

randomQuiz("Wrong", printYes, printNo);
randomQuiz("love u", printYes, printNo);

console.log("----------------------------------");

const simplePrint = function () {
  console.log("simplePrint!!");
};

// const simplePrint = () => console.log("simplePrint!!");
console.log(simplePrint);

const add = function (a, b) {
  return a + b;
};
