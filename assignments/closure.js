// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function Closure() {
  const intro = 'Hello!';
 console.log(`${intro}, nice to meet you!`);

 function deeper() {
  const middlePart = 'This cannot be pulled from closure';
   console.log(` ${intro} ${middlePart} Now you're getting into it!`);

   function deeperStill() {
     console.log(` ${intro}This level can see everything. ${middlePart} or deeper.`);
   }
   deeperStill();
 }

 deeper();
}

Closure();


// `deeper();` will not run because it is not able to be reached at a global level. That is because of closure keeping its information from spilling over to the global level
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
var theCount = 0;

const counter = () => {
  function add() {
   return theCount += 1;
  }
  // Return a function that when invoked increments and returns a counter variable.
  return add();
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

console.log(counter());
console.log(counter());
counter();
counter();
console.log(counter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
var theNewCount = 0;

const counterFactory = (variable) => {
  const calculator = {
    increment() {
      return theNewCount += 1;
    },
    decrement() {
      return theNewCount -= 1;
    }
  }
  let upOrDown = `calculator.${variable}()`;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
 return upOrDown();
};

console.log(counterFactory(increment));
