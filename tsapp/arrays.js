// define a Number array
// Using Array<T> generic class
var numbers = [10, 20, 30, 40, 50];
console.log("Array =  ".concat(numbers));
numbers.push(60);
console.log("Array =  ".concat(numbers));
console.log("Popped value = ".concat(numbers.pop()));
console.log("Removing First number from left ".concat(numbers.shift()));
console.log("Adding New Number at First index from left, sop new length will be ".concat(numbers.unshift(100)));
console.log("Array =  ".concat(numbers));
console.log("Array.sort =  ".concat(numbers.sort()));
var sortNumbers = numbers.sort(function (a, b) {
    return a - b;
});
console.log("Array.sort with logic =  ".concat(sortNumbers));
var reverseNumbers = numbers.reverse();
console.log("Array.reverse with logic =  ".concat(reverseNumbers));
var names = ['Mahesh', 'Tejas', 'Ramesh', 'Ram', 'Sabnis'];
console.log("Array =  ".concat(names));
// using the Arrow Operator
var sortedNames = names.sort(function (a, b) {
    return a.length - b.length;
});
console.log("Array String Sorting with Length=  ".concat(sortedNames));
// Using The Union Types
var value;
value = 100;
console.log("Value = ".concat(value, " and Type of value = ").concat(typeof (value)));
value = "100";
console.log("Value = ".concat(value, " and Type of value = ").concat(typeof (value)));
var values;
values = [10, 20]; // Numbers
console.log("Values = ".concat(values, " and Type of values = ").concat(typeof (values)));
values = ['A', 'B']; // String
console.log("Values = ".concat(values, " and Type of values = ").concat(typeof (values)));
function processData(inputs) {
    var result;
    var sum = 0;
    inputs.forEach(function (v, i) {
        if (typeof (v) === 'number') {
            sum += v;
        }
        if (typeof (v) === 'string') {
            result += "Concat.... ".concat(v.toUpperCase());
        }
    });
    console.log("With Number Sum ".concat(sum));
    console.log(result);
}
var inputValue = [10, 20, 30, 40, 50];
processData(inputValue);
processData(['A', 'B', 'C', 'D', 'E']);
