let diementional=[[1,2,3],[4,5,6],[7,8,9],
                [1,2,3],[4,5,6],[7,8,9]];

for(let x of diementional){
    console.log(x, typeof x);
    for(let y of x){
        console.log(y,typeof y);
    }
}
