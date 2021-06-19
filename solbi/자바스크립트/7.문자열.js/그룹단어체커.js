// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const sample = `3
happy
new
year`;
const input = sample.split("\n");

let countGroup = 0;

for (let i = 1; i <= input[0]; i++) {
  let str = [];
  let word = input[i];
  let groupWord = true;
  for (let j = 0; j < input[i].length; j++) {
    if (str.indexOf(word[j]) === -1) {
      str.push(word[j]);
    } else {
      if (str.indexOf(word[j]) !== str.length - 1) {
        groupWord = false;
        break;
      }
    }
  }
  if (groupWord) {
    countGroup += 1;
  }
}

console.log(countGroup);
