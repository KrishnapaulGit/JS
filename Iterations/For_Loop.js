// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for (let i = 0; i <=10; i++) {
    const element =i;
    if (element == 5) {
        // console.log("Its number 5");
    }

    // console.log(element);
    
}

// console.log(element);


for (let i = 0; i <=10; i++) {
    const element =i;
    // console.log(`Outer Loop : ${i}`);
    for (let j = 0; j <=10; j++) {
        const element =j;
    // console.log(`Inner Loop : ${j} and Inner Loop ${i}`);

        // console.log(`${i}*${j} = ${i*j}`);
    }
    
}



const array=["Raju","Rohit","Robi"]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
    
}


// break and continue ---- keyword


for (let i = 1; i <=20; i++) {
    // if(i==5){
    //     console.log("Got 5");
    //     break;
    // }
     if(i==5){
        console.log("Got 5");
        continue;
    }
    console.log(i);

}