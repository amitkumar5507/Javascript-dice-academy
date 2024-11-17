//OBJECT basics

//CALLBACK - it is a function which takes a funtion as a parameter

// function checkWhether(name, cb){
//     data = db.find(name)
//     cb(data)
// }

//ROLLDIE FUNCTION
// function cbExample(name,cb){
//     return cb(name);
// }

// function greetName(name){
//     return `Hello ${name} good to see you!`;
// }

// console.log(cbExmaple("preetam", greetName))







// function addtwonumber(x,y){
//     console.log("this is only for printing data", x+y);
//     return (x+y)
    
// }
// let data = addtwonumber(12,12);
// console.log(data);

// In the above function if we only write addtwonumber(12,12) and only console.log is wwritten then it will only print 24, and if we put that function into a variable then we have to return the function in order to print it









//Fat arrow or lambda function

// let fnArrow = (a,b) => a+b;
// console.log(fnArrow(12,13));   //This is simple arrow function

// let fnArrow = (a,b) => {return a+b};
// console.log(fnArrow(12,13));    //This has curly braces so we have to write return because only in single line function we do not have to use curly braces








//Write a function which takes 3 parameter and sum two parameter and multiply last parameter - Print it as result and return only a,b value



// function addNumber(a,b,c){
//     console.log((a+b)*c);
    
//     return ((a+b)*c)
// }
// let data = addNumber(1,2,3)
// console.log(data);



// function sumOf3Num(a,b,c){
//     console.log(("printing", (a+b)*c));
//     return (a+b)
// }

// let data1 = sumOf3Num(1,2,3)
// console.log(data1);






//Write a function which takes a name(string) as a parameter and return length of name as value


// function printNameAndFunction(str){
//     console.log(str);
//     return str.length
    
// }
// let data2= printNameAndFunction("Pritam")
// console.log(data2);







// Make a function which return Sum of n numbers (5+4+3+2+1) and show the value as well


// function sumofN(n){
//     let sum =0;
//     for(let i=n; i>0; i--){
//         console.log(i);
//         sum += i;
        
//     }
//     return sum
// }
// console.log(sumofN(6));



//FACTORIAL

// function fact(n){
//     let factS = 1;
//     for(let i=n; i>0; i--){
//         factS *=i
//     }
//     return factS;
// }
// console.log(fact(3));



//Factorial (3*2*1*-1*-2*-3)


function fact(n){
    let factS= 1;
    for(let i=n; i >= -n; i--){
        if(i == 0){
            continue;
        }
        factS *= i
    }
    return factS;
}
console.log(fact(5));
