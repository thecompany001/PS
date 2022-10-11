/**
 * Functions Continued
 * 

Things to remember
* DRY - Don't Repeat Yourself 
* Good input (Garbage in garbage out)
*/

// 2 Ways to write a function

// Function Declaration
//function declarations will be hoisted to the top.
/*
  function sayHello (name) {
    console.log("Hello " + name + "!")
  }
  
  sayHello("Toby")
  
  
  // Function Expression
  

  const sayHelloAgain = function (name) {
    if (typeof name != "string") {
        console.log("Input was not a string, Try again.")
        return
    }
    console.log("Hello " + name + "!")
  }
  
  sayHelloAgain(1)

  const add = (num1 = 10, num2 = 15, num3 = 4) => num1 + num2

  console.log(add(10,1))
*/
/*
const car = {
  color: "blue",
  hp: 4000,
  year: 1990,
};
console.log(car.year);

const house = {
  doors: 10,
  color: "grey"
}
console.log(house.color);
house.windows = 30
console.log(house)

const mogwai = {}
mogwai.name = "giz";
console.log(mogwai)

const obj = {
  salutation: "hi",
  count: 4
}
if (obj.salutation === 'hi'){
  console.log('ok');
}
for (let i = 0; i < obj.count; i++) {
  console.log(i);
}

const objs = {
  something: 'wuttt'
}
if (objs.something) {
  console.log('ok');
}
if (objs.anotherthing) {
  console.log('ok');
} else {
  console.log('no go I dont have it');
}
*/

/*
  function areBothEven(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 != "number" ) {
      console.log("is not a number")
      return
    } else {
    return !(n1 % 2) && !(n2 % 2);
    }
  }
  console.log(areBothEven(2, 'anton'));

  const arr =[1, 2, 3]

  if (0){
    console.log("I have elements")
  } else {
    console.log("Im empty")
  }
  */
/*
  const cohort = {
    id: 'Seir Flex',
    students: ['D', 'J', 'R'],
    instructors: ['Arthur', 'Nan'],
    addStudent: function(name) {
      name = name[0].toUpperCase() + name.substr(1).toLowerCase();
      this.students.push(name);
    },
    pickRandomStudent: function() {
      const rndIdx = Math.floor(Math.random() * this.students.length);
      return this.students[rndIdx];
    }
  };
  console.log(cohort.instructors[1]);
  */

  class Vehicle {
    constructor(vin, make, model) {
      this.vin = vin;
      this.make = make;
      this.model = model;
      this.running = false
    }
    start() {
      this.running = true;console.log('running...');
    }
  }
  const plane = new Vehicle('xdr3', 'Boeing')
  console.log(plane);
  const car = new Vehicle('Adb', 'Toyota')
  console.log(car)

  const nums = [1, 2, 3]
  nums.forEach((nums)=>{
    console.log(nums)
  })
  console.log(Math.random);

  toString() {
    return 'Vehicle (' + this.vin + ') is a ' +
    this.make + ' model ' + this.model;
  }