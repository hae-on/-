// 입력 받아오기
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// vs code에서 실행하기
const sample = `1 2`; 
// split 따옴표 속은 위의 백틱 안 형식에 따라 달라진다.
const input = sample.split(' ');
// parseInt는 정수를 반환
const A = parseInt(input[0]);
const B = parseInt(input[1]);
console.log(A + B);
