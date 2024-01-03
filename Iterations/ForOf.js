// for (const iterator of object) {
    
// }


const arr = [1,2,3,4,5]

for (const i of arr) {
    // console.log(arr[i]);
}


// const name = "Krishna Paul";

// for (const i of name) {
//     if(i==" "){
//         console.log("Got Space");
//         continue;
//     }
//     console.log(i);
// }


// Map() ===> Its an Object where every key-value pair is unique and insertion remains as we insert


const map = new Map();

map.set(1,"One");
map.set(2,"Two");
map.set(3,"Three");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key,': ',value);
    
}


const myObj ={
    name:"Krishna",
    id: 45789
}

// for (const i of myObj) {  //myObj is not iterable
//     console.log(i);
// }