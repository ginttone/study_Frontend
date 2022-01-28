// !. string concatenation

console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals : 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
/*
counter = counter +1 ;
preIncrement = counter;
*/
const preIncrement = ++counter;
console.log(preIncrement, counter);
/*
preIncrement = counter;
counter = counter +1 ;
*/
const postIncrement = counter++;
console.log(postIncrement, counter);

const preDecrement = --counter;
console.log(preDecrement, counter);
const postDecrement = counter--;
console.log(preDecrement, counter);

// 4. Assigment operators
let x = 3;
let y = 6;
x += y; //x = x+y;
x -= y;
x *= y;
x /= y;
console.log((x /= y));

//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

//logical operators
const value1 = false;
const value2 = 4 < 2;

console.log(`or :: ${value1 || value2 || check()}`);

console.log(`and :: ${value1 && value2 && check()}`);
function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log(`OMG`);
  }
  return true;
}

const stringFive = "5";
const numberFive = 5;
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

const epick1 = { name: "tablo" };
const epick2 = { name: "tablo" };
const epick3 = epick1;
console.log(epick1 == epick2);
console.log(epick1 === epick2);
console.log(epick1 === epick3);
console.log(0 == false); //
console.log(0 === false); //
console.log("" == false); //
console.log("" === false); //
console.log(null == undefined); //
console.log(null === undefined); //

const name = "tablo";
if (name === "tablo") {
  console.log("Welcome Tablo!");
} else if (name === "rapper") {
  console.log("You're amazing Artist");
} else {
  console.log("unknown");
}

console.log(name === "tablo" ? "yes" : "no"); // no

console.log(`-----------------------`);

const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away");
    break;
  case "Chrome":
  case "firefox":
    console.log("love you");
    break;
  default:
    console.log("same all");
    break;
}

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

do {
  console.log(`do while : ${i}`);
  i--;
} while (i > 0);

for (i = 3; i > 0; i--) {
  console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}
