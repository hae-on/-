// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `2
6 12 10
30 50 72`;
const input = sample.split("\n");

for (let i = 1; i <= input[0]; i++) {
  let col = input[i].split(" ");
  const H = col[0];
  const W = col[1];
  const N = col[2];

  let floors = N % H;
  floors === 0 ? H : floors;

  let rooms = Math.ceil(N / H);
  rooms = rooms < 10 ? "0" + rooms : rooms;

  console.log(`${floors}${rooms}`);
}
