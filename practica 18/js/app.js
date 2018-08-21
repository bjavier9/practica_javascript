// modo estricto no se pueden usar variables no declaradas
// la ventaja de usar el modo estricto es que aprendemos a escribir
//un codigo mas limpio
"use strict"
x = 3.14;
console.log(x);
myfunction();

function myfunction(){
    'hola'
}

var x = 3.14
delete x;//error el objeto no esta permitido

function x(x,y){}
delete x //error eliminar funcion no esta permitido

function x(p1,p1){}//no se permite duplicar un nombre de parametro
var x = 010 //literales octales numericos no esta permitido

var x = '\010' // escape octal no estan  permitido
var obj = {}
object.defineProperty(obj, 'x', {value: 0, writable:false})
obj.x = 3.14// solo lectura no esta permitido 
// no esta permitido escribir en una propiedad de solo obtener:
var obj = {obj x() {return 0}};
obj.x = 3.14
delete object.prototype;//propiedad no recuperable no esta permitido
var eval = 3.14 // eval no se puede usar como variabale
var arguments = 3.14 // no se puede usar arguments como una variable
with (Math){x = cos(2)};//la declaracion de cos no esta permitida
eval('var x =2')
alert(x) //eval no puede crear variables desde el ambito que se llamo