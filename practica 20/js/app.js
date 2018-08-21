//eliminando espacios en blanco de una cadena
var str = '        <h1>hellow bitch</h1> ';
alert(str.trim());
//comprobando si es array 
var fruits =['kiwi','aguacate','melon','papalla','naranja']
console.log(Array.isArray(fruits))
//array foreach() llama una funcion para cada elemento de la matriz
var text = ''
var numbers = [3,4,5,67,78,32]
numbers.forEach(myfunction)
console.log(text)
function myfunction(value, index, array){
    text = text + value+'\n' 
}
//array map crea una nueva funcion n cada elemento de la amatriz
var numbers1 =  [1,2,34,5,6,6,7,2,3]
var number2 = numbers1.map(mifunc)
function mifunc(value,index, array){
    return value*2
}
console.log(number2.toString())

// filter crea una matriz co elemntos de otra que pasan por una condicion 
var over18 = numbers1.filter(func)
function func(value, index, array){
    return value > 18
}
console.log(over18.toString())

//array.reduce acumula todos los valores de una matriz de izquierda a derecha
var sum = numbers1.reduce(misrt)
function misrt(total, value, index, array){
    return total + value 
}
console.log(sum.toString())
//array.reduceright() reduce los valores de derecha a izquierda
var sum2 = numbers1.reduceRight(mir);
function mir(total, value, index, array){
return total + value
}
console.log(sum2.toString())

//array.every comprueba si todos los valores de unamatriz  pasan una condicional
var todos = numbers1.every(tod1)
function tod1(value, index, array){
    return value > 18
}
console.log(todos.toString())
//array.some comprueba si algunos valores de una matriz pasan una condicional
var som = numbers1.some(mfun)
function mfun(value, index, array){
    return value > 18
}
console.log(som.toString())
//array.indexof busca en una matriz el elemento y devuelve su posicion
var a = fruits.indexOf('kiwi')
console.log('la fruta es : '+fruits[a]+' # '+a)
//array lastindex busca desde elfinal de la matriz
var b = fruits.lastIndexOf('kiwi')
console.log(b)//devuelve la posicion de la matriz


//cadena de texto a javascript
var obj = JSON.parse('{"name":"dillon", "age":12}')
console.log(obj)
//json.striginfy para enviar tipo string de un objeto 
var obj1 = {name:'matilda', age:4}
var myjson = JSON.stringify(obj1)
console.log(myjson)
//date now devuelve el numero en milisegundos
var y = Date.now()
console.log(y)
//getter and setters
var person = {
    name:'ana',
    age:19,
    lenguage:'no',
    
}
//object property permite caambiar el valor de un objeto o prpoiedad o metadatos de una propiedad
Object.defineProperty(person, "lenguage", {
    get : function() { return lenguage },
    set : function(value) { lenguage = value.toUpperCase()}
    });
person.lenguage = "esp"
console.log(person.lenguage)
//ejemplo 2
// Create an Object:
var person1 = {
    firstName: "John",
    lastName : "Doe",
    language : "NO", 
};
// Change a Property:
Object.defineProperty(person1, "language", {
    value: "EN",
    writable : true,
    enumerable : false,
    configurable : true
});
// Enumerate Properties
var txt = "";
for (var x in person1) {
    txt += person1[x] + "\n";
}
console.log(txt)

//charat devuelve elcaracter en un indice especificado 
var texto = ''
texto = 'hola que hace'
console.log(texto.charAt(1))
console.log(texto[1])
