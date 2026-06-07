setTimeout(function() {console.log("Connect to Database")}, 1000);

setTimeout( ()=>{console.log("Connect to Database2")},1000)

setTimeout( ()=>{console.log("Fetch the records")},2000)
setTimeout(function() {console.log("Connect to Database")}, 1000)

function dbOperation() {
setTimeout( ()=>{console.log("Connect to Database")},1000)

setTimeout( ()=>{console.log("Fetch the records")},10000)

setTimeout( ()=>{console.log("Filter the DB records")}, 2000)

setTimeout( ()=>{console.log("Update the DB records")}, 1000)

setTimeout( ()=>{console.log("Save the DB records")}, 1000)

setTimeout( ()=>{console.log("Close the DB connection")}, 1000)

}

dbOperation()


  
setTimeout(()=>{
  console.log("Connect to database"), 1000
})



setTimeout(()=>{
  
  console.log("Connect to database"), 1000
  
     setTimeout(()=>{
       
       console.log("Fetch the records"),10000
     })
})


setTimeout(()=>{
  
  console.log("Connect to database")
  setTimeout(()=>{console.log("Fetch the DB records")
    
  },10000)
}, 1000
  
   )


  setTimeout(()=>{
  console.log("Connect to database")
  setTimeout(()=>{
    console.log("Fetch the DB records")
    setTimeout(()=>{
      console.log("Filter the DB records")
      setTimeout(()=>{
        console.log("Update the DB records")
        setTimeout(()=>{
          console.log("Save the DB records")
          setTimeout(()=>{
            console.log("Close the DB records")
          },1000)
        },1000)
      },1000)
      
    },2000)
  },3000)
}, 1000
  
 )

