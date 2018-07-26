//numeros javascript
var x = 3.14
console.log(typeof x)
 x = 123e5
console.log( x)
x = 123e-5
console.log(x)
console.log( typeof Infinity)
x = 0xff;//hexadecimal
console.log(x)
var number = 32
console.log(number.toString(10))
console.log(number.toString(16))
console.log(number.toString(8))
console.log(number.toString(2))
console.log(number.toString(32))
x = 123;
var y = new Number(123)
console.log(typeof Number)
//metodo tostring devueelve un numero como cadena
console.log(x.toString())
//metodo toexponential devuelve una cadena redondeada en notacion exponecial
console.log(x.toExponential(2))
console.log(x.toExponential(4))
console.log(x.toExponential(6))
//tofixed devuelve cadena, con la cantidad de decimal especificada
x = 9.656//se utiliza para trabajar con dinero
console.log(x.toFixed(0))
console.log(x.toFixed(2))
console.log(x.toFixed(4))
console.log(x.toFixed(6))
//toprecision()devuelve una cadena, con la logitud especisifica
console.log(x.toPrecision())
console.log(x.toPrecision(2))
console.log(x.toPrecision(4))
console.log(x.toPrecision(6))
//valueof devuelve un numero como numero
x = 123 
console.log(x.valueOf())
console.log((123).valueOf())
console.log((100+23).valueOf())
//metodo number()puede convertir variable a numeros
console.log(Number(true))
console.log(Number(false))
console.log(Number('10'))
console.log(Number('       20'))
console.log(Number('12       '))
console.log(Number('10 20'))
console.log(Number('john'))
console.log(Number(new Date('2018-09-30')))
//metodo parseInt() analiza la cadena y devuelve un numero entero
//en caso de espacios solo devuelve el primer numero
console.log(parseInt('10'))
console.log(parseInt('10.33'))
console.log(parseInt('10 20 30'))
console.log(parseInt('10 year'))
console.log(parseInt('years 10'))
//parsefloat()analiza una cadena y devuelve un numero. los espacios estan permitidos
//solo devuelve el primer numero 
console.log(parseFloat('10'))
console.log(parseFloat('10.33'))
console.log(parseFloat('10 20 30'))
console.log(parseFloat('10 year'))
console.log(parseFloat('year 10'))
//propiedades numericas

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.NaN)
console.log(Number.POSITIVE_INFINITY)