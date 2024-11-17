//TO CHECK PRIME NUMBER

function checkNumber(n){
    for(let i =2; i<n; i++){
        if(n%i=== 0){
            console.log("Number is not prime")
            break;
        }else{
            console.log("Number is prime");
            break;
        }

    }
}checkNumber(9)

//------------------------------------------------------------------

//Loop

// for(let i =1; i<=10; i++){
//     console.log("This is outer loop", i)
//         for(let j=1; j<=3; j++){
//             console.log("This is inner loop", j)
//     }
// }

//__________________________________________________________________


//PATTERN LOOP

//Square

// let pattern = "";
// for (let i=1; i<=4 ; i++){
//     for(let j=1; j<=4; j++){
//         pattern +="* "
//     }
//     pattern +="\n";
// }
// console.log(pattern)

//_____________________________________________________________________

// Number

// let pattern = "";
// for (let i=1; i<=4 ; i++){
//     for(let j=1; j<=4; j++){
//         pattern += `${j}`
//     }
//     pattern +="\n";
// }
// console.log(pattern)

//__________________________________________________________________

//RIGHT TRIANGLE

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

//Reverse right triangle with * and numbers


// let num = 10;
// let pattern = "";
// if(num>1){
//     for(let i =10; i>=1; i--){
//         for(let j =1; j<=i; j++){
//             pattern+= `${j}`;
//         }
//         pattern +="\n"
//     }
//     console.log(pattern);
// }
// else{
//     console.log("no possible pattern")
// }

//pyramid
//--------

// function pyramid(){
//     let n=5;
//     let pattern = "";
//     for(let i=1; i<=n; i++){
//         for(let j=1; j<=n-i; j++){
//             pattern+=" "
//         }
//         for(let k =0; k<2*i -1; k++){
//             pattern +="*";
//         }
//         pattern +="\n"
//     }
//     console.log(pattern)
// }
// pyramid()

//REVERSE PYRAMID

// function pyramid() {
//     let n = 5;
//     let pattern = "";
//     for (let i = n-1; i >=1; i--) {
//         for (let j = 1; j <= n - i; j++) {
//             pattern += " "
//         }
//         for (let k = 0; k < 2 * i - 1; k++) {
//             pattern += "*";
//         }
//         pattern += "\n"
//     }
//     console.log(pattern)
// }
// pyramid()

//DIAMOND

// function pyramid() {
//     let n = 5;
//     let pattern = "";
//     for (let i = n-1; i >=1; i--) {
//         for (let j = 1; j <= n - i; j++) {
//             pattern += " "
//         }
//         for (let k = 0; k < 2 * i - 1; k++) {
//             pattern += "*";
//         }
//         pattern += "\n"
//     }
//     console.log(pattern)
// }
// pyramid()

// hollow square, hollow diamond, right angle traingle
