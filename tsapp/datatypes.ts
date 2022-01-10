// Number declarations

let n1 = 100; // implicit to number type based on R.H.S.
console.log('Type of n1 = ' + typeof(n1) +   '  and value of n1  =' + n1);
let n2:number = 200; // Explicit DataType 
console.log('Type of n2 = ' + typeof(n2) +   '  and value of n1  =' + n1);

let n3;
n3 = 10;
console.log('Type of n3 = ' + typeof(n3) +   '  and value of n3  =' + n3);
n3 = 'Mahesh';
console.log('Type of n3 = ' + typeof(n3) +   '  and value of n3  =' + n3);

let n4:string = 'James Andrew Bond';
console.log('Type of n4 = ' + typeof(n4) +   '  and value of n4  =' + n4);

// Interpolation of String aka Template String
let firstName: string = 'James';
let middleName: string = 'Andrew';
let lastName: string  = 'Bond';

let fullName = `${firstName} ${middleName} ${lastName}`;
console.log(`Full Name = ${fullName}`);






