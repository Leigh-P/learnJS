function printFarmInventory(cows,chickens){
    let cowString = String(cows);
    while(cowString.length < 3){
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while(chickens.length < 3){
        cowString = "0" + cowString;
    }
    console.log(`${chickenString} Chickens`);
}

function printZeroPaddedWithLabel(number,label){
    let numberString = String(number);
    while(numberString.length < 3){
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`)
}

function printFarmInventory(cows,chickens){
    printZeroPaddedWithLabel(cows,"Cows");
    printZeroPaddedWithLabel(chickens,"Chickens");
}

function zeroPad(number,width){
    let string = String(number);
    while(string.length < width){
        string = "0" + string;
    }
    return string;
}