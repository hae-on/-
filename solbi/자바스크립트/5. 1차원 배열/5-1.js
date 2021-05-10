// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `5
20 10 35 30 7`;
const input = sample.split("\n");

// map은 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환함.
let a = input[1].split(" ").map(Number); //[ 20, 10, 35, 30, 7 ]

let min = a[0]; //20
let max = a[0]; //20

for (let i = 1; i < input[0]; i++) {
  // a[2]=35 일 때 식 만족
  if (max < a[i]) {
    max = a[i];
  }
  // a[4]=7 일 때 식 만족
  if (min > a[i]) {
    min = a[i];
  }
}
console.log(max, min);
