class Parent{
    constructor(username){
        this.username=username;
    }

   static getUser(){
        return this.username;
    }
}

class Child extends Parent{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}


const c1 = new Child("krishhh","krishhhmail@gmail.com");
console.log(c1.getUser());