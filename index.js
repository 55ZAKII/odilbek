// var str1 = 'cola'
// var str2 = 'fanta'

// str3 = str1
// str1 = str2
// str2 = str3

// console.log(str2);

// console.log(str1);

///////////////////////////////////////////

output : var yil = 2020
input : 'kabisa yili'

output : yil = 2017
input : 'kabisa yili emas'

function kobasi(yil) {
    if (yil === '2020') {
        console.log('kabisa yili');
        return 2020;
    } else {
        console.log('kabisa yili emas');
        return yil;
    }
}

console.log(kobasi(yil));

/////////////////////////////////////////////

function betterThanAverage(classPoints, yourPoints) {

}

////////////////////////////////////////////////

const toUpperCase = (name) => {
    let res = name.split('')
    result = res.filter((val) => {
        return val == val.toUpperCase()
    }).join('')
    return result 
}

const name = 'WebBraInAcademy'
console.log(toUpperCase(name));