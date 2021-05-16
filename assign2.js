// sqare_rt function
 const square_rt = (a) => {
     return a**(1/2)
     }
     console.log(square_rt(8));
 
//multiply function
const multiply = (b,c) => {
     return b*c
}
console.log(multiply(4,3))

// division function
 const div = (f,g) => { 
     return f/g
}
console.log(div(4,2))
 
let x = prompt("Input any number from 1 to 100");
let x1 =x%2;
let x2 = (x1==0)? "This an even number" : "This is an odd number";
document.write(x2);

let txt= prompt("What is your name");
let txt1 = txt.toUpperCase();
console.log(txt1);
