function findSolution(target){
    function find(current,target){
        if(current == target){
            return history;
        } else if(current > target) {
            return null;
        }else{
            return find(current+5,`(${target}+5)`) ||
            find(current * 3, `(${history} * 3)`)
        }
    }
    return find(1,"1");
}
// if it returns null which means the solution is wrong, it goes back to the first call.