//valores predeterminado 
function my(x, y = 10){
    return x+y
}
console.log(my(5))

// array. find() devuelve  el primer elemento de una matriz
var numbers = [1,2,3,4,56,6,7,8,99,987,2]
function sfind(value, index, array){
    return value > 18
}
var first = numbers.find(sfind)
console.log(first)

// array find index devuelve elindice del primer elemento 
function mfindindex(value, index, array){
    return value > 18
}
var r = numbers.findIndex(mfindindex)
console.log(r)
// propiedades al objeto number
var x = Number.EPSILON
console.log(x)

var y = Number.MIN_SAFE_INTEGER
console.log(y)

var k = Number.MAX_SAFE_INTEGER
console.log(k)

/// nuevos metodos numericos
// number.isInteger() devuelve verdadero si el argumento es un numero entero 
console.log(Number.isInteger(19))
console.log(Number.isInteger(19.2))
//safeinteger si un numero es examctamente como un numero de precision doblecon
console.log(Number.isSafeInteger(10))
console.log(Number.isSafeInteger(1343457890987654320))
// isfinite retorna falso si el argumento es infinito o nan
console.log(isFinite(10/0))
console.log(isFinite(10/1))
// isnan devuelve verdadero si el argumento es nan
console.log(isNaN('hello'))

// funciones de flecha
let o = (x, y )=>x*y
console.log(o(10, 22))

let i = (x, y)=>{ return x * y}
console.log(i(18,98))