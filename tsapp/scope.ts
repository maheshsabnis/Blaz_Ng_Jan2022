 function performVar(x:boolean){
     if(x) {
         var y = 10;
         console.log(`In if condition y = ${y}`);
     } 
     console.log(`Out of if condition y = ${y}`);
 }

 performVar(true);
 performVar(false);

 function performLet(x:boolean){
    if(x) {
        let y = 10;
        console.log(`In if condition y = ${y}`);
    } 
    console.log(`Out of if condition y = ${y}`);
}

performLet(true);
performLet(false);