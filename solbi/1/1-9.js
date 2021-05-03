// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const sample = `7 3`; 
const input = sample.split(' ');
const A = parseInt(input[0]);
const B = parseInt(input[1]);
console.log(A + B);
console.log(A - B);
console.log(A * B);
// 몫을 구하기 위해서 math.floor를 이용해 나머지를 날려준다. (주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.-mdn)
console.log(Math.floor(A / B));
console.log(A % B);