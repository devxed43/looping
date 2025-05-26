const basket = ["apples", "oranges", "grapes"];

//1
for (let i = 0; i < basket.length; i++) {
  //   console.log(basket[i]);
}

//2
basket.forEach((item) => {
  //   console.log(item);
});

// 3 - loops over array
for (item of basket) {
  //   console.log("of loop:", item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:

const array = [3, 99, 2, 99, 100]; // should return 100
const array2 = ["3", 3, 4, 2]; // should return 4
const array3 = []; // should return 0

// set max to 0
// loop until end of array
// checks 3,
// is 0 smaller than 3?
// yes -> max (old 0) is now set to 3
// is 3 smaller than 99?
// yes -> max becomes 99
// is 99 smaller than 2? no, checks next val
// is 99 smaller than 99? no, checks next val
// is 99 smaller than 100? yes, max becomes 100
// return max when loop terms

// for loop
function biggestNumberInArray(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

// forEach() loop
function biggestNumberInArray2(arr) {
  let highest = 0;
  arr.forEach((item) => {
    if (highest < item) {
      highest = item;
    }
  });
  return highest;
}

// for of loop
function biggestNumberInArray3(arr) {
  let highest = 0;
  for (item of arr) {
    if (highest < item) {
      highest = item;
    }
  }
  return highest; // 0 is for highest
}

amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100,
};

function checkBasket(basket, target) {
  for (let item in basket) {
    if (item === target) {
      return "Match Found!";
    }
  }
  return `${target} not found`;
}

console.log("for loop:", biggestNumberInArray(array));
console.log("for each loop:", biggestNumberInArray2(array2));
console.log("for of loop:", biggestNumberInArray3(array3));

console.log(checkBasket(amazonBasket, "books"));
