
function dbOperationSync() {
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
}

dbOperationSync()



