"use strict";

// let x=5; alert(x++);

function calculateVolumeAndArea(l) {
    let str = "";

    if (typeof(l)!=="number" || l<=0 || !Number.isInteger(l)) {
        str = "При вычислении произошла ошибка";
    } else {
        str = `Объем куба: ${l*l*l}, площадь всей поверхности: ${6*l*l}`;
    }
        
    console.log(str);
    return str;
}
     
calculateVolumeAndArea(15.5);

function getCoupeNumber(numero) {
    let result="";
    if (typeof(numero)!=="number" || numero<0 || !Number.isInteger(numero)) {
        result = "Ошибка. Проверьте правильность введенного номера места";
    }
    else if (numero===0 || numero>36) {
        result="Таких мест в вагоне не существует";
    }
    else {
        result = numero/4;
    }
    console.log(Math.ceil(result));
    return result;
}

getCoupeNumber(300);

//

// Место для первой задачи
function getTimeFromMinutes(a) {
    let result="";
    if (typeof(a)!=="number" || a<0 || !Number.isInteger(a)) {
        console.log("Ошибка, проверьте данные");
        result="Ошибка, проверьте данные";
        return result;
    }
    const hours = Math.floor(a/60);
    const minutes = a%60;
    let hoursStr="";

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
    result=`Это ${hours} ${hoursStr} и ${minutes} минут`;
    console.log(result);
    return result;
}
getTimeFromMinutes(584);

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if(typeof(a)!=="number" || typeof(b)!=="number" || typeof(c)!=="number" || typeof(d)!=="number") {
        console.log(0);
        return 0;
    }
    else {
        console.log(Math.max(a, b, c, d));
        return Math.max(a, b, c, d);
    }
}

findMaxNumber(1, 5, "6", "10");