function mul(num){
    return num*5;
}


mul.power=2;

console.log(mul(5));
console.log(mul.power);
console.log(mul.prototype);



function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.inrement = function(){
   this.score++;
}
createUser.prototype.printMe= function(){
    console.log(`Score is : ${this.score}`);
}

const chai = new createUser("Chai",25)
const tea = createUser("Tea",250)


chai.printMe()