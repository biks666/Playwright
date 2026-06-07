let arr1 = [1,2,3,4]
arr1.push(5,6,7,100);
console.log(arr1);

arr1.push("e",4);
console.log(arr1);

let arr2 = ["rama", "shyam", "bikram"]
arr2.pop();
console.log(arr2);

let arr2 = ["rama", "shyam", "bikram"]
console.log(arr2.pop());
console.log(arr2);


let arr2 = ["rama", "shyam", "bikram"]

console.log(arr2.shift());
console.log(arr2);



let arr1 =[1,2,34,5,6]
console.log(arr1.unshift(0,-1,-2))
console.log(arr1);
console.log(arr1.length);

let arr1 =[1,2,4,5,6]
console.log(arr1.splice(0,2))
console.log(arr1);


let arr1 =[1,2,4,5,6]
console.log(arr1.splice(1,2,100))
console.log(arr1);
arr1.splice(3,1,900)
console.log(arr1)

let arr1 =[1,2,4,5,6]
arr1.splice(3,0,100)
console.log(arr1)


let fruits = ["Banana", "Apple", "Orange"];
fruits.sort();
console.log(fruits);

let arr5 = [3,6,9,2,1,4,0]
arr5.sort((a,b)=>a-b) 
console.log(arr5)


let arr5 = [3,6,9,2,1,4,0]
arr5.sort((a,b)=>(b-a)) 
console.log(arr5)


let arr5 = [1,2,3,4,5]
arr5.reverse();
console.log(arr5)

let arr5 = ["Bikram", "Ram"]
arr5.reverse();
console.log(arr5)


console.log("Ravi".split(``).reverse().join('')==="Ravi")

console.log("madam".split(``).reverse().join('')==="madam")

console.log("Ravi".split(``).reverse().join(""))

let arr5 = [1,2,3,4,5]


let arr5 = [1,2,3,4,5]
for (num of arr5){
  console.log(num);
  }


  
let array = ["ram", "shyam", "bikram", "sita"]
for (char of array){
  console.log(char)
  }


   let arr5 = [1,2,3,4,5]
 arr5.forEach((n) => {console.log(n*2)})

 let substraction = (a,b)=> {console.log(a-b);}
substraction(8,2);


let colors = ["Red", "Blue", "Green"];

colors.forEach(color => {
    console.log(color);
});

let nums = [5, 10, 15];

nums.forEach(function(value, index, array) {
    console.log("Value:", value);
    console.log("Index:", index);
    console.log("Original Array:", array);
});


let arr5 = [1,2,3,4,5]
let changedarray = arr5.map(n=>n*2)
console.log(changedarray);

let arr5 = [1,2,3,4,5]
let changedarray = arr5.map((n) => { return n * 2; });
  console.log(changedarray);

    
 let arr5 = [1,2,3,4,5]
 let oddnums = arr5.filter(n=>n%2===1)
 console.log(oddnums)

  let arr5 = [1,2,3,4,5]
  
  let evenNum = arr5.filter(n=>n%2===0)
  console.log("Even Numbers are: " +evenNum)

let numArray = [1,2,3,4,5]
  
 let double = numArray.map(n=>n*2)
 //console.log('List of Array double: ${double}')
 console.log(double)

  
 let numArray = [1,2,3,4,5]
 let sum = numArray.reduce((sum,n)=>sum+n,0)
 console.log(sum)

  let charArray = ["R","a","v","i"]
  let arrayJoin = charArray.reduce((arrayJoin,char)=>arrayJoin+char,"")
  console.log(arrayJoin)

    let numArray = [1,10,3,4,5,8]
  console.log(numArray.find(n=>n%2==0))
   console.log(numArray.findIndex(n=>n%2===0))
   console.log(numArray.findLast(n=>n%2==0))

   let numArray = [1,2,3,4,5,8]
  console.log(numArray.includes(3,3))

    let numArray = [1,2,3,4,5,8]
  console.log(numArray.every(n=>n>0))

   let numArray = [1,2,3,4,5,8,0]
  console.log(numArray.some(n=>n>0))

   console.log(Array.isArray([1,2,3,4]))

   console.log(Array.isArray("Bikram")) 

   let array1 = [1,2,3,4]
   let array2 = [5,6]
   let results = array1.concat(array2)
  console.log(results)

    
  let array1 = [1,2,3,4,5]
  let result = array1.join("@")
  console.log(result)

  let strarray = ["Apple", "Banana", "Tomato", "Mango"]
  console.log(strarray.join(","))

  let strarray = ["Apple", "Banana", "Tomato", "Mango"]
  console.log(strarray.join())

  let array1 = [1,2,3,4,5]
  console.log(array1.toString())

let num = [100,200,300];
let result = num.toString();
console.log(result);
console.log(typeof result);
  
 
  let arrayOfNum = (1,2,3)
  console.log(Array.of(arrayOfNum))

   let arrayOfNum = Array.of(1,2,3)
  console.log(arrayOfNum)