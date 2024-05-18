// QUESTION 136:
let fruites: string[] = ["Apple", "Mango", "Orange", "Banana"];

for (let i = 0; i < fruites.length; i++) {
  console.log(`index no:${i}, and Fruite name is: ${fruites[i]}`);
}


// QUESTION 137:
try {
  for (let i = 0; i < 5; i++) console.log(a);
} catch (error) {
  console.log("error in loop!!");
}



// QUESTION 138:
console.log("Before breakpoint");

console.log(
    "This line has a breakpoint set on it in the browser's developer tools"
);
console.log("After breakpoint");