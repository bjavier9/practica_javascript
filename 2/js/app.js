let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join("*"))
fruits.pop();
console.log(fruits.join(" , "))
fruits.pop();
let x = fruits.pop();
console.log(fruits.join(" , "))
console.log(x)
let verduras = ['cebollas','repollos','aji']
fruits.push(verduras)
console.log(fruits.join(" , "))
fruits.shift()
console.log(fruits.join(" , "))
fruits.unshift('limon','aguacate')
console.log(fruits.join(" , "))
fruits[0] = 'kiwi'
console.log(fruits.join(" , "))
fruits[fruits.length] = 'banana'
console.log(fruits.join(" , "))
delete fruits[0]
console.log(fruits.join(' '))
fruits.splice(2,0, 'naranja','sandia')
console.log(fruits.join(' '))
let perros = ['rayo', 'trueno', 'amasona','talia']
let gatos = ['paco', 'mariano', 'juancito']
function splice(){
    perros.splice(0,1);
    console.log(perros.join(' '))
}
function concat(){
    //concatena arreglos
    let arreglo = fruits.concat(perros, gatos)
    console.log(arreglo.join('  '))
}
gatos = gatos.concat(['rous', 'rocio', 'tulalan'])
console.log(gatos.toString())

//rebanar una matriz
var gatop = gatos.slice(1)
let gato = gatos.slice(0,2)
console.log(gatop.toString())
console.log(gato.toString())
/* hola papus*/
console.log(20**2)

console.log(9>>2)
console.log(9<<2)
var now = new Date();
console.log(now.getFullYear())
var greeting = "Good" + ((now.getHours() > 17) ? " evening." : " day.");
console.log(greeting)