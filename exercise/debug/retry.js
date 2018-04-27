class MultiplicatorUnitFailure extends Error { };
function primitiveMultiply(a, b) {
    let percent = Math.random();
    if (percent <= 0.2) {
        console.log(a * b);
    } else {
        throw new MultiplicatorUnitFailure("Failed to multiply");
    }
}

function tryMultiply(a, b) {
    try{
        primitiveMultiply(a, b);
    } catch(e) {
        if (e instanceof MultiplicatorUnitFailure) {
            tryMultiply(a, b);
        }
    }
}
tryMultiply(1, 2);