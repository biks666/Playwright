let promiseObj = new Promise( ()=>{
  console.log("This is executor") 
} );

console.log(promiseObj)


let promiseObj = new Promise( (resolve,reject)=>{
  let percentage = 90
    if (percentage>90) {
	  resolve("Promises are resolved successfully")
	  } else {
	  reject("Promises are rejected")
	  }
} );

//console.log(promiseObj)

promiseObj.then((result)=>{
  console.log(result)
})
.catch((error)=>{
 console.log(error)
})
.finally(()=>{
 console.log("Program completed")
})



let pro1 = new Promise((resolve,reject)=>{
resolve("pass")
})

pro1.then((x)=>{
console.log(x)
})
.then((y)=>{
  console.log(y)
 })
 

 let promise = new Promise((resolve, reject) => {

  let success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }

});

promise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

Promise.resolve("Success")
  .then((data) => {
    console.log(data);
  });

//////////////////////////////////////////

let proA = new Promise ((resolve, reject)=>{
            
       let result =94
       if (result>90) {
          resolve("The task is fulfilled")
        }
           else {
             reject("Task execution failed")
          }
        })

proA.then((resolve)=> {
   console.log(resolve)
   })
.catch((reject)=> {
    console.log(reject)
})

