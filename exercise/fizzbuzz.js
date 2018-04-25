function fizzBuzz(){
    let result = "";
    for(let n=1;n<=100;n++){
        if(!(n % 3)){
            if(!(n % 5)){
                result += "FizzBuzz";
            }else{
                result += "Fizz";
            }
        }else if(!(n % 5)){
            result += "Buzz";
        }else{
            result += n;
        }
        result+=" ";
        if(!(n % 5)){
            result+='\n';
        }
    }
    console.log(result);
}
fizzBuzz();