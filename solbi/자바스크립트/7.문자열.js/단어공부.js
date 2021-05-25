// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().toLowerCase();

const sample = `zZa`;
const input = sample.toLowerCase();
const arr = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  arr[input.charCodeAt(i) - 97]++;
}

const max = Math.max(...arr);
const index = arr.indexOf(max);
let isSame = false;

console.log(max); //2
console.log(arr); //[
//1, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 0, 0, 0, 0, 0,
// 0, 2
//]
console.log(index); //25 (= z)

for (let k = 0; k < 26; k++) {
  if (arr[k] == max && index != k) {
    //
    isSame = true;
    break;
  }
}
console.log(isSame ? "?" : String.fromCharCode(index + 65));
