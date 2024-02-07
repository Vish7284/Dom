const PromiseOne = new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log("asunc one");
    resolve();
   },2000)
})

PromiseOne.then(function(){
    console.log("promiseOne resolved");
})

new Promise((resolve , reject) =>{
    setTimeout(() =>{
        console.log("async two");
        resolve();
    },3000)
}).then(()=>{
    console.log("async two resolved");
})

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(()=>{
    resolve({username:"chai", email:"chai@exp.com"})
    },1000)
})

promiseThree.then((user) =>{
    console.log(user);
})

const promiseFour = new Promise((resolve ,reject) =>{
    setTimeout(() =>{
        let error = true;
        if(!error){
            resolve({username:"Vishal" ,pass :"ravish@fgj"})
        }
        else{
            reject("ERROR:Something went wrong")
        }
    },1500)
})   

promiseFour.then((user) =>{
    console.log(user);
    return user.username
}).then((username) =>{
  console.log(username);
}).catch((err) =>{
    console.log(err)
}).finally(()=> console.log("The promise is either resolved or rejected"))

const promiseFIfth = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"javascript" , passs:"jsdfg123"})
        }
        else{
            reject("Error:JS went wrong");
        }
    },1000)
})
async function consumepromisefive(){
  try{
    const response =   await promiseFIfth;
  console.log(response);
  }
  catch(error){
console.log(error);
  }
}
consumepromisefive()



  
  
  


