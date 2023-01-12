const strA = "test";
console.log(str.length);

const arr = [1, 2, 4];
console.log(arr.length);

console.dir(Number);

const str = "test";
console.log(str[2]);

const str = "test";
console.log(str.toUpperCase());

let fruit = "Some fruit";
console.log(fruit.indexOf("q"));

const logg = "Hello world";
console.log(logg.slice(-5, -1));

const logg = "Hello world";
console.log(logg.substring(3, 6));

const logg = "Hello world";
console.log(logg.substr(3, 6));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
/* console.log(parseInt(test)); */
console.log(parseFloat(test));

// 32
const obj = New Object(); 

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function() {
        console.log("Test");
    }  
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length);
console.log(options ["colors"] ["border"]);

/* console.log(options.name); */

/* delete options.name;
console.log(options); */

let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === "object") {
        for (let i in options[key]) {
        console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);
        }
    } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
    }
}
console.log(counter);

const arr = [1, 2, 3, 6, 8];

arr.forEach(function(item, i, arr) {
    console.log(`${i} :${item} внутри массива ${arr}`);
});

arr[99] = 0;
console.log(arr.length);
console.log(arr);

console.log(arr.length);

/* arr.pop();
arr.push(10); */

/* console.log(arr); */

for (let value of arr) {
    console.log(value);
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const str = prompt ("", "");
const products = str.split("", "");
products.sort();
console.log(products.join(""; ""));

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a-b;
}

/* let a=5,
    b=a;

b=b+5;

console.log(b);
console.log(a); */

/* const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj); */

function copy(mainObj) {
    let objCopy = {};
    let key;

    for (key in mainObj) {
        objCopy[key]=mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(numbers);
console.log(newNumbers);

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "adasadasa";

console.log(newArray);
console.log(oldArray);

const video = ["youtube", "vimeo", "rutube"],
        blogs = ["wordpress", "livejournal", "blogger"],
        internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAaray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(newObj);

// 1
console.log(typeof(String(null)));
console.log(String(null));
console.log(typeof(String(4)));

//2
console.log(typeof(null + ""));

const num = 5;

console.log("http://vk.com/catalog/" + num);

const fontSize = 26 + "px";

console.log(typeof(Number("4")));

console.log(typeof(+"4"));

console.log(typeof(parseInt("15px", 10)));

let answer = +prompt("Hello", "");

// to boolean

0, "", null, undefined, Nan;



let switcher = null;

if (switcher) {
    console.log("Working...");
}

switcher = 1;

if (switcher) {
    console.log("Working...");
}

if (switcher) {
    console.log("Working...");
}
// 2)
console.log(typeof(Boolean("4")));

// 3)

console.log(typeof(!!"44444"));

/* let number = 5; debugger

function logNumber() {
    let number = 4; debugger
    console.log(number);
}

number=6;

logNumber(); debugger */

function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

// РЕКУРСИЯ 

function pow(x, y) {
    let result = 1;

    for (let i=0; i<n; i++) {
        result *=x;
    }
    return result;
};

function pow(x, y) {
  if (n===1) {
    return x;
  } else {
    return x*pow(x, n-1);
  }
};

const lines = 5;
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

console.log(result);
