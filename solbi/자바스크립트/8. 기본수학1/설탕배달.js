// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let sample = `11`;
let input = sample.split(" ");

let cnt = 0;

while (true) {
  // 5kg이 가장 큰 봉지니까 5로 나눠줄 만큼 나눠주어야 한다
  // 규칙을 살펴보면 5로 나누어떨어지기 전까지(나머지가 0일 때까지) 돌리고 나누어 떨어졌을 떄의 input값 / 5와 cnt값을 합치면 답이 출력된다
  if (input % 5 === 0) {
    console.log(input / 5 + cnt);
    break;
  }
  //   계속 돌다가 input이 음수가 되는 경우 계산불가이므로 -1를 출력한다
  if (input < 0) {
    console.log(-1);
    break;
  }
  cnt++;
  input -= 3;
}
