//Array methods

//splice()
//slice()
//indexOf()
//includes()
//forEach()
//map()
//reduce()
//sort()
//filter()
//find()
//concate()
//join()
//every()
//some()


//slice()

// let arr = [1,2,3,4,5,6,7,8]
// let newArr = arr.slice(2,6); // It will give you array starting from index 2 and will go till 5 which is one less than 6
// console.log(newArr);

// let arr = [1,2,3,4,5,6,7,8]
// let newArr = arr.slice(2,-2); // Negative value will start from the end
//______________________________________________

//splice()

// let arr = [1,2,3,4,5,6,7,8]

// let arr1= arr.splice(2,2,"hello")// splice(starting index, delete, add new value)
// console.log(arr);


// let arr = [1,2,3,4];

// let arr1=arr.splice(1,2,"x","y")
// console.log(arr)

// let arr=[1,2,3,4,5]
// let arr1= arr.splice(3,2,5)
// console.log(arr)
//_____________________________________________

//includes()

// let arr2 = [1,3,2,4,3];
// // arr.includes(3)
// // console.log(arr)

// //indexOf

// console.log(arr2.indexOf(3,2))


//forEach()

//let arr2= [1,3,2,10,4,3,10];

// arr2.forEach((val,index)=>{
//     console.log(val*3,index)
// })

//map()


//reduce()

// let sumOfArr= arr2.reduce((acc,val,index,arr) => {
//     return acc+= val
// })
// console.log(sumOfArr)



//sort()

// let sortingArr = [45,23,32,12,76,3,54]

// console.log(sortingArr.sort((a,b)=> a-b))


//filter()

// let filterArr = [45,23,32,12,76,3,54]
// let evenVal1 = filterArr.filter((val => val%2===0))
// console.log(evenVal1)

// let arr3=[94,4,2,34,40,22,23,12,4]
// let greater=arr3.filter((val)=>val>30).map((val)=>val*2)
// console.log(greater)



// let arr3=[94,4,2,34,40,22,23,12,4]
// let greater=arr3.filter((val)=>val>30).map((val)=>val*2).reduce((acc,val)=> acc+= val)
// console.log(greater)



//find method()

let findArr = [12,34,32,53,43,2];
console.log(findArr.find((val,index)=>val ===53))


//concat()