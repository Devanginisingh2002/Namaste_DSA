"Function, if-else";

"Static and Dynamic";
/*
// static
    function greet(name) {
        console.log("Hello", name);
    }

    greet("Riya");

// dynamic
    function greet(name) {
        console.log("Hello", name);
    }
    let userName = "Riya";
    greet(userName);
*/

/*Addition 
    function sum(a,b){
        let add = a + b;
        console.log(add);
    }

    let x = 2;  // dynamic
    let y = 2;
    sum(7,2);
    sum(x,y);
*/

/*Square: Return the square of a number 
    function square(x){
        return x * x;
    }
    console.log(square(4));
*/

"if-else";
/*Create a function, eligible to vote or note 

function toVote(age) {
    if (age < 0) {
        console.log("Invalid");
    } else if(age < 18) {
        console.log("Not Eligible");
    } else {
        console.log("Eligible");
}
}
toVote(10);
toVote(-1);
toVote(20);
*/

/*Create fxn odd or even */

function oddEven(num){
    if(num%2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

oddEven(2);
oddEven(8);
oddEven(17);