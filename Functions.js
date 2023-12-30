
// function write(){
// console.log("K");
// console.log("R");
// console.log("I");
// console.log("S");
// }

// write //function reference

// write() //function execute



// function add(a,b){
//     console.log(a+b);
// }
// add(10,4) //14

// add(10,"4") //104

// add(10,'a') //10a
// add(10,null) //10
// add(10,undefined) //NaN

// function add(a,b){
//     return a+b;
// }

// const result = add(10,5)
// console.log(result);   //15


// function loginUserMessage(username){
//     if(!username){
//         return `Please provide username`
//     }
//     return `${username} logged in successfully`
// }

// console.log(loginUserMessage("krishh"));  //krishh logged in successfully
// console.log(loginUserMessage(""));  // logged in successfully
// console.log(loginUserMessage());  //undefined logged in successfully



// ... known as rest or spread  operator similar as var_arg method in java
// function calculateCartPrice(...item1){
//     return item1
// }

// console.log(calculateCartPrice(500,100,200));//[ 500, 100, 200 ]

// function calculateCartPrice(var1,var2,...item1){
//     return item1
// }

// console.log(calculateCartPrice(500,100,200));//[ 200 ]



// const user={
//     name:"Krishna",
//     age: 21
// }



// function userObject(getObject){
//     console.log(`Name : ${getObject.name} and age is - ${getObject.age}`);
// }

// userObject(user)

// userObject({
//     name:"Raju",
//     age:25
// })


function arrayDeyails(getArray){
    return getArray[2]
}

console.log(arrayDeyails([100,500,200]));
