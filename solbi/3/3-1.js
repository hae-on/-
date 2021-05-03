// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let sample = `2`;
let input = sample.split(" ");

let A = parseInt(input[0]);

// for([초기문]; [조건문]; [증감문])
for (let i = 1; i < 10; i++) {
  console.log(`${A} * ${i} = ${A * i}`);
}
