// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const sample = `0 30`; 
const input = sample.split(' ');

// 값에 변화가 있기 때문에 const 사용 x
let a = parseInt(input[0]);
let b = parseInt(input[1]);

b -= 45;

if (b < 0) {
    b += 60;
    a --;

    if(a ===-1){
        a=23;
    }
    
} 
console.log(a +' '+ b);