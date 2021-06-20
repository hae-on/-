// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `14`;
const input = sample.split(" ");

// 첫 줄 ( 1 / 1 )
let value = 1;
let num = Number(input);

while (true) {
  num -= value;
  if (num <= 0) {
    num += value;
    break;
  }
  value++;
}
// value는 5번쨰 (대각선 기준)
// num은 4번째 칸

if (value % 2 === 1) {
  console.log(`${value - (num - 1)}/${1 + (num - 1)}`);
} else {
  console.log(`${1 + (num - 1)}/${value - (num - 1)}`);
}
