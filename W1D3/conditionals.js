let x = 18;
if (x === "18") {
  console.log("That is true");
} else {
  console.log("That is not true");
}

if (true) {
  if (false) {
    console.log("nested if is running");
  } else {
    console.log("second expression is false");
  }
} else {
  console.log("first expression is false");
}

// Exercise

const integer = 100;

if (integer > 100) {
  if (integer > 100) {
    console.log("integer is greater than 100");
  } else if (integer > 0 && integer < 100) {
    console.log("Less than 100 and positive");
  } else if {
    console.log("integer is 100");
  }
} else {
  console.log("integer is negative");
}


