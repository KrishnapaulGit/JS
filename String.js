// // // // // // // // // // // // // // Creating String 

// // // // // // // // // // // // // let name = "Krishna" // Primitive

// // // // // // // // // // // // // console.log(name);

// // // // // // // // // // // // // let name2 = name

// // // // // // // // // // // // // console.log(name2);

// // // // // // // // // // // // // name2 = "Krishna Paul"
// // // // // // // // // // // // // console.log(name2);
// // // // // // // // // // // // // console.log(name);


// // // // // // // // // // // // // Construuctor
// // // // // // // // // // // // // When String is called as a constructor (with new), 
// // // // // // // // // // // // // it creates a String object, which is not a primitive

// // // // // // // // // // // // let name = new String("Krishna");
// // // // // // // // // // // // console.log(name);


// // // // // // // // // // // // console.log(typeof name);

// // // // // // // // // // // // let name2 = String("Krishna");
// // // // // // // // // // // // console.log(name2);
// // // // // // // // // // // // console.log(typeof name2);

// // // // // // // // // // // // // Note : When we call String() constructor it creates String objects(Non - Primitive),
// // // // // // // // // // // // // and when we call String function it create a string of primitive types 




// // // // // // // // // // // let name = new String("krishna");

// // // // // // // // // // // // let name2 = name
// // // // // // // // // // // // console.log(name);
// // // // // // // // // // // // console.log(name2);

// // // // // // // // // // // // name2 = " Krishna Paul"

// // // // // // // // // // // // console.log(name);
// // // // // // // // // // // // console.log(name2);
// // // // // // // // // // // // console.log(typeof name2);

// // // // // // // // // // // // console.log(name === name2);
// // // // // // // // // // // console.log(typeof name);
// // // // // // // // // // // name = "Krishna Paul"
// // // // // // // // // // // console.log(typeof name);


// // // // // // // // // // // console.log(name);



// // // // // // // // // // // Properties of String


// // // // // // // // // // // length

// // // // // // // // // // // The length data property of a String value contains the length of the string in UTF-16 code units.


// // // // // // // // // // const text = "welcome to Codademy , where Your Passion our Aim"

// // // // // // // // // // let numLength = text.length;
// // // // // // // // // // console.log(`The length of "${text}" in UTF-16 format is ${numLength}`);



// // // // // // // // // // const engine = "Chrome"
// // // // // // // // // // console.log(engine.length);
// // // // // // // // // const length = 10

// // // // // // // // // const name = "Codademy"
// // // // // // // // // console.log(name.length);

// // // // // // // // // // console.log(typeof length);



// // // // // // // // const emoji = "😄";
// // // // // // // // console.log(emoji.length); // 2
// // // // // // // // console.log([...emoji].length); // 1
// // // // // // // // const adlam = "𞤲𞥋𞤣𞤫";
// // // // // // // // console.log(adlam.length); // 8
// // // // // // // // console.log([...adlam].length); // 4
// // // // // // // // const formula = "∀𝑥∈ℝ,𝑥²≥0";
// // // // // // // // console.log(formula.length); // 11
// // // // // // // // // console.log([...formula].length);

// // // // // // // // const name = "aaaaaaaaaaa😄a%"
// // // // // // // // console.log([...name].length)













// // // // // // // // /* Methods of String

// // // // // // // // 1. at() it takes an integer value (+ve or -ve)
// // // // // // // // and returns the character at the given index position

// // // // // // // // For -ve it count from the end starts from 1

// // // // // // // // const name = "Codademy Your Passion Our Aim"

// // // // // // // // console.log(name.at(15));//(0 to 15)//a
// // // // // // // // console.log(name.length); //29
// // // // // // // // console.log(name.at(-7)); //o (from end to -7 starts from 1) 
// // // // // // // // console.log(name.at(22));  // o



// // // // // // // // 2. charAt()
// // // // // // // // returns the character at the specified index 
// // // // // // // const name = "Codademy Your Passion Our Aim"
// // // // // // // console.log(name.charAt(2)); //d
// // // // // // // console.log(name.charAt(-2)); //empty (because rang is 0 to string.length-1)

// // // // // // // console.log(name.charAt()); //C (used index 0 by default)

// // // // // // // console.log(name.charAt(100));// empty 

// // // // // // // const str = "𠮷𠮾";

// // // // // // // console.log(str.charAt(0)); //?
// // // // // // // console.log(str.charAt(1)); //?
// // // // // // // console.log((String.fromCodePoint(str.codePointAt(0)))); //𠮷


// // // // // // // console.log(str.codePointAt(0));//134071



// // // // // // // 3. charCodeAt() // returns the UTF code of the character at the specified index
// // // // // // const name = "Codademy Your Passion Our Aim"

// // // // // // // console.log(`Code of ${name.charCodeAt(5)} is equal to ${name.charAt(5)}`); //Code of 101 is equal to e

// // // // // // // console.log(`${name.charAt(-2)} is ${name.charCodeAt(-2)}`);
// // // // // // // if charAt() is out of range (0 to string.length-1) then charCodeAt() returns NaN
// // // // // // Unicode code points range from 0 to 1114111 (0x10FFFF). charCodeAt() always returns a value that is less than 65536, 


// // // // // const text = "ABC"
// // // // // console.log(text.charCodeAt());//65 (code of 'A')
// // // // // console.log(text.charCodeAt(1));//66 (code of 'B')

// // // // // // console.log(String.codePointAt(65536)); nothing error



// // // // // String.prototype.localeCompare()
// // // // // String.prototype.match()
// // // // // String.prototype.matchAll()
// // // // // String.prototype.normalize()
// // // // // String.prototype.padEnd()
// // // // // String.prototype.padStart()
// // // // // String.raw()
// // // // // String.prototype.repeat()
// // // // // String.prototype.replace()
// // // // // String.prototype.replaceAll()
// // // // // String.prototype.search()
// // // // // String.prototype.slice()
// // // // // String.prototype.small()
// // // // // Deprecated
// // // // // String.prototype.split()
// // // // // String.prototype.startsWith()
// // // // // String.prototype.strike()
// // // // // Deprecated
// // // // // String.prototype.sub()
// // // // // Deprecated
// // // // // String.prototype.substr()
// // // // // Deprecated
// // // // // String.prototype.substring()
// // // // // String.prototype.sup()
// // // // // Deprecated
// // // // // String.prototype.toLocaleLowerCase()
// // // // // String.prototype.toLocaleUpperCase()
// // // // // String.prototype.toLowerCase()
// // // // // String.prototype.toString()
// // // // // String.prototype.toUpperCase()
// // // // // String.prototype.toWellFormed()
// // // // // String.prototype.trim()
// // // // // String.prototype.trimEnd()
// // // // // String.prototype.trimStart()
// // // // // String.prototype.valueOf()


// // // // //concat()
// // // // const name = "Codademy Your Passion Our Aim"

// // // // // console.log(name.concat(" Youtube channel")); // name + Youtube channel

// // // // // console.log(name);  // only name string



// // // // const YT = "Youtube channel"

// // // // // console.log(concat(name,YT));  // error

// // // // let updatedname = name.concat(YT)

// // // // console.log(updatedname); //Codademy Your Passion Our AimYoutube channel



// // // const num= 234

// // // let textt = num.toString();
// // // console.log(num);
// // // console.log(textt);

// // // console.log(typeof num);  //number
// // // console.log(typeof textt);  //string



// // const text = new String("Krishna")

// // console.log(text.valueOf()); // Krishna






// const name = "  Codademy  Hello"

// console.log(name);
// console.log(name.trim());
// console.log(name.trimEnd());
// console.log(name.trimStart());


const name =" Codademy"

// console.log(name.split());

console.log(name.slice(3));//dademy

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"



















