// using Object


class User{
    constructor(username, pass){
        this.username=username;
        this.pass=pass;
    }

    get pass(){
        return `${this._pass}af#$%`
    }
    set pass(value){
        this._pass=value;
    }
}


const krishh = new User("krishhhhna","14578");
// console.log(krishh.pass);



// using property


function user2(username,pass){
    this._username=username;
    this._pass=pass;


    Object.defineProperty(this,'pass',{
        get:function(){
            return `${this._pass}*&^%`
        },
        set:function(value){
            this._pass=value;
        }
    })

}

const kriss=new user2("krishhhna","45789")
console.log(kriss.pass);



