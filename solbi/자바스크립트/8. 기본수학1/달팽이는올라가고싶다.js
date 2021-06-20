// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const sample = `2 1 5`;
const input = sample.split(" ");

A = input[0];
B = input[1];
V = input[2];

// V - B는 총 올라가야할 거리 (정상에 닿으면 안 미끄러지므로 B를 하나 뺴주는 것)
// A - B는 하루동안 총 올라가는 거리
// 나누어 떨어지지 않는 수 (테스트)를 위해 ceil을 사용
console.log(Math.ceil((V - B) / (A - B)));
