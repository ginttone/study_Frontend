"use strict";

let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`); //
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`); //
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`); //
const epickHigh = { name: "tablo", age: 20 };
epickHigh.age = 21;
console.log(epickHigh); //name: tablo, age: 21
function epickHigh() {
  let name = "tablo";
  let age = 20;
  console.log(name, age);
}
