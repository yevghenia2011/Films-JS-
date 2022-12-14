"use strict";

// *
// **
// ***
// ****
// *****
// ******
/* 
let result = "";
const length = 7;

for (let i=1; i<length; i++) {

    for (let j=0; j<i; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result); */
/* 
first: for (let i=0; i<3; i++) {
    console.log(`First level: ${i}`);
    for (let j=0; j<3; j++) {
        console.log(`Second level: ${j}`);
        for (let k=0; k<3; k++) {
            if (k===2) break first;
            console.log(`Third level: ${k}`);
        }
    }
} */

// ЗАДАЧИ_УРОК 23_УСЛОВИЯ И ЦИКЛЫ
// 1
/* let i=5;
do {
    console.log(i);
    i++;
}
while (i<11); */
// 2
/* for (let i=20; i>9; i--) {
    console.log(i);
        if (i===13) break;
} */
// 3
/* for (let i=2; i<11; i++) {
    if (i%2==0) {
    console.log(i);
    }
} */
//4
/* for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
} */


//5
/* const arrayA = [];

    for (i=5; i<11; i++) {
        arrayA[i-5]=i;
    }

console.log(arrayA);
return arrayA;

let num = 20;

function showFirstMessage(text) {
    console.log(text); */
 /*    let num = 10; */
/*     console.log(num);
}

showFirstMessage("The World is mine!");
console.log(num); */

/* function calc(a, b) {
    return  (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6)); */

/* function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret ();
console.log(anotherNum);


const logger = function() {
    console.log("Hello");
};

logger(); */

/* const calc = (a,b) => {return a+b};

const calc = (a, b) => {
    console.log("1");
    return a + b;
};

const usdCurr = 30;
const eurCurr = 34;
const discount = 0.9;

function convert(amount, curr) {
    return (curr*amount);
    
} */
/* 
function promotion(result) {
    console.log(result * discount); */
/*     return function(){} */
/* }
 */
/* const res = convert(500, usdCurr);
promotion(res); */


