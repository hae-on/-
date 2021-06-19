// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `1000 70 170`;
const input = sample.split(" ");

A = input[0];
B = input[1];
C = input[2];

const margin = C - B;
// 손익분기점을 넘어서는 판매량을 구해야하기에 +1 해준다
const breakEvenPoint = Math.floor(A / margin) + 1;

// 손익분기점이 존재하지 않는 경우 음수로 출력된다
console.log(margin > 0 ? breakEvenPoint : -1);
