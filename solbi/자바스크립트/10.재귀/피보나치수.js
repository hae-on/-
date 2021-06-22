// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `10`;
const input = sample.split(" ");

function fibonacci(input) {
  if (input < 2) {
    //   Number를 하지 않으면 배열 형태로 출력됨
    return Number(input);
  } else {
    return fibonacci(input - 1) + fibonacci(input - 2);
  }
}
console.log(fibonacci(input));
