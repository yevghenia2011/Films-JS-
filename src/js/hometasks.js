"use strict";

// *
// **
// ***
// ****
// *****
// ******

/* let result = "";
const length = 7;

for (let i=1; i<length; i++) {

    for (let j=0; j<i; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);
first: for (let i=0; i<3; i++) {
    console.log(`First level: ${i}`);
    for (let j=0; j<3; j++) {
        console.log(`Second level: ${j}`);
        for (let k=0; k<3; k++) {
            if (k===2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}
 */
// ЗАДАЧИ_УРОК 23_УСЛОВИЯ И ЦИКЛЫ
//1
/* let i=5;
do {
    console.log(i);
    i++;
}
while (i<11);
// 2
for (let i=20; i>9; i--) {
    console.log(i);
        if (i===14) break;
}
// 3
for (let i=2; i<11; i++) {
    if (i%2===0) {
    console.log(i);
    }
}
//4
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i=2;
do {
    if (i % 2 === 1){
    console.log(i);
    }
    i++;
}
while (i<17);

//5
const arrayOfNumbers = [];
    for (let i=5; i<11; i++) {
        arrayOfNumbers[i-5]=i;
    }
console.log(arrayOfNumbers);

//
function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}
 */
/* fifthTask()

// 1*
function firstTask(arr) {

    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i=0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result);
    return result;
} */

//2*
/* function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i=0; i < data.length; i++) {
    if (typeof(i)==="number") {
        data[i]=data[i]*2;
    } 
    else if (typeof(i)==="string") {
        data[i]=`${data[i] - done}`;
    }
}
    // Не трогаем
    console.log(data);
    return data;
}

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof(data[i]) === 'string') {
        data[i] = `${data[i]} - done`;
    }
}


//3*
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем ре0data.length; i>0; i--) {
        for (let i=1; i<data.length; i++) {
            result[i-1] = data[data.length-i];
    }
    
    // Не трогаем
    console.log(result);
    return result;
}
 */
// АСТЕРИКС ЁЛОЧКА
/* const lines = 5;
let result = "";

for (let i=0; i<=lines; i++) {
    for (let j=0; j<lines-i; j++) {
    result +="";
    }
for (let j=0; j<2*i+1; j++) {
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

/* let num = 20;

function showFirstMessage(text) {
    console.log(text);
     */
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

//Задачи (урок 22) 
//1*
/* const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i=0; i<arr.length; i++) {
    result[i] = arr[i];
}
console.log(result);
return result;

//2*
const data = [5, 10, 'Shopping', 20, 'Homework'];

for (i=0; i<data.length; i++) {

    if (typeof(data[i]) === "number") {
        data[i]=data[i]*2;
    }
    else if (typeof(data[i]) === "string") {
        data[i]=`${data[i]} -done`;
    }
}
 */
/* console.log(data);
return data;

//3*!!!!!!!!
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i=1; i<=data.length; i++) {
        result[i-1] = data[data.length - i];
    }
console.log(result);
return result; */

// ЗАДАЧА** "Ёлочка" 
/* const lines = 5;
let result = "";

for (let i=0; i<6; i++) {
    console.log("");
    if (i=6) {
        `${*}`;
    } 
    result+='\n';
}
console.log(result);
return result;
 */
//ЗАДАЧИ (Урок 27) Functions
//1
function sayHello(name) {
    return `Привет, ${name}!`;
}
sayHello("Антон");

//2
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(10);

//3
function getMathResult(num1, num2) {

        if (typeof(num2)!== "number" || num2 <= 0) {
        return num1;
        }
       
        let str="";

        for (let i=1; i<=num2; i++) {
            if (i===num2) {
                str += `${num1*i}`;
            }
            else {
                str += `${num1*i} ---`;
            }
            else {
    return str;
    }
}

// str += `${num1*i}---`
// ======
// str = str + num*i + "---"

getMathResult(5, 3);


// Задачи
// 7.1
function calculateVolumeAndArea(a) {
        if (typeof (a) !== "number" || a < 0 || !Number.isInteger(a)) {
            console.log("При вычислении произошла ошибка");
        }
        else {

    let str="";
/* 
        let V = ;
        let S = ; */
        str=`Объем куба: ${a*a*a}, площадь всей поверхности: ${a*a*6}`;
        console.log(str);
    }

}
calculateVolumeAndArea(8);

//7.2
function getCoupeNumber(p) {
    if (typeof (p) !== "number" || p < 0 || !Number.isInteger(p)) {
        console.log("Ошибка. Проверьте правильность введенного номера места");
    }
    if (p===0 || p>36) {
        console.log("Таких мест в вагоне не существует");
    } 
    if (p>0 && p<5) {
        console.log(1);
        return 1;
    }
    if (p>4 && p<9) {
        return 2;
    }
    if (p>8 && p<13) {
        return 3;
    }
    if (p>11 && p<17) {
        return 4;
    }
    if (p>15 && p<21) {
        return 5;
    }
    if (p>19 && p<37) {
        return 6;
    }
    if (p>23 && p<29) {
        return 7;
    }
    if (p>27 && p<33) {
        return 8;
    }
    if (p>31 && p<37) {
        return 9;
    }
}

getCoupeNumber(88);

/* return Math.ceil(seatNumber / 4); */

// 8.1
function getTimeFromMinutes(a) {
    if (typeof (a) !== "number" || a < 0 || !Number.isInteger(a)) {
        console.log("Ошибка, проверьте данные");
    }
   const hours = Math.floor(a/60);
   const minutes = a % 60; 
   
   let hourStr="";
   switch (hours) {
    case 0: 
        hoursStr = 'часов';
        break;
    case 1:
        hoursStr = 'час';
        break;
    case 2:
    case 3:
    case 4:
        hoursStr = 'часа';
        break;
    default:
        hoursStr = 'часов';
    }
    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
    }
}

getTimeFromMinutes(120);

// 8.2
function findMaxNumber(a, b, c, d) {
    if (typeof (a) !== "number" ||
        typeof (b) !== "number" || 
        typeof (c) !== "number" || 
        typeof (d) !== "number") {
        return 0; 
    } else {
        console.log (Math.max(a, b, c, d));
    }
}

findMaxNumber(35, 880, 100, 120);
// 9

//10.1)2)3) Задача

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = "";

    arr.length === 0 ? str = `Семья пуста` : str = `Семья состоит из: `;

    arr.forEach(member => {
        str +=` ${member}`
    });
    console.log(str);
}
showFamily(family);

/* => 'Семья состоит из: Peter Ann Alex Linda' */

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);

// REVERSE
const someString = "This is some strange string";

function reverseStr(str) {

    if (typeof(str) !== "string") {
    console.log="Ошибка!";
    }

    console.log(str.split("").reverse().join(""));
 }

reverseStr(someString);
 
let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

const soldjer = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};
const john = Object.create(soldjer);

// const john = {
//   health: 100
//};
//Object.setPrototypeOf(john, soldjer);
// ohn.__proto__ = soldjer;

console.log(john.armor);
john.sayHello();

// ФАКТОРИАЛ

function factorial(n) {
    if (!Number.isInteger(n) || typeof(n) !== "number") {
        return "Error!";
    } 
    if (n<=0) {
        return 1;

    } else {
        return n*factorial(n-1);
    }
};

console.log(factorial(3));