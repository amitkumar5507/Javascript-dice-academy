// function minus(n){
//     while(n>0){
//         console.log(n);
//         n--;
//     }
// }
// minus(10);


// function abc(n){
//     while(n>0){
//         console.log(n)
//         n-=2;
//     }
// }
// abc(10)


//Do while loop


// let i= 11;
// do{
//     console.log(i);
//     i--;
// }while(i<10);

//FOR LOOP


// let i=10;
// for(let i=0; i<=10; i++){
//     console.log(i);
// }


//Nested loop

// for(let i=0; i<=5; i++){
//     console.log("outer loop value", i);
//     for(let j=1; j<=5; j++){
//         console.log("inner loop", j)
//     }
// }
// console.log("complete loop iteration")

//To make a square now

// for(let i=1; i<=5; i++){
//     let row = `${i}`;
//     for(let j=1; j<=15; j++){
//         row +="* "
//     }
//     console.log(row)
// }


//THIS IS FOR TRIANGLE

// let num = 10;
// let pattern = "";
// if(num>1){
//     for(let i =1; i<=num; i++){
//         for(let j =1; j<=i; j++){
//             pattern+="* ";
//         }
//         pattern +="\n"
//     }
//     console.log(pattern);
// }
// else{
//     console.log("no possible pattern")
// }

//FOR HOLLOW PATTERN

let num = 10;
let pattern = "";
if(num>1){
    for(let i =1; i<=num; i++){
        console.log(i);
        
        for(let j=1; j<=i; j++){
            console.log(j);

            if(j==1 || i==j || i==num){
                pattern+="* "
            }
            else{
                pattern+=" ";
            }
        }
        pattern += "\n"
    }
    console.log(pattern);
}
