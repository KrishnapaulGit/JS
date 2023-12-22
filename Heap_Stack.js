// // let name = "Krishna"
// // console.log(name);

// // let name2 = name

// // console.log(name2);

// // name2="Krishna Paul"

// // console.log(name2);
// // console.log(name);


// // //  All the Primitive data store in Stack , and we get only copy of the data
// // // Thats why it is called call by value


// let userDetails ={
//     name: "Krishna",
//     age : 21,
//     email: "krishhmail@gmail.com"
// }


// let userDetails1 = userDetails

// console.log(userDetails);
// console.log(userDetails1);

// userDetails1.email="krishnaofficial@gmail.com"
// console.log(userDetails.email);
// console.log(userDetails1.email);

// /**
//  Heap - All Non = Primitive datatypes store and we get the reference , thats why we call 
//  it Call by Reference
//  */



let names = ["raju","rajesh","hori"]
console.log(names);

let updateNmaes = names
console.log(updateNmaes);

// updateNmaes =["Hori","Robi","Kalu"]

console.log(updateNmaes);
console.log(names);

// console.log(typeof names);

names[1]="Bipen"
console.log(names);
console.log(updateNmaes);

/*
Outputs 
[ 'raju', 'rajesh', 'hori' ]
[ 'raju', 'rajesh', 'hori' ]
[ 'raju', 'rajesh', 'hori' ]
[ 'raju', 'rajesh', 'hori' ]
[ 'raju', 'Bipen', 'hori' ]
[ 'raju', 'Bipen', 'hori' ]

*/






