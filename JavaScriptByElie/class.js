"use strict";
// Object-oriendited programming
// class : template
// object : instance of a class
// JavaScript classes
//- introduced in ES6
//- syntactical sugar over prototype-based inheritance

// Class declarations
class Person {
  // Person을 declaration
  //constructor 생성자를 이용해 나중에 object를 만들때 필요한 데이터를 전달 한다
  constructor(name, age) {
    //fields 에 전달 된 data(name과 age)를 할당 해준다.
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}: Hello !!`);
  }
}
const tablo = new Person("tablo", 20);
console.log(tablo.name);
console.log(tablo.age);
tablo.speak();

// 2. Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
