//object - IUt can store all the data type
//obj ={}
//obj["hello"] = "hi"

// let obj = {}
// obj.name = "pritam"   //dot notation
// obj["hello"] = "hi"   //bracket notation
// console.log(obj)

// let obj={}
// obj.fullName="Pritam gupta"
// obj["Full Name"] = "Pritam gupta"
// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// for(let i in obj){
//     console.log(i,obj[i])
// }


//create object name, key, email, property, about: function

// let userObj={
//     name:"Amit",
//     age:16,
//     email:"yesamitkumar@gmail.com",
//     about: function(){
//         console.log("hello world")
//     }
    
// }
// console.log(userObj)




// let userObj={
//     name:"Amit",
//     age:16,
//     email:"yesamitkumar@gmail.com",
//     about: function(){
//         console.log(`my name is ${userObj.name} age${userObj.age} email ${userObj.email}`)  //You can use 'this' keyword
//     }
    
// }
// console.log(userObj)




let userObj={
    name:"Amit",
    age:16,
    email:"yesamitkumar@gmail.com",
    about: function(){
        console.log(`my name is ${this.name} age${this.age} email ${this.email}`)
    }
    
}
console.log(userObj.about())
