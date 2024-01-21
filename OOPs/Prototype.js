// let myName = "Krishna     "

// console.log(myName.length);


let myArray=["Arr1","Arr2"]

const myObj={
    username:"krishh",
    email:"krishhhhmail",
    getUserName: function(){
        console.log(`User Name is ${this.username}`);
    }
}


// console.log(myArray);
// console.log(myObj);


Array.prototype.printName=function(){
    console.log("User is Krishna");
}
// Object.prototype.printName=function(){
//     console.log("User is Krishna");
// }


// myArray.printName()
// myObj.printName()



// Inheritance

const user={
    username:"krishna",
    email:"krishhhhmail@gmail.com"
}

const Teacher={
    makeVoice:true
}


const TeacherSupport={
    isAvailable:true
}

const TASupport={
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:TeacherSupport
}


TeacherSupport.__proto__=user;


// console.log(TASupport.__proto__);
// console.log(TeacherSupport.__proto__);



// modern syntax


Object.setPrototypeOf(TeacherSupport,Teacher)




let anotherUserName = "krishna paul     "


String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}


anotherUserName.trueLength()


"raju".trueLength()

"teaChai   ".trueLength()

