// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `3
40 80 60`;
const input = sample.split("\n");

let score = input[1].split(" ");
//score[0];40
//score[1];80
//score[2];60

//최대값을 구하는 함수
let max = Math.max(...score); //80

let sum = 0;

for (let i = 0; i <= input[0] - 1; i++) {
  sum += (score[i] / max) * 100; //50 150(50+100) 225(150+75)
  //값 225 출력
}

// 소수점 2번째 자리까지 출력
let answer = (sum / input[0]).toFixed(2);
console.log(answer);
