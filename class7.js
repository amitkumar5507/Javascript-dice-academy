// //STRINGS - it can be in "xyz", 'xyz' or `xyz`

// let name1 = "amit"
// console.log(name1.length)
// console.log(name1[0])
// console.log(name1.charAt(0))
// console.log(name1.toUpperCase())



// // Searching in strings
// //________________________

// let str = "hello world"
// console.log(str.indexOf("l",4));// this will return the index of the particular alphabet but it will return only one value once it will find it, then after , you can decide from where you should start the search for the index
// console.log(str.includes("ell"));
// console.log(str.includes("ellw")); //this will be false as ell and after that w is not in continuous

// //extracting parts of string -

// console.log(str.slice(2,4)) //refer preevious classes for slice method
// console.log(str.substring(1,6));
// console.log(str.substr(1,7))


// //replace parts str -

// console.log(str.replace("hello", "hy"));
// console.log(str.replaceAll("hello", "hy")); //It will replace all the hello in the string


// let trimHello = "        hello      "
// console.log(trimHello.trim()); //This will remove the space from starting and ending


// //split string

// let word = str.split(" ")
// console.log(word,"zzzz")// This will remove the space from "hello_world" underscore is used to show the space
// console.log(word.join(''))// this will join the str after removing the space

// //practice question

// let string = "My    Name    is    Preetam"
// console.log(string.split(" ").filter(str=> str !="").join(" "));

// //pallindrom

// function pallidrome(str){
//     let nStr = str.toUpperCase();
//     let words = nStr.split(" ").reverse();
//     return(str.toUpperCase() == words.join(" "))
// }
// console.log(pallidrome("Elle"))


//Homwwork

//Find most frequent character in string - (hello) ->l

//Capitalize first letter

//Count vowels and consonents in string

//Find the longest word in the string

//Count occurence of each word

//Remove duplicates in string

//Find all unique Characteristics in Str

//Count the number of words in string


//SOLUTIONS

//Find most frequent character in string - (hello) ->l

function mostFreq(str){
    let freq = {}
    let maxChar = "";
    let maxCount = 0;
    for(let char of str){
        freq[char] = (freq[char] || 0) + 1;
        if(freq[char] > maxCount){
            maxCount = freq[char];
            maxChar = char
        }
    }
    return maxChar
}
console.log(mostFreq("helllooooo"));


//Capitalize first letter


// let string = "hello"

// console.log(string.charAt(0).toUpperCase() + string.slice(1));

function cap(str){
    let words = str.split(" ");
    let capArr = words.map((val) => val.charAt(0).toUpperCase() + (val.slice(1)).toLowerCase());
    return capArr.join(" ")

}
console.log(cap("hello world sdf"));




//Count vowels and consonents in string

