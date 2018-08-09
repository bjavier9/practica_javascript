//metodo tostring convierte a cadena cualquiar arreglo
let fruits = ['banana','piña','limoncito','pepino','aguacate']
console.log(fruits.toString())
//el metodo join se le puede especificar el separador que llevara la matriz 
console.log(fruits.join('*'))
// metodo pop para eliminar el ultimo elemento 
fruits.pop();
console.log(fruits.toString())
//metodo push para agregar un elemento a lo ultimo de la 
fruits.push('melon')
console.log(fruits.toString())
//metodo shift() para eliminar el primer elemento
console.log(fruits.shift())
console.log(fruits.toString())
//el metodo unshift() agrega un elemento a la cadena al principio
fruits.unshift('naranja')
console.log(fruits.unshift("Lemon"))
console.log(fruits.toString())
//se accede a la matriz mediante sus indices para cambiar un elemento
fruits[0]= 'kiwi'
console.log(fruits.toString())
//agregar elementos a la matriz utilizando length
fruits[fruits.length]='manzana'
console.log(fruits.toString())
//eliminar las matrices javascript utilizando delete
//el uso de delete puede dejar huecos idenfinidos
delete fruits[0]
console.log(fruits.toString())
//agregar a la matriz un elemento con splice()
//se deben definir la posicion en el primer parametro y el segundo es el parametro que elimina
fruits.splice(2,0,'papaya','banana')
console.log(fruits.toString())
//splice para eliminar elementos sin dejar agujeros
fruits.splice(0,2)
console.log(fruits.toString())
//fucionar matrices con en el metodo concat()
let person1 = ['maria','javier','paola']
let person2 = ['alex','roberto','mariano']
let person3 = ['kalista','diland','donovan']
let person4 = person1.concat(person2, person3)
console.log(person4.toString())
person4 = person4.concat(['wanda','genesis','talia'])
console.log(person4.toString())
//slice()metodo que se usa para cortar la matriz
console.log(person4.slice(6).toString())
console.log(person4.slice(1,5).toString())