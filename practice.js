let sum = 0;
for (i=1; i<=5; i++) {
  sum = sum+i;

}
console.log(sum)


let student = {
   name: "Bikram",
   age: 23,
   class: "Science",
   RollNo: 10
   }
 
 let propertiesCount = 0;
 
 for ( let properties in student) {
 
   console.log( properties + " : " + student[properties]);
    propertiesCount++;
   }
 console.log("Number of properties: " + propertiesCount);