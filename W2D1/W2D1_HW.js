/* 1 
Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them.
If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
*/
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}
// return x>= y? x : y;

console.log("1.0 - " + maxOfTwoNumbers(3, 9));

/* 2
Define a function, as a function expression, maxOfThreethat takes three numbers 
as arguments and returns the largest of them. Again, the Math.max method is not allowed.
*/
function maxOfThreeNumbers(x, y, z) {
  if (x >= y && x >= z) {
    return x;
  } else if (y >= x && y >= z) {
    return y;
  } else {
    return z;
  }
}
console.log("\n2.0 - " + maxOfThreeNumbers(20, 11, 9));

/* 3
Define a function, as a function declaration, isCharAVowelthat takes 
a character as an argument and returns true if it is a vowel, false otherwise.
*/

function isCharAVowel(char) {
  let isVowel = true;
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return true;
  } else {
    return false;
  }
}
console.log("\n3.0 - " + isCharAVowel("x"));

let vowels = "aeiou";
function isChAVowel(charr) {
  for (let i = 0; i < charr.length; i++) {
    if (charr.toLowerCase() === vowels[i]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log("\n3.1 - " + isChAVowel("a"));

/* 4
Define a function, as a function expression, 
sumArraythat takes an array of numbers 
and returns the sum of those numbers. 
For example, sumArray([2, 4, 5]);would return 11.

function sumArray(numArray) {
    sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum
}
console.log("\n4.0 - " + sumArray([2, 4, 5]));
*/

const sumArray = (numArray) => {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
};
console.log("\n4.0 - " + sumArray([2, 4, 5]));

/* 5
Define a function, as a function declaration, multiplyArraythat takes an array 
of numbers and returns the product of those numbers. 
For example, multiplyArray([2, 4, 5]);would return 40.
*/

function multipleArraythat(num) {
  let mult = 1;
  for (let i = 0; i < num.length; i++) {
    mult *= num[i];
  }
  return mult;
}
console.log("\n5.0 - " + multipleArraythat([2, 4, 5]));

/* 6
Define a function, as a function expression, numArgs
that returns the number of arguments passed to the function when called.
*/

const numArgs = (...Args) => {
  return Args.length;
};
console.log("\n6.0 - " + numArgs(1, 2, 3, 4, 5, 6));

/* 7
Define a function, as a function declaration, reverseStringthat takes a string, 
reverses the characters, and returns it. 
For example, reverseString('rockstar');would return the string "ratskcor".
*/

function reverseStringthat(revstring) {
  let rev = "";
  for (let i = revstring.length - 1; i >= 0; i--) {
    rev += revstring[i];
  }
  return rev;
}
console.log("\n7.0 - " + reverseStringthat("rockstar"));

/* 8
Define a function, as a function expression, longestStringInArray that takes 
an array of strings as an argument and returns the length of the longest string.
*/

const longestStringInArray = (...longest) => {
  let long = 0;
  for (let i = 0; i < longest.length; i++) {
    if (longest[i].length > long) {
      long = longest[i].length;
    }
  }
  return long;
};
console.log(
  "\n8.0 - " +
    longestStringInArray([
      "A",
      "AB",
      "ABC",
      "ABCD",
      "ABCDE",
      "ABCDEF",
      "ABCDEFG",
    ])
);

/* 9
Define a function, as a function declaration, stringsLongerThan 
that takes an array of strings and a number as arguments, and returns an array
 of the strings that are longer than the number passed in. For example, 
 stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
*/

function stringsLongerThan(myArray, num) {
  let holder = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].length > num) {
      holder.push(myArray[i]);
    }
  }
  return holder;
}

console.log(
  "\n9.0 - " + stringsLongerThan(["say", "hello", "in", "the", "morning"], 3)
);
