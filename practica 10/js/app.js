//metodo de iteracion de la matriz
//operan cada elemento de la matriz
let numbers = [4,5,7,3]
let txt= ''
numbers.forEach(nose)
console.log(txt)
function nose(value, index, array){
    txt = txt+value+"<br>"
}
//array.map 
//crea una nueva matriz al realizar una funcion en cada elemento dela matriz
let numebers2 = numbers.map(aqui)
function aqui(value, index, array){
    return value*2
}
console.log(numebers2.toString())

//array filter 
//crea una matriz nueva a partir de una condicion 
let mayor4= numbers.filter(mayor)

function mayor(value, index, array){
    return value>4
}
console.log(mayor4.toString())

//array.reduce
//ejecuta una function en cada elemento de la matriz para producir un unico valor
let sum = numbers.reduce(suma)

function suma(total, value, index,array){
    return total+value
}
console.log(sum.toString())

//array.every()
//comprueba si todos los valores de la matriz pasan la condicion
//verifica que todos los valores pasen el condicional de lo contrario devuelve false
let may4 = numbers.every(mayy)
function mayy(value, index, array){
    return value > 4
}
console.log(may4.toString())

//array same()
//comprueba si alguno de los valores pasan el condicionl
let algmay = numbers.some(mayy)
console.log(algmay.toString()) 

//array.indexof
//busca en una matriz el valor del el elemento y devuelve su posicion
let fruits = ['banana','limon','kiwi','sandia']
let a = fruits.indexOf('limon')//devuelve -1 si no existe
console.log(a)

//array.find()
//devuelve  el primer valor pasa la condiciona
let first = numbers.find(mayy)
console.log(first.toString())

//array.findlndex()
//devuelve el indice del primer numero que pasa el  condicional
let firstt = numbers.findIndex(mayy)
console.log(firstt.toString())