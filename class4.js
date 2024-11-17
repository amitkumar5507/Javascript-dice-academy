//To find maximum number using function

// let arr = [1,200,0,4,5,10]

// function findMax(arr){
//     let max= -200;
//     for(let i =0; i<arr.length; i++){
//         if(arr[i]> max){
//             max=arr[i];
//         }
//     }return max;
// }
// console.log(findMax(arr));

//to find minimum

// let arr = [1,200,2,4,5,10]

// function findMin(arr){
//     let min= 400; //you can use max integer and min interger
//     for(let i =0; i<arr.length; i++){
//         if(arr[i]< min){
//             min=arr[i];
//         }
//     }return min;
// }
// console.log(findMin(arr));


//Make a function that gives one even array and one odd array

// let arr= [1,2,3,4,5,6,7,8];
// function findOddEvenInArr(arr){
//     let oddArr = [];
//     let evenArr = [];

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2 == 0){
//             evenArr.push(arr[i]); //arr.push(value) -  this is used to push a extra value in array
//         }
//         else{
//             oddArr.push(arr[i])
//         }
//     }
//     console.log(`this is odd arr ${oddArr}, this is even arr ${evenArr}`)
// }

// findOddEvenInArr(arr);


//To make a reverse array

// let arr= [1,2,3,4,5,6,7,8]
// let newArray = []

// for(let i= arr.length-1; i>=0; i--){
//     newArray.push(arr[i])
    
// }

// console.log(newArray)


//Target sum

// let arr = [4,3,2,6,7]

// function findTarget(arr,target){
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]+arr[j]===target){
//                 return true;
//             }
//         }
//     }return false
// }
// console.log(findTarget(arr,7))


// sorting array from loop (ascending order)

let arr1=  [10,7,12,15,20,2,8]

function sortArray(arr){
    for(let i=0; i<arr.length; i++){
        for (let j=0; j<arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j +1]= temp;
            }
        }
    }return arr;
}
console.log(sortArray(arr1))
