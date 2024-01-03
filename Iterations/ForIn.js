// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


const myObj={
    'js':"JavaScript",
    'cpp':"C++",
    'java':"Java"
}

for (const key in myObj) {
    // console.log(key);
    // console.log(`${key}  = ${myObj[key]}`);

}


const myArray=[
    "JS","CPP","Java"
]

for (const key in myArray) {
    // console.log(key);  //gives array keys

    // console.log(myArray[key]);
}

const map = new Map();

map.set(1,"One");
map.set(2,"Two");
map.set(3,"Three");

for (const key in map) {
   console.log(key);  // no output
}