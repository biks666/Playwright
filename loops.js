
for (i=5; i>=0; i--) {
    console.log(i);
}

//print even numbers from 1 to 10
for (i=1; i<=10; i++) {
    if (i%2==0) {
        console.log(i);
    }
}

//print odd numbers from 1 to 100
for (i=1; i<=100; i++) {
    if (i%2!=0) {
        console.log(i);
    }
}

//print prime numbers from 1 to 100
for (i=2; i<=100; i++) {
    let isPrime = true;
    for (j=2; j<i; j++) {
        if (i%j==0) {
            isPrime = false;
            break;
        }
    }    if (isPrime) {
        console.log(i);
    }           
}

let i = 0;
  while( i <=5 ) {
      console.log (i)
    i++;
}

let j = 6;
do {
console.log(j);
 j++;
} while (j==10);

let arr1 = ['I', 'am', 'bikram', 't'];
  for (let num of arr1) {
    console.log(num);
  }

let str1 = "Bikram Saha";
for (let char of str1) {
    console.log(char);
}

let obj1 = {
name: "Bikram",
address: "Kolkata",
mobile: "9748870591"
}
for (let a1 in obj1) {
console.log(a1 + ": " + obj1[a1]);
//console.log(obj1[a1]);
}


for (i = 1; i <= 10; i++) {
    
    if (i == 6) {
        continue;
    }
    console.log(i);
}

let sum = 0;
for ( i = 1; i<=10; i++){

sum = sum +i;

}
console.log(sum);

function multiply(x) {
    return function(y) {
        return x * y;
    };
}

let double = multiply(2);

console.log(double(5));

let arr3 = ["Ram", "Shyam", "Muktar", "Bikram"];
for (let name of arr3) {
   console.log(name); 
}

let objName1 = {
name: "Bikram",
age: 30,        
city: "Kolkata",
mobileNum: 9748870591
}

for (let obj1 in objName1) {
    console.log(obj1 + " " + objName1[obj1])
}

let num1 = 16;
do {
    console.log(num1);
num1++;
}while (num1 <= 10);

let num2 = 1;
while(num2<=6) {
    console.log(num2);
    num2++; 
}

let str5 = "Bikram Saha";
for (let char of str5) {
    console.log(char);
}

let obj2 = { "Ram": 30, "Shyam": 25, "Muktar": 35, "Bikram": 30 };
for (let obj in obj2) {
    console.log(obj + ": " + obj2[obj]);
}

for (i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}

let sum = 0;
for ( i = 1; i<=10; i++){
sum = sum +i;
}
console.log(sum);

let k=1;
while (k<=4) {
    k++;
    console.log(k);
}

let sum = 0;
for (i=0; i<=3;i++) {
     sum = sum+i;
    
}
console.log(sum);

for (i=10; i>=1; i--) {
    console.log(i);
  }

  