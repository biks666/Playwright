
function function1() {
    console.log("This is a function");
}
function1();

function add(a,b) {
   
    console.log(a + b);
    return a + b;
}
add(3, 7);

function multiply(a,b,c) {
   console.log(a*b*c);
   return a*b*c;
}

multiply(2,2,2);

for (let j = 0; j < 3; j++) {
    console.log(j);
}
console.log(j);

console.log(5 | 3);



let str1 = "Bikram"
for( let char of str1) {
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    
      console.log(char);
}
}



let x =10;
x *= 2;
console.log(x); 

let x = 5;

console.log(++x);

let arr = [1, 2, 3];

console.log(arr instanceof Array);

let str1 = {"Bikram": "love"};

console.log(str1 instanceof String);


let str1 = "Bikram"
let vowels = 0;
let consonants = 0;
for( let char of str1) {
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
       vowels++;
       console.log(char);
    } else 
    {
        consonants++
     }
      
}
console.log("Vowels are: " + vowels)
console.log("Consonants are: " + consonants)




let str1 = "Bikram"
let vowels = 0;
let consonants = 0;
for( let char of str1) {
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
       vowels++;
       console.log(char);
    } else if (char != "a" && char != "e" && char != "i" && char != "o" && char != "u") {
        consonants++;
        console.log(char);
    }
}
console.log("Vowels are: " + vowels)
console.log("Consonants are: " + consonants)


let str1 = "RamLaxman"
let vowels = 'aeiouAEIOU'
let vowelsCount = 0;
let consonantsCount = 0;

for ( let char of str1 ) {
      if ( vowels.includes(char) ) {
        console.log (char)
         vowelsCount++
     } else
{
      consonantsCount++
      //console.log (char)
}
}
console.log("Consonants counts : " + " " + consonantsCount);
console.log("Vowels counts : " + " " + vowelsCount);

function name1() {
    console.log("This is a function");
}
name1();

function add (a,b) {
 console.log(a+b);
 }
 
add(2,3);


function add (a,b) {
let sum = a+b;
//console.log(sum);
return sum;
}
//add(2,3)

console.log(10 + add(2,3));

let greet = function() {
    console.log("Hello World");
};

greet();

 

let multiplication = function (a, b) { console.log(a * b); }
multiplication(4, 5);
 
let greet = function() { console.log("Hi, this is my first function expression program, without parameters")}
greet();


let name = function (str) { console.log(str) };
name("Bikram Saha");

let substraction = (a,b)=> {
console.log(a-b);}
substraction(8,2);

let substraction = (a,b)=> {
console.log(a-b); return (a-b)}
substraction(4,2);

let str2 = (str1)=> { console.log("welcome to JavaScripting :" + str1)}
str2("Bikram");

let str2 = str1 => console.log("welcome to JavaScripting :" + str1)
str2("Bikram");

let sum = (x,y) => console.log("The Multiplication of X and Y is: " + (x*y));
sum (2,6)

console.log("Ramaya Ramayana");
setTimeout(function(){console.log("This will execute after 3 seconds")}, 3000);
console.log("Bikram Saha ");

(function() {console.log("Hi Bikram")})()

function greet (str, callback) {
  console.log (" Bikram: " + str)
  callback()
  }
  
  function bye(){
  console.log("How are you")
  }
  greet("Welcome", bye);