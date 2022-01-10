// define a Number array
// Using Array<T> generic class

let numbers:Array<number> = [10,20,30,40,50];
console.log(`Array =  ${numbers}`);
numbers.push(60);
console.log(`Array =  ${numbers}`);
console.log(`Popped value = ${numbers.pop()}`);
console.log(`Removing First number from left ${numbers.shift()}`);
console.log(`Adding New Number at First index from left, sop new length will be ${numbers.unshift(100)}`);
console.log(`Array =  ${numbers}`);

console.log(`Array.sort =  ${numbers.sort()}`);

let sortNumbers = numbers.sort(function(a,b){
     return a - b;
});
console.log(`Array.sort with logic =  ${sortNumbers}`);
let reverseNumbers = numbers.reverse();
console.log(`Array.reverse with logic =  ${reverseNumbers}`);

let names:Array<string> = ['Mahesh', 'Tejas', 'Ramesh', 'Ram', 'Sabnis'];
console.log(`Array =  ${names}`);
// using the Arrow Operator

let sortedNames = names.sort((a,b)=>{
    return a.length - b.length;
});
console.log(`Array String Sorting with Length=  ${sortedNames}`);

// Using The Union Types
let value:number|string;
value = 100;
console.log(`Value = ${value} and Type of value = ${typeof(value)}`);
value = "100";
console.log(`Value = ${value} and Type of value = ${typeof(value)}`);

let values:Array<number> | Array<string>;
values = [10,20]; // Numbers
console.log(`Values = ${values} and Type of values = ${typeof(values)}`);
values =['A','B']; // String
console.log(`Values = ${values} and Type of values = ${typeof(values)}`);

function processData(inputs:Array<number> | Array<string>){
    let result: any;
    let sum:number = 0;
    inputs.forEach((v,i)=>{
        if(typeof(v) === 'number'){
            sum += v;
        } 
        if(typeof(v) === 'string'){
            result += `Concat.... ${v.toUpperCase()}`;
        }
    });
 
    console.log(`With Number Sum ${sum}`);
    console.log(result);
}

let inputValue:Array<number> = [10,20,30,40,50];
processData(inputValue);
processData(['A', 'B', 'C', 'D', 'E']);