// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const sample = `472 385`; 
const input = sample.split(' ');
const A = parseInt(input[0]);
const B = parseInt(input[1]);

// A와 B의 일의 자리, A와 B의 십의 자리, A와 B의 백의 자리의 곱셈
const oneseat = ( B % 10 );
const tenseat = Math.floor(( B % 100 )/10);
const hundredseat = Math.floor( B / 100 );

const result1 = oneseat * A;
const result2 = tenseat * A;
const result3 = hundredseat * A;
const result = result3*100+result2*10+result1;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result);