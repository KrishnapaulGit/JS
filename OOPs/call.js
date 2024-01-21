function Setusername(username){
    this.username=username;
    console.log(username);
}

function createUser(username,email,pass){
    Setusername.call(this,username)

    this.email=email;
    this.pass=pass

}


const krishh = new createUser("krishh","krishhmail@gmail.com","1235");

console.log(krishh);