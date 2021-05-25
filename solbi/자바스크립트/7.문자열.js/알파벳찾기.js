// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('');

const sample = `baekjoon`;
const input = sample.toString().split("");

// 배열로 만들지 않으면 답이 세로로 길게 출력됨 따라서 배열로 만든 후 join을 통해 가로의 긴 문자열로 출력
let result = [];

// a가 97 z가 122
for (let i = 97; i <= 122; i++) {
  // String.fromCharCode(i) 출력 시 알파벳 전체 출력
  // indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
  result.push(input.indexOf(String.fromCharCode(i)));
}
// join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
// join을 사용하지 않으면 배열 형태로 나옴
console.log(result.join(" "));
