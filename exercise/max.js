function max(...numbers){
    let result = -Infinity;
    for(let number of numbers){
        if(number > result) number = result;
    }
    return result;
}