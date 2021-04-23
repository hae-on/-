// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const sample = `100`; 
const input = sample.split(' ');

const A = parseInt(input[0]);

if (100>=A && A>=90) {
    console.log('A')
} else if (89>=A && A>=80){
    console.log('B')
} else if (79>=A && A>=70) {
    console.log('C')
} else if (69>=A && A>=60) {
    console.log('D')
} else 
    console.log('F')

