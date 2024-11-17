// //While loop

// // let a=10;
// // while(a>=0){
// //     console.log(a)
// //     a-=1
// // }

// //___________________________________________________________

// //Do while example

// // let i=11;

// // do{
// //     console.log(i);
// //     i--;
// // }
// // while(i<0)

// //___________________________________________________________

// //For loop example

// // for(let i =0; i<10; i++){
// //     console.log(i)
// // }

// //___________________________________________________________

// // Print even numbers within 10 with help of for loop and function

// // function evenNum(){
// //     for(let i=0; i<=10; i++){
// //         if(i%2==0){
// //             console.log(i)
// //         }
// //     }
// // }
// // evenNum()

// //___________________________________________________________

// //TO CHECK PRIME NUMBER

// // function primeNum(){
// //     for(let i=0; i<=100; i++){
// //         for(let j=0; j<=100; j++){
// //             if(i%j==1 || i%1==0){
// //                 console.log(i)
// //             }
// //         }
// //     }
// // }
// // primeNum()

// //___________________________________________________________

// //PATTERN LOOP

// //square

// // let pattern="";
// // for(let i=0; i<5; i++){ //outer loop
// //     for(let j=0; j<5; j++){ //inner loop
// //         pattern+="* "
// //     }
// //     pattern +="\n"
// // }
// // console.log(pattern)

// //___________________________________________________________

// //square:-

// // for(let i=0; i<5; i++){
// //     let row=""
// //     for(let j=0; j<5; j++){
// //         row+="* " //We are appending * in row
// //     }console.log(row)
// // }

// //number:- 

// // for(let i=1; i<=5; i++){
// //     let num=""
// //     for(let j=1; j<5; j++){
// //         num +="1  "
// //     }console.log(num)
// // }

// // Right angle triangle

// // for (let i=1; i<=5; i++){
// //     let num= ""
// //     for(j=1; j<=i; j++){
// //         num+=`$ `
// //     }console.log(num)
// // }

// //hollow right angled triangle

// //___________________________

// //sort array in ascending order

// // arr=[3,6,3,26,27,11,3]

// // function sortArray(arr){
// //     for(let i=0; i<arr.length; i++){
// //         for(let j=0; j<arr.length; j++){
// //             if(arr[j]>arr[j+1]){
// //                 let temp = arr[j];
// //                 arr[j] = arr[j+1];
// //                 arr[j +1]= temp;

// //             }
// //         }
// //     }return arr;
// // }console.log(sortArray(arr))



// //Bubble sort-- bubble sort is an algorithm to sort an array

// // let arr = [34,64,756,8,85,342]

// // for(let i=0; i<arr.length; i++){
// //     for(j=0; j<arr.length; j++){
// //         if(arr[j]> arr[j+1]){
// //             [arr[j],arr[j+1]]= [arr[j+1], arr[j]]
// //         }
// //     }
// // }
// // console.log(arr)

// //bubble sort using function

// // let bubbleArr= [12,3,32,43,2,1]

// // function bubbleSort(arr){
// //     for(let i=0; i<arr.length; i++){
// //         for(j=0; j<arr.length; j++){
// //             if(arr[j]> arr[j+1]){
// //                 [arr[j],arr[j+1]]= [arr[j+1], arr[j]]
// //             }
// //         }
// //     }return arr
// // }
// // console.log(bubbleSort(bubbleArr));


// //Selection sort -- refer medium for animation

// // let bubbleArr= [12,3,32,43,2,1]

// // function selectionSort(arr){
// //     let n= arr.length
// //     for(let i=0; i<n; i++){
// //         let minIdx=i
// //         for(let j=i+1; j<n; j++){
// //             if(arr[j]< arr[minIdx]){
// //                 minIdx=j
// //             }
// //         }
// //         if(minIdx !==i){
// //             [arr[i], arr[minIdx]]= [arr[minIdx], arr[i]]
// //         }
// //     }
// //     return arr;
// // }

// // console.log(selectionSort(bubbleArr))

// //Find the maximum in an array
// // function fullName(firstName, lastName=""){
// //     console.log(`Hello ${firstName} ${lastName}`)
// // }
// // fullName("Amit","Kumar")


// //STRINGS

// // let name1= "Amit"
// // console.log(name1)
// // console.log(name1.length);
// // console.log(name1[0]);
// // console.log(name1.charAt(1));
// // console.log(name1.toUpperCase());

// //SEARCHING IN STRING

// //

// // let str2 = "hellloooo"
// // console.log(str2.slice(2,4));
// // console.log(str2.substring(1,6));
// // console.log(str2.substr(1,7));


// //Higher order function and callback// use cb to denote the callback

// function callTwice(cb){
//     cb()
//     cb()

// }
// function rollDie(){
//     const roll = Math.floor(Math.random()*6)+1
//     console.log(roll);


// }
// callTwice(rollDie)






//Today 15Th Nov




// //while loop example


// let a= 15;
// while(a>=0){ // This is the condition
//     console.log(a);
//     a-=1;  //This is very important as we have to use "-=1" only then it will go from 15 to 0, if by mistake you will write "+=1" then it will start incrementing the number and the condition will always be true, resulting in infinite loop

// }




// // Do while loop

// let a=10;

// do{
//     console.log(a);
//     a--;
// }
// while(a>=0);


// let b=0;
// do{
//     console.log(b);
//     b++;    
// }
// while(b<=10);




// //For loop

// for(let i=0; i<=10; i++){
//     console.log(i);

// }

// for(let i=15; i>=0; i--){
//     console.log(i);

// }



// //Print even numbers with help of function and loop


// function evenNumber(n){  //in this line (n) is the parameter which takes an argument and the argument gets passed when function is called
//     for(let i=0; i<=n; i++){
//         if(i%2 == 0){
//             console.log(i);

//         }
//     }
// }

// evenNumber(50)

// function oddNumber(n){
//     for(let i=0; i<=n; i++){
//         if(i%2 ==1){
//             console.log(i);

//         }
//     }
// }
// oddNumber(10)



//Class 2

// //To check prime number //There is a doubt which i have to clear

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


// //Nested loop

// for(let i=0; i<5; i++){
//     console.log("This is outer loop");
//     for(let j=0; j<5; j++){
//         console.log('This is inner loop');
        
//     }    
// }





// //Array traverse


// let arr = [1,2,3,4,6,7,8]

// for(let i=0; i<=arr.length; i++){
//     console.log(arr[i]);  //This will print separate values in vertical line
    
// }



// //Sum of array

// let arr = [12,23,34,45,45,56]
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i]
// }console.log(sum)



// //Swapping

// let a=10;
// let b=20;
// let c=5;

// a=b;
// b=c;
// c=a;
// console.log({a,b,c})



//Sorting array in ascending order

let arr= [23,65,2,4,25,9];

function sortArray(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]= [arr[j+1], arr[j]]
            }
        }
    }return arr;
}
console.log(sortArray(arr))