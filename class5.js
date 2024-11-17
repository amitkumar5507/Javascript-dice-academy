//Arrays (sorting)

//arr = [1,2,3,4,5,6]

//arr.push(10)- It will add 10 value to last of array
//arr.pop()-It will remove the last number of array

//arr.shift()-It will remove the first element of array
//arr.unshift(anyValue)- It will add the element in the beginning of an array

// let array=[];
// array.push(10);
// array.push(20);
// array.push(30);
// array.push(40);
//array.pop() //It will remove the last element in the array

// array.shift();//It will remove the first element in the array
// array.unshift(200);//It will add 200 in the beginning of an array
// console.log(array);

//________________________________________

//BUBBLE SORT

// let arr=[3,2,5,10,4,7,11]

// function bubbleSort(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j]> arr[j+1]){
//                 [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
//             }
//         };
//     }return arr;
// }
// bubbleSort(arr)

//___________________________________________

//SELECTION SORT

// let arr=[3,2,5,10,4,7,11]

// function selectionSort(arr){
//     for(let i=0; i<arr.length; i++){
//         let min_idx = i;
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[j]< arr[min_idx]){
//                 min_idx = j;
//             }
//         }
//         let temp=arr[i];
//         arr[i]=arr[min_idx];
//         arr[min_idx]= temp;
//     }
//     return arr;
// }
// console.log(selectionSort(arr));


// let arr = [1,1,1,2,3,5,4,5,2,4]
// //set- collection of unique element

// function findDuplicates(arr){
//     let set = new Set();
//     let duplicate = new Set();
//     for (let i of arr){
//         if(set.has(i)){
//             duplicate.add(i);
//         }
//         else{
//             set.add(i);
//         }
//     }
//     return duplicate;
// }
// console.log(findDuplicates(arr));

//Find third largest in the above array
//Solution - first sort the elements using bubble sort
//then return.arr[array.length]

// function findKlargest(arr,k){
//     arr.sort((a,b)=>a-b)
//     return arr[(arr.length)-k]
// }
// console.log(findKlargest(arr,3))

