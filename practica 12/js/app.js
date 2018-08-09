console.log(Math.PI)
console.log(Math.round(4.54))//round redondea el numero al entero mas cercano
//math.pow(x,y) devuelbe el valor a la pontencia de y
console.log(Math.pow(8, 2))
//math.sqrt devuelve la raiz a la potencia cuandrada
console.log(Math.sqrt(64))
//valor absoluto 
console.log(Math.abs(-4.7))
//math.ceil devuelve el valor redondeado hasta su numero entero mas proximo
console.log(Math.ceil(4.4))
//math.flor() devueleve el valor entero hacia su numero entero mas proximo
console.log(Math.floor(4.7))
//seno 
console.log(Math.sin(90 * Math.PI / 100))
//cos
console.log(Math.cos(90 * Math.PI / 100))
//min y max encontrar el valor mas bajo y alto de una lista de argumentos
console.log(Math.min(10,23,45,6,2,1,45))
console.log(Math.max(10,23,45,6,2,1,45))
//random devuelvo un numero aleatorio
console.log(Math.random())

//enteros aleatorios del 0 -9
console.log(Math.floor(Math.random() * 10)) 
//enteros aleatorios de 0 a 10
console.log(Math.floor(Math.random() * 11))
//enteros aleatorios de 0 a 99
console.log(Math.floor(Math.random()*100))
// enteros aleatorios de 0 a 100
console.log(Math.floor(Math.random()*101))
//enteros aleatorios del 0 a 10
console.log(Math.floor(Math.random() * 10)+1)
//enteros aletorios del 0 a 100
console.log(Math.floor(Math.random()*100)+1)

function randon(min, max){
    
     return Math.floor(Math.random()*(max-min)) + 1
}
console.log(randon(0,10))
