

/*
if(true)----> then execute

*/


const loggedIn=true;

// if(loggedIn){
//     console.log("logged In");
// }

if(2=="2"){

    //in this case only value is compared
    // console.log("execute");  //execute
}

if(2==="2"){

    //in this case value and type compared
    // console.log("execute");  //nothing execute
}


// let temperature = 5

// if(temperature < 50){
//     console.log("Temperature is < 50");
// }



// short-hand notation

const balance = 1000
// if(balance>500) console.log("Test"),console.log("Test2");

// if(balance<500){
//     console.log("<500");
// }else if(balance<1000){
//     console.log("<1000");
// }else if(balance <1500){
//     console.log("<1500");
// }



if(balance >500 && balance<1500){
    console.log("Balance");  //print
}


if(balance >500 || balance<500){
    console.log("Balance");  //print
}
