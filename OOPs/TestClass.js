// class User{
//     constructor(username,email,pass){
//         this.username=username
//         this.email=email
//         this.pass=pass
//     }

//     encyptPass(){
//         return `#@!${this.pass}xyz`
//     }
//     userUpper(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const user = new User("krishh","krishhhmail@gmail.com","1245");

// console.log(user.encyptPass());
// console.log(user.userUpper());



// using function


function User(username,email,pass){
    this.username=username;
    this.email=email;
    this.pass=pass;
}

User.prototype.encyptPass=function(){
    return `!@#${this.pass}nbgt`;
}
User.prototype.userUpper=function(){
    return `${this.username.toUpperCase()}`;
}

const user2 = new User("krishhhhh","krishh@xyz","4895");

// console.log(user2);

console.log(user2.encyptPass());
console.log(user2.userUpper());