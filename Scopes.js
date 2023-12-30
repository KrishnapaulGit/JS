

// if(true){
//     let a = 40;
//     const b = 50;
//     var c = 60
//     console.log("Inner : ",a);
//     console.log("Inner : ",b);
//     console.log("Inner : ",c);
// }

// // console.log("Outer : ",a);
// // console.log("Outer : ",b); 
// console.log("Outer : ",c);  // Outer : 60



// Nested Scope


// function one(){
//     const username = "Krishna" 

//     function two(){
//         const website ="youtube"

//         console.log(username);
//     }
//     // console.log(website);
//     two()

// }

// one()



/***************************** */

// addOne(10)  //can access
function addOne(num){
    return num+1
}
console.log(addOne(10)); //11

// addTwo(10)   //can't access
const Two=function addTwo(num){
    return num+2
}

// console.log(addTwo(20))  //error
console.log(Two(20))  //22

console.log(Two); //[Function: addTwo]