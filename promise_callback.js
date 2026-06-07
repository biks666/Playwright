function connectToDB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Database connection successful");
      resolve();
    }, 1000);
  });
}

function fetchDBRecords() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetch the DB records");
      resolve();
    }, 3000);
  });
}

function filterDBRecords() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Filter DB records");
      resolve();
    }, 1000);
  });
}

function updateDBRecords() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Update Database records");
      resolve();
    }, 2000);
  });
}

function saveDBRecords() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Save the DB records");
      resolve();
    }, 1000);
  });
}

function closeDBConnection() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Close the DB connection");
      resolve();
    }, 1000);
  });
}

connectToDB()
   .then(fetchDBRecords)
   .then(filterDBRecords)
   .then(updateDBRecords)
   .then(saveDBRecords)
   .then(closeDBConnection)
   .catch((error)=> {
      console.log(error)
	  });


const promise = Promise.resolve("this is passes")
console.log(promise)


let prom1 = new Promise( (resolve,reject)=> {
          resolve("The program executed successfully")
		  })
	prom1.then((result)=> {
            console.log(result)
          })
  .catch((reject)=> {
	          console.log("The Programterminated unsuccessfuly")
			  })


        			  
let promise = Promise.resolve(" This is pass")
   
   promise.then((result)=>{console.log(result)})




 let promise = Promise.reject("This is an error")
 
 promise.then((result)=>{console.log(result)})
  .catch((error)=>{console.log(error)})


  let promise1 = Promise.resolve("connect to DB")
  let promise2 = Promise.resolve("Fetch the DB records")
  let promise3 = Promise.resolve("Update the records")
  
  Promise.all([promise1,promise2,promise3])
  .then( (result)=> {console.log(result)})
  .catch( (error)=> {console.log(error)})

  let promise4 = Promise.resolve("connect to DB")
  let promise5 = Promise.reject("DB connection Error")
  let promise6 = Promise.resolve("Update the records")
  
  Promise.all([promise4,promise5,promise6])
  .then( (result)=> {console.log(result)})
  .catch( (error)=> {console.log(error)})

  let promise7 = Promise.resolve("connect to DB")
  let promise8 = Promise.reject("DB connection Error")
  let promise9 = Promise.resolve("Update the records")
  
  Promise.allSettled([promise7,promise8,promise9])
  .then( (result)=> {console.log(result)})
  .catch( (error)=> {console.log(error)})

    let promise10 = new Promise ( (resolve,reject)=> {
      setTimeout( (resolve)=>{console.log("This takes 2 seconds to execute")}
	  ,2000)})
	  
  
  let promise11 = new Promise ( (resolve,reject)=> {
      setTimeout( (resolve)=>{console.log("This takes 1 seconds to execute")}
	  ,1000)})
	  
  Promise.race([promise10, promise11])
   .then( (result)=> {console.log(result)})

   ////////////////////////////////////////////

     
  let promise10 = new Promise ( (resolve,reject)=> {
      setTimeout( ()=>{resolve("This takes 2 seconds to execute")}
	  ,2000)})
	  
  
  let promise11 = new Promise ( (resolve,reject)=> {
      setTimeout( ()=>{resolve("This takes 1 seconds to execute")}
	  ,1000)})
	  
  Promise.race([promise10, promise11])
   .then( (resolve)=> {console.log(resolve)})


      let promise10 = new Promise ( (resolve,reject)=> {
      setTimeout( ()=>{reject("This is error")}
	  ,1000)})
	  
  
  let promise11 = new Promise ( (resolve,reject)=> {
      setTimeout( ()=>{resolve("This takes 2 seconds to execute")}
	  ,2000)})
	  
  Promise.race([promise10, promise11])
   .then( (resolve)=> {console.log(resolve)})
   .catch( (error)=> {console.log(error)})

////////////////////////////////////////////////////

let promise12 = new Promise ( (resolve,reject)=> {
      setTimeout( ()=>{reject("This is error")}
	  ,1000)})
	  
  
  let promise13 = new Promise ( (resolve,reject)=> {
      setTimeout( ()=>{resolve("This takes 1 seconds to execute")}
	  ,1000)})
	  
  let promise14 = new Promise ( (resolve,reject)=> {
      setTimeout( ()=>{resolve("This takes 1 seconds to execute")}
	  ,2000)})
	  
  Promise.any([promise12, promise13,promise14])
   .then( (resolve)=> {console.log(resolve)})
   .catch( (error)=> {console.log(error)})