// Arrays - Collection of elements

//let a =[3,4] //length of this array is 2, index starts with 0 and length starts from 1, In array you can enter number, strings, boolean, any type of data.

//let b = [1,2,3,"a", null, true] //If you want to access a particular value in this array then you have to write

//console.log(b[3]) // This will print a in console

//_______________________________________________________

// let arr =[9,8,67,5,4,3,2];
// console.log(arr[2])

//Array traverse - will give you each value separately in vertical

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// Sum of array

// let arr =[9,8,67,5,4,3,2];


// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i];
// }
// console.log(sum);


//Swapping

// let a=10;
// let b=20;
// let c= 0;

// c=a;
// a=b;
// b=c;
// console.log({a,b,c})

//_________________________________

// let a=10;
// let b=20;

// [a,b]=[b,a] // This will swap the value of a and b with each other

// console.log({a,b})


// Homework

// swapping of 3 numbers using adding subtraction

// [1,10,2,3,5,12] - Sort this array to ascending order

let a= 10;
let b= 20;
let c= 30;

a=b;
b=c;
c=b-a;

console.log({a,b,c})

//____________________________________

let arr = [1, 10, 2, 3, 5, 12];
arr.sort((a,b)=> a-b);
console.log(arr)

