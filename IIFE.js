// Immediately Invoked Function Expression


// ()() ---> first () for function body and second () for call the function

// named IIFE

(function code(){
    console.log("I m named IIFE");
})();

//if we have to use more than one IIFE in a progrom then 
// we should give ;(semicolon) after calling the function
// otherwise getting error

// simple or unnamed IIFE

// we have to use arrow function

(()=>{
    console.log("I m unnamed IIFE");
})() ;


// passing parameter

((name)=>{
    console.log("I m unnamed IIFE",name);
})("Raju") ;


((obj)=>{
    console.log(`Name : ${obj.name}    Id :${obj.id}`);
})({name:"Krishna",id:"K@20147"}) ;





// We we use IIFE

/*
First -- which is execute immediately
IIFE provides encapsulation, allowing you to create private scopes for variables and functions.
This prevents variable conflicts and unintended modifications of data in the global scope

Simply - To prevent global scope polution
*/





