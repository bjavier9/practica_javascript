
let fruits = ['banana','kiwi','sandia','aguacate']
//el metodo sort ordena alfabeticamente una matriz
console.log(fruits.sort().toString())
//metodo reverse invierte la matriz
console.log(fruits.reverse().toString())

let num = [1,3,53,0,43,21]
let h1 = `<button onclick='descendente()'>descendente</button>
<button onclick='ascendente()'>ascendente</button>
<button onclick="min()">Numero minimo</button>
<button onclick="may()">Numero maximo</button>`
document.getElementById('app').innerHTML=`${h1} <br> ${num}`
console.log(num.sort(function (a, b){return a-b}).toString())

function descendente(){
 num.reverse(function(a, b){return a-b}).toString()
document.getElementById('app').innerHTML=`${h1}<br>${num}`
}
function ascendente(){
     num.sort()
document.getElementById('app').innerHTML=`${h1}<br>${num}`
}
function min(){
    num.sort(function(a, b){return a-b})
    //sort retorna un objeto y se le puede asignar un indice
    document.getElementById('app').innerHTML=`${h1}<br>${num[0]}`
    
}
function may(){
    num.sort(function(a, b){return b-a})
    //retorna el numero mas alto
    document.getElementById('app').innerHTML=`${h1}<br>${num[0]}`
}
//sacar el numero mayor utlizando el metodo math
console.log(Math.max.apply(null, num))
//sacar el numero minimo de una cadena con math.min
console.log(Math.min.apply(null, num))

let car=[
    {type:'bmw',age:2018},
    {type:'toyota',age:2017},
    {type: 'nissan',age:2019}
]
car.sort(function(a, b){return a.age-b.age })
console.log(car[1].type)
for(let i in car){
    console.log(`car ${car[i].age} ${car[i].type}`)
}