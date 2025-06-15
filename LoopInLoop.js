"Loop in Loop"
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         console.log("first", i, j)
//     }
// }

// for(let i=0; i<3; i++){
//     for(let j=0; j<i; j++){
//         console.log(i, j);
//     }
// }

// for(let i=0; i<5; i++){
//     for(let j=0; j<=i; j++){
//         console.log(i, j);
//     }
// }

//6
// for(let i=0; i<3; i++){
//     for(let j=i; j>0; j--){
//         console.log(i, j);
//     }
// }

//7
for(let i=5; i>0; i--){
    for(let j=0; j<i; j++){
        console.log(i, j);
    }
}