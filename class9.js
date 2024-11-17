//Javascript from starting

//Print in javascript

// console.log("Hello world");



//VARIABLE

// var data =3

//type of

//String to number change

//String concatinate

//=> console.log("hello", "my", "name")
//=> console.log("hello"+ "my"+ "name")
//=> console.log(`string ${d}, ${f}`) => this is string literal


//DATA TYPES

//number,string,boolean,symbol,undefined, null, bigInt



//COMPARISON OPERATORS

// 10==10  TRUE
// 10=="10" TRUE
// 10 ==="10" FALSE
// 10>12 FALSE
// 10>=10 TRUE
// 10<=10 TRUE
// 10! =10 FALSE
// 10!=9 TRUE


// FALSY/TRUTHY

// FALSY = 0, "", null, undefined

// Rest all are truthy value



//CONDITIONAL STATEMENT

// if(){

// }

// else{

// }

// else if(){

// }


//switch case

// switch (expression) {
//     case value1:
//         // Code block to execute if expression === value1
//         break;
//     case value2:
//         // Code block to execute if expression === value2
//         break;
//     // Add more cases as needed
//     default:
//         // Code block to execute if none of the cases match
// }



//Turnery operator

// a>10?___ : _______


//AND OR NOT operator

// a>10 && b>20



//LOOPS

//while, do while, for loop, for each loop, for in loo, for of loop


//while

// while(condition){
//     iterator++
// }




//break and continue with

//do while

// let i=0;
// do{
//     console.log(i)
// }
// while(i>10)



//for loop


// for(let i=0)




//PRIMITIVE DATA TYPE AND NON PRIMITIVE

//ARRAY
//PUSH,POP, SHIFT,UNSHIFT

//ARRAY METHOD


//FOR IN LOOP - IT WILL TELL THE INDEX OF ARRAY


//ARR   CLONE   CONCADE

// let a=[1,2,3]
// let b=[1,2,3]

// c= [...a,...b] spread operator


//Array destructuring// Rest and spread operator

// let arr=[1,2,3,4,5]
// let[a,b] = arr;
// console.log(b);


// let arr=[1,2,3,4,5]
// let[a,...b] = arr;
// console.log(b);



//Functions

// function functionName(parameter){
//     code to be executed
// }

// functionName()    This is for calling the function




//Arrow function

// const fName= () => {

// }
// fName()


//Anonymous function

// let a=function(){

// }
// a()


// learn about default parameter

// function greet(name="dummy"){
//     console.log(`Hello ${name} welcome`)
// }
// greet()


//Rest parameter

// function dev(a,b,c){
//     console.log(a,b,c);
    
// }
// dev(10,20,30,40,50,60,70,80)// if you want to print all the values, write like this mentioned below



// function dev(a,b,...c){
//     console.log(a,b,c);
    
// }
// dev(10,20,30,40,50,60,70,80)


//CALLBACK FUNCTION

// function dev(cb){
//     console.log("I have added a callback function");
//     console.log(10+10+10)
//     cb();
    
// }

// function greet(){
//     console.log("my work ended")
// }

// dev(greet)


// function primeNumber(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             console.log("This is not a prime number");
//             return;
//         }
//     }
//     console.log("This is a prime number");
    
// }

// primeNumber(9)



//FUNCTION RETURNING FUNCTION

// function myFunc(){
//     function hello(){
//         console.log("Hello world");
        
//     }return hello
// }

// let data = myFunc()
// data()       //We are treating variable as function now this will print hello world, otherwise by calling only myFunc(), this will return function






//Array methods

//Map

// let arr= [2,3,4,5,6];
// let newMapArr = arr.map((val,index,arr) => val*3)
// console.log(newMapArr);


//Filter - it will give you new array

// let arr1= [2,3,4,5,6];
// let newMapArr = arr1.map((val,index,arr) => val*3)
// let filteredArr = newMapArr.filter((val,index,arr)=> val>8)
// console.log(filteredArr);


//Reduce method

// let arr1= [2,3,4,5,6];
// let newMapArr = arr1.map((val,index,arr) => val*3)
// let filteredArr = newMapArr.filter((val,index,arr)=> val>8)
// console.log(filteredArr);
// let ss = filteredArr.reduce((acc,val)=>acc+val)
// console.log(ss)


//Sort method

// let sArr =[9,2,1,13,24,3,6,32]
// let result = sArr.sort((a,b)=> b-a);
// console.log(result);


// //find method

// let check = sArr.find((val)=>val>10);
// console.log(check);




//Every method

// let sArr1 =[9,2,1,13,24,3,6,32]

// let res1=sArr1.every((val)=> val>10)
// console.log(res1)



//Some method

// let sArr2 =[9,2,1,13,-24,3,6,32]

// let res2=sArr2.some((val)=> val<0)
// console.log(res2)



// //Fill method

// let newArr1 = new Array(10).fill(-2,3)
// console.log(newArr1)



//Splice

let sArr3 =[9,2,1,13,-24,3,6,32]
sArr3.splice(2,3,-10,-20)

console.log(sArr3)



//Homework, - object, proto, protype, how to iterate object