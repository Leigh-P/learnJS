function repeat(n,action){
    for(let i=0;i<n;i++){
        action(i);
    }
}

function greaterThan(n){
    return m => m > n;
}