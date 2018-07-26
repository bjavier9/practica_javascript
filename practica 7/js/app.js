//propiedad longitud 
var fruits  = ['perro', 'gato','wachito']
console.log(fruits.length)

//matriz bucle
var fruits = ['banana', 'orange','apple', 'mango']
var text, flen, i;
flen = fruits.length
text = '<ul>'
for(i=0; i < flen; i++){
    text += `<li>${fruits[i]}</li>`
}
text += '</ul>'
document.getElementById('app').innerHTML=text
//agregar elementos a una matriz 
fruits.push('limonada')
//tambien se puede agregar con length
fruits[fruits.length]='naranjita'
console.log(fruits.toString())

//agregar con indices puede crear bugs
fruits[4]= 'wacho'
console.log(fruits.toString())