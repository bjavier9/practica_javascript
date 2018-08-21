//tipos de operadores
function type(x){
    return console.log(typeof x)
}
let fruits = ['papaya','aguacate','piña','melon']
type('jhon');
type(fruits)
type(NaN)
type(3.14)
type(false)
type({name:'jhon', age:34})
type(new Date())
type(function(){})
type(1)
type(null)
function construc(y){
    return console.log(y.constructor)
}
construc('james')
construc(fruits)
construc(function(){})
construc(new Date())
construc(3.14)
construc(false)
construc({name: 'javier', age: 12})

function arry(x){
    return x.constructor.toString().indexOf('Array')>-1
}
console.log(arry(fruits))

function arre(x){
    return x.constructor === Array
}
console.log(arre(fruits))
console.log(arre({name:'jose',age:21}))
function dt(x){
    return x.constructor.toString().indexOf('Date')>-1
}
console.log(dt(new Date()))
console.log(String(123))
console.log(String(19+12))

//esta funcion averigua si es lo que se pide
function avr(x, y){
   return x.constructor.toString().indexOf(y)>-1
    }

    console.log(avr(new Date(), 'Date'))
    console.log(avr({name:'jav', age:18},'Object'))
    console.log(avr(function(){},'Function'))
    console.log((true).toString())
    console.log(Date().toString())
    console.log(new Date().getMinutes().toString())
    console.log(Number('3.13'))
    console.log(Number(''))
    console.log(Number(true))
    console.log(Number(false))
    console.log(parseFloat(43.2))
    console.log(parseInt(34.6))

    //expresiones regulares
    let txt = `En JavaScript, las expresiones regulares a menudo se usan con los dos métodos de cadena : search () y replace ().

    El método search (W) 345 xtr usa una expresión para buscar una coincidencia y devuelve la posición de la coincidencia.
    
    El método replace () devuelve 245 una cadena modificada donde se reemplaza el patrón.`
    console.log(txt.search(/xtr/i))
    let k = txt.replace(/xtr/i,'hola')
    console.log(k)
    console.log(/e/.test(txt))
    console.log(txt.match(/\d/g))
    console.log(txt.match(/[a]/g))
    console.log(txt.match(/[1-4]/g))
    console.log(txt.match(/(las|el)/g))
    console.log(txt.match(/\s/g))
    console.log(txt.match(/usa/g))
    console.log(txt.match(/\u0057/g))
    console.log(txt.match(/o+/g))
    console.log(txt.match(/una*/g))
    console.log(txt.match(/34?/g))
    console.log(/e/.exec(txt))