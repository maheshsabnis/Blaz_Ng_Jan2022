function performVar(x) {
    if (x) {
        var y = 10;
        console.log("In if condition y = ".concat(y));
    }
    console.log("Out of if condition y = ".concat(y));
}
performVar(true);
performVar(false);
function performLet(x) {
    if (x) {
        var y = 10;
        console.log("In if condition y = ".concat(y));
    }
    console.log("Out of if condition y = ".concat(y));
}
performLet(true);
performLet(false);
