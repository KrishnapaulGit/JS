// Creation  of Promise

const promiseOne = new Promise(function(resolve,reject){
// Do an aync task
// DB calls, cryptography, network
    setTimeout(function(){
    console.log("Async Task 1")
    resolve();

},1000)
})

promiseOne.then(function(){
    console.log("Async Task 1 resolved");
})


// Another way

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2 ");
        resolve();
    },1000)
}).then(function(){
    console.log("Async Task 2 resolved");
})


// passing Data

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"krishna",email:"krishhhnail"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    console.log(user.username);
    console.log(user.email);
})


// used reject


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"krishna",pass:1458})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
    
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then((username)=>{
console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("Promise Resolved or Rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"krishna",pass:1245777})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
    
})



async function consumePromiseFive(){
    try{
  const response =   await promiseFive
  console.log(response);
    }
    catch(error){
        console.log(error);
    }
}


consumePromiseFive();







// fetch

async function userDetail(){
    try{
    const response = await fetch('https://api.github.com/users/krishnapaulgit')
    console.log(response);
    const data= await response.json();

    console.log(data);
    }catch(error){
        console.log("Error : ",error);
    }
}

// userDetail();





// direct

fetch('https://api.github.com/users/krishnapaulgit')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})

.catch((error)=> console.log("Error"))



