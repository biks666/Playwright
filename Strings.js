let name  = "Bikram";
let address = "India"
console.log(`name: ${name} address:${address}`);

let age = 30;
let emailId = 'biks2@gmail.com';

console.log(`age: ${age} EmailId: ${emailId}`);

let word = "Hello World";
word[0] = "K";
console.log(word);

word = "K" + "ello";
console.log(word);
console.log(`changed string is : ${word}`);

let str1 = "Rama";

let str2 = "rama";
console.log(str1 === str2);

    let str3 = new String ("Rama");
    console.log(str3);
console.log(str2);

console.log(str1===str3);
console.log(str1==str3);

let str4 = "I m a Good Boy";
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

let str4="         Rama           ";
console.log(str4);
console.log(str4.trim());
console.log(str4.trimLeft());
console.log(str4.trimRight());
console.log(str4.trimStart());
console.log(str4.trimEnd());

console.log("I am a good boy".includes("Good"));

console.log("https://google.co.in".startsWith('https'));
console.log("https://google.co.in".endsWith('0'));

    str4="Playwright";
    console.log(str4.indexOf('mayw'));  

let s1="Hello World";
let s2="World";
console.log(s1.includes(s2));
console.log('world'.split('').reverse().join(''));

function reverseString(str) {
    console.log(str.split('').reverse().join(''));
}

reverseString('mukta');


let strName = "Bikram";
  let strAddress = "Kolkata"
  
  console.log (`Name: ${strName} Address: ${strAddress}`);
 console.log ("Name: " + strName + "Address : " + strAddress)

 
let strName = "Hello";
strName[0] = "k";
console.log(strName);


let strName = "Hello";
strName = "k" + "ello";
console.log(strName);


let strName = "Hello";
strName = "k" + "ello";
console.log(`Name : ${strName}`)

let strName = "Hello";
strName = "k" + "ello";
console.log(strName);

let str3 = new String ('Rama');
console.log(str3); 

let str = "Hello";
console.log(typeof str);

let text = `This is line 1
This is line 2
This is line 3`;

console.log(text);

let newString1 = "I am Bikram Saha";
console.log(newString1.length);

 let newString1 = "Ram is good"
 console.log("Rama is good".includes("is"));

  console.log("I am Bikram".indexOf("I"));

   console.log("Bikram is good boy".startsWith("Bikram"));

    let str5 = "bikram"
 console.log(str5.toUpperCase());

  console.log("HI BIKRAM, GOOD BOY".toLowerCase());
c
  console.log("HI BIKRAM, GOOD BOY".includes("BIKRAM"));

  console.log(("HI BIKRAM, GOOD BOY").startsWith("HI"));

  console.log(("     Hi Bikram Saha     ").trim());

  console.log(("     Hi Bikram Saha     ").trimRight());

  let str = "JavaScript";
  console.log(str.at(9)); 

  console.log(("Madam").indexOf("aa"));

const str = "Playwright";
//console.log(str.charAt(3)); // "y"
console.log(str.charAt(15)); // ""

let file = "Import.txt"
console.log(file.endsWith("t"));

let file = 1234;
console.log(file.endsWith(123));

console.log("I am Ravi".includes("R", 6));

console.log("I am Sam".includes("S", 4)); 


console.log("Testing Playwright".slice(1,4));


let str1 = "abcdef";
console.log(str1.slice(-4));

let str1 = "abcdef";
console.log(str1.slice(-1,-4));


let str1 = "abcdef";
console.log(str1.substring(0,4));

let str2 = "I am Ravi Ravi"
console.log(str2.replace("Ravi", "Ram"))

let str2 = "I am Ravi Ravi"
console.log(str2.replaceAll("Ravi", "Ram"));

let str4 = "This is playwrigth"
console.log(str4.split("z"));


let str4 = "This is playwrigth"
console.log(str4.length);

console.log("*".repeat(20));
console.log("Bikram");
console.log("*".repeat(20));

let actualString = " MXPLaYER ";
let expectedString = "Mxplayer";

if (actualString.trim().toUpperCase()===expectedString.toUpperCase()) {
console.log("The web page loaded sucessfully");
}
else {
console.log("The web page does not exist")
}


console.log("Ravi".concat(" ", "Ram", " ", "Bikram"));

let str2 = "Raja Ravi Ramesh"
console.log(str2.split("a").length-1);

let str = ["R","a","v","i"];
console.log(str.join(" "));