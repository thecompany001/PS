/*
1. How do we assign a value to a variable? A. With the assignment operator
2. How do we change the value of a...
...
*/


console.log('-----Section One-----\n')
console.log('-----I. Variables & Datatypes-----')
console.log('A. Q + A')
console.log(' 1. Assign a value to a variable by using let/var/const and set the variable name, then setting it to a value using "=".\n',
            '2. Change the value of a variable by setting the variable to a new value.\n var num = 5;\n var num = 10;\n',
            '3. Assign an existing variable to a new variable by using the assignment operator.\n var myVar;\n myVar = 5;\n var myNum;\n myNum = myVar;\n',
            '4. Declaration is declaring the type of the variable, not the value. is XXX. Assignment is storing a value to a variable. Define is XXX\n',
            '5. Pseufocoding is the process of using spoken/written launguage to express codde. It is useful for outlining your code so you can more easily execute it.\n',
            '6. About XX% of time should be spent thinking about solving a problem, vs XX% actually coding to solve it.\n')
console.log('B. Strings')
console.log(' 1. var firstVariable\n', 
             '2. var firstVariable = "Hello World";\n',
             '3. var firstVariable = 1;\n',
             '4. secondVariable = firstVariable;\n',
             '5. secondVariable = "anyString";\n',
             '6. 1;\n',
             '7. let yourName = "Stefan";\n console.log(`Hello, my name is ${yourName}.`)')
console.log('C. Booleans')
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(+a < b);
console.log(2. +c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false);
console.log(e == 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');
/*
console.log('D. The Farm')
var animal = 'bull';
if animal != 'bull'
def animalSound(sound) {
    if (let animal = 'bull'){

    else {
    console.log("You are not a bull!")
    };
}
}
console.log(`A ${bull} goes moooo!`);
*/
console.log('E. Driver\'s Ed')
var age = 10
console.log(" 1. The age is " + age + ".");
    if (age = 16) {
        console.log(" 2. Here are the keys!")
    } else {
        console.log(" 2. Sorry, you're too young.");
    }
console.log('-----II. Loops-----')
console.log('A. The Basics')
for (let i = 10; i < 11; i++) {
    console.log(" 1. This could print to 400 if I add + i.");
}
for (let i = 3; i < 4; i++) {
    console.log(" 2. This could print to 400 if I add + i.");
}
for (let i = 3; i < 4; i++) {
    console.log(" 3. This could print to 4000 if I add + i.");
}
console.log('B. Get Even')
for (let e = 1; e < 100; e++) {
    if (e % 2 == 0) {
        console.log(e + " <-- is an even number");
    } else if (e % 3 == 0) {
        console.log(e + ` <-- I found a ${e}. Three is a crowd`);
    } else if (e % 5 == 0) {
        console.log(e + ` <-- I found a ${e}. High five!`);
    } else {
        console.log(e);
    }
};
console.log('D. Savings Account')
/*
var bank_account = function sum(num) {
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
}
console.log(bank_account);
*/
console.log('-----III. Arrays & Control flow-----')
console.log('A. Talk About It:')
console.log(' 1. The things in an array are called elements.\n', 
             '2. Arrays have a guaranteed order.\n',
             '3. You could model theater seats with an array.\n')
console.log('B. Easy Does It')
var quotes = ['This', ' That', ' The other'];
console.log(' 1. ' + quotes + '\n');
console.log('C. Accessing Elements')
const randomThings = [1, 10, "Hello", true];
console.log(randomThings);
console.log(' 1. randomThings[0]')
randomThings[2] = "World";
console.log(' 2. ' + randomThings);
console.log(' 3. ' + randomThings);
console.log('D. Change Values')
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(' 1. ourClass[2]') 
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(" 2. " + ourClass);
console.log(" 3. " + ourClass);
console.log('E. Mix It Up')
const myArray = [5, 10, 500, 20];
console.log("myArray = " + "["+myArray+"]");
myArray.push('Aegon', 'Doink');
console.log(" 1. myArray = " + myArray);
myArray.shift([0]);
console.log(" 2. myArray = " + myArray);
myArray.unshift("Bob Marley");
console.log(" 3. myArray = " + myArray);
myArray.pop();
console.log(" 4. myArray = " + myArray);
myArray.reverse();
console.log(" 5. myArray = " + myArray + "\n I did not mutate the array. Mutating means changing the original array. The .reverse() method returned the myArray in reverse.");
console.log('F. Biggie Smalls')
var samp = 190;
if (samp < 100) {
    console.log(" 1. little number")
} else {
    console.log(" 2. BIG number")
}
console.log('G. Monkey in the Middle')
var samp1 = 6;
if (samp1 < 5) {
    console.log(" 1. little number");
} else if (samp1 > 10) {
    console.log(" 2. big number");
} else {
    console.log(" 3. monkey");
}
console.log('H. What\s in Your Closet')
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
console.log(` 1. Kristyn is rocking that ${kristynsCloset[2]} today!`);
kristynsCloset.splice(6, 0, "raybans");
console.log(" 2. " + kristynsCloset);
//How can I show the elements after the one I splice in below?
kristynsCloset.splice(5, 5, "stained knit hat");
console.log(" 3. " + kristynsCloset);
//How can I access the index of the arrays in the list?
let shirts = thomsCloset[0];
let pants = thomsCloset[1];
let accessories = thomsCloset[2];

console.log(" 4. " + shirts[0]);
console.log(" 5. " + pants[1]);
console.log(" 6. " + accessories[2]);
console.log(` 7. Thom is looking fierce in a ${shirts[0]}, ${pants[1]}, and ${accessories[1]}!`);
thomsCloset[1].splice(2, 2, "Footie Pajamas")
console.log(" 8. " + pants);

console.log('-----IV. Functions-----')
function printGreeting(greet) {
    return "Hello there, " + greet;
}
console.log(" A. " + printGreeting("Slimer"));
function printCool(name) {
    return name + " is cool";
}
console.log(" B. " + printCool("Dr. Seuss"));
function calculateCube(num) {
    return num*num*num
}
console.log(" C. " + calculateCube(5));
let vowel = 'aeiou';
function isVowel(char) {
    for (let i = 0; i < char.length; i++) {
        if(char.toLowerCase() === vowel[i]) {
            return true
        } else {
            return false
        }
    }
}
console.log(" D. " + isVowel("a"));

function getTwoLengths(arr) {
    return arr.map(function(str) {
        return str.length;
    })

}
console.log(" E. " + getTwoLengths(["Hank", "Hippopopalous"]))
console.log(" F. " + getTwoLengths(["hello", "what", "is", "up", "dude"]))
function maxOfThree(num1, num2, num3) {
    var max = Math.max(num1, num2, num3);
    return max
}
console.log(" G. " + maxOfThree(1, 2, 3));

function printLongestWord(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
            word = arr[i]
        }
    }
    return word
}
console.log(" H. " + printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

console.log('-----V. Objects-----')
const user = [
    {name: "Nombre"},
    {email: "email@email.com"},
    {age: "20"},
    {purchased: []}
]
console.log("A. let user = name: 'Nombre', email: 'email@email.com', age: 20, purchased: []")

//I am not sure how to do B one
const userUpdate = user.map(obj => {
    if (obj.email === 'email@email.com') {
        return {...obj, email: 'newemail@email.com'}
    } 
    return obj;
});
console.log("B. ")
console.log(userUpdate)
const userUpdate1 = user.map(obj => {
    if (obj.age === '20') {
        return {...obj, age: '300'}
    }
    return obj;
})
console.log(userUpdate1)


