
// const userDetails={
//     username: "krishna",
//     price: 599,


//     welcomeMessage: function(){
//         console.log(`${this.username} Welcome to website`);
//         console.log(this);
//     }
// }

// userDetails.welcomeMessage()
// userDetails.username="rajesh"
// userDetails.welcomeMessage()

// console.log(this);  // {}  ---. because it's not in browser and global object not defined

//In browser `this` will return window global object




// function code(){
//     console.log(this);// global things

//     const username = "Krishna" 
//     console.log(this.username);  //undefined
// }
// code()


// const Code = function code(){
    // console.log(this);// global things

//     const username = "Krishna" 
//     console.log(this.username);  //undefined
// }

// code()



// Arrow Function overview
// const Code = ()=> {
//     console.log(this);//{}
//     const username = "Krishna" 
//     console.log(this.username);  //undefined
// }

// Code()


// Arrow Function

let arrow = ()=>console.log("Arrow Function")
// arrow()  //Arrow Function


// explicit return

// const add = (num1,num2) =>{
//     return num1+num2
// }

// console.log(add(10,15))  //25



// implicit return
// const add = (num1,num2) =>num1+num2
// const add = (num1,num2) =>(num1+num2) //same

// return an Object

// const name = () =>({name:"Krishna"})



// console.log(name());  // { name: 'Krishna' }




const userDetails = (userObj) => (`UserName: ${userObj.name}   UserId :  ${userObj.id} `)

const userObject={
    name:"krishna",
    id:"k@0124"
}

console.log(userDetails(userObject));  //UserName: krishna   UserId :  k@0124 




