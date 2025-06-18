"Star Patterns";
"Print these pattern questions";

/* 1.
* * * *
* * * *
* * * *
* * * *
    for(let i=0; i<4; i++){
        let row = " ";
        for(let j=0; j<4; j++){
            row = row + "*";
        }
        console.log(row);
    }
*/

/* 2.
* 
* * 
* * * 
* * * *
    for(let i=0; i<4; i++){
        let row = "";
        for(let j=0; j<i+1; j++){
            row += "* ";
        }
        console.log(row);
    }
*/

/* 3.
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
    for (let i = 0; i < 5; i++) {
        let row = " ";
        for (let j = 0; j <= i; j++) {
            row = row + (j+1);
        }
        console.log(row);
    }
*/

/* 
1 
2 2
3 3 3
4 4 4 4
5 5 5 5 
for(let i=0; i<=5; i++){
    let row = " ";
    for(let j=0; j<=i; j++){
        row = row + (i+1);
    }
    console.log(row + " ");
}
*/

/* 
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
for (let i = 0; i <= 5; i++) {
    let row = "";
    for (let j = 0; j<=5-i; j++) {
        row = row + (j+1);
    }
    console.log(row);
}
*/

/* 
* * * * *
* * * *
* * *
* *
*

for(let i=0; i<=5; i++){
    let row = " ";
    for(let j=0; j<=5-i; j++){
        row = row + "*";
    }
    console.log(row);
}
*/

/* 
           *        
        *  *
     *  *  *
  *  *  *  *
* *  *  *  *
let n = 5;
for(let i=0; i<=n; i++){
    let row = "";
    // adding spaces
    for(let j=0; j < n-(i+1); j++){
        row = row + ".";
    }
    // adding stars
    for(let k=0; k < i+1; k++){
        row = row + "*";
    }
    console.log(row);
}
*/

/* 
1 
1 0  
1 0 1
1 0 1 0
1 0 1 0 1
for(let i=0; i<=4; i++){
    let row = "";
    let switch_variable = 1;
    
    for(let j=0; j<=i; j++){
        row = row + switch_variable;
        
        if(switch_variable == 1){
            switch_variable = 0
        } else {
            switch_variable = 1;
    }
}
console.log(row);
}
*/

/*
1 
0 1
0 1 0
1 0 1 0
1 0 1 0 1
 */

let switch_variable = 1;
for(let i=0; i<=4; i++){
    let row = "";    
    for(let j=0; j<=i; j++){
        row = row + switch_variable;
        if(switch_variable == 1){
            switch_variable = 0
        } else {
            switch_variable = 1;
    }
}
console.log(row);
}