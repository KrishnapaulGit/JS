// Objects are Non-Primitive data in JS , it can contain any type of value as Key and value pairs

// Constructor

/**
new Object()
new Object(value)

Object()
Object(value)
 */

// const myObj = new Object();

// console.log(myObj); //empty object

// const myObj2 = new Object(null);
// console.log(myObj2); //empty object




// const myObj3 = new Object(undefined);
// console.log(myObj2); //empty object

// console.log(`myObj ${typeof myObj} myObj2 ${typeof myObj2}  myObj3 ${typeof myObj3}`);



// const myObj = Object()

// myObj.name = "Codademy"
// myObj.type = "Youtube Channel"
// myObj["year"]= 2023

// console.log(myObj);//{ name: 'Codademy', type: 'Youtube Channel' }


// console.log(myObj);  //{ name: 'Codademy', type: 'Youtube Channel', year: 2023 }


// const Sym1 = Symbol('test')
// const myObj ={
//     name : 'Krishna Paul',
//     'college' : 'KGEC',

//     Sym1 : 'not Test',

//     [Sym1]: 'Key'  
// }

// console.log(myObj[Symbol('Sym1')]);
// console.log(myObj['Sym1']);
// console.log(myObj.name);
// console.log(myObj.college);//KGEC

// console.log(myObj["college"]);  //KGEC
// console.log(myObj["name"]);  // Krishna Paul





// Methods 

//  assign()  ---> It's a static method copies all enumerable own properties from one or more source object to target object


/**
 Syntax

 Object.assign(target)
Object.assign(target, source1)
Object.assign(target, source1, source2)
 */


// const source ={
//     A: 10,
//     D: 40,

// }
// const source2 ={
//     E: 10,
//     F: 40,

// }


// const target ={
//     A: 20,
//     C: 30,

// }
// const testObj = Object.assign(target,source,source2);
// console.log(Object.assign(target,source,source2));
// console.log(target);

// console.log(testObj===target); //true

// const myObj2 = {...target,...source,...source2}
// console.log(myObj2);//{ A: 10, C: 30, D: 40, E: 10, F: 40 }

// console.log(target);

// console.log(myObj2===target); //false


// console.log(Object.assign(target,source));  //{ A: 10, C: 30, D: 40 }
// console.log(target);  //{ A: 10, C: 30, D: 40 }
// console.log(source);  //{ A: 10,D: 40 }


// console.log(Object.assign(target,source,source2));  //{ A: 10, C: 30, D: 40 }

// console.log(target);  //{ A: 10, C: 30, D: 40, E: 10, F: 40 }


// create() ---> creates a new object using the existing object

/**
 Syntax

 Object.create(proto)
Object.create(proto, propertiesObject)
 */


// const myObj = {
//     name:"Codademy",

//     details : function(){
//         console.log(`The name is ${this.name} and type is  ${this.type} `);
//     }
// }

// // console.log(myObj);

// const myObj2 = Object.create(myObj)
// console.log(myObj2.name);  //Codademy


// myObj2.type="Youtube Channel"

// // console.log(myObj);

// // console.log(myObj.details());  //The name is Codademy and type is  undefined 
// // console.log(myObj2.details());  //The name is Codademy and type is  Youtube Channel
// console.log(myObj); //{ name: 'Codademy', details: [Function: details] }
// console.log(myObj2);  //{ type: 'Youtube Channel' }



// freeze()---> freeze the object and we cant change or modify the object values

// const myObj ={
//     name:"codademy"
// }

// // console.log(myObj);

// // myObj.name= "codademy-youtube"
// // console.log(myObj); //{ name: 'codademy-youtube' }

// Object.freeze(myObj)

// // myObj.name= "codademy-youtube channel"
// // console.log(myObj); //{ name: 'codademy-youtube' }



// // isFrozen()

// console.log(Object.isFrozen(myObj));


//seal() --->new properties cannot be added, existing properties cannot be removed

// const myObj={
//     name : "Krishna"
// };

// console.log(myObj);

// myObj.name="Krishna paul"
// console.log(myObj);

// Object.seal(myObj);

// delete myObj.name;
// console.log(myObj); //{ name: 'Krishna paul' }

// myObj.type="Youtuber"
// console.log(myObj); //{ name: 'Krishna paul' }



// // isSealed()

// console.log(Object.isSealed(myObj));  //true



// The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.



// const myObj={
//     A:"One",
//     1:'A',
//     B:"Two",
//     2:'B'
// }

// console.log(Object.keys(myObj));  //['A','1','B','2']



// Nested Objects

// const myObj ={
//     userDetails:{
//         userName:{
//             firstname:"Krishna",
//             lastName:"Paul"
//         }
//     }
// }
// console.log(myObj.userDetails);//{ userName: { firstname: 'Krishna', lastName:'Paul' } }

// console.log(myObj.userDetails.userName);//{ firstname: 'Krishna', lastName: 'Paul' }

// console.log(myObj.userDetails.userName.firstname);//Krishna



// DeStructuring

const course={
    CourseName:"JavaScript",
    Cost: 599,
    CourseInstructor:"Krishna"

}

// console.log(course.CourseInstructor);

const {CourseInstructor}=course

console.log(CourseInstructor); //Krishna

const {CourseName:Course}=course
console.log(Course); //JavaScript






