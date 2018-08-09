function ver(x){
    return Boolean(x)
}
console.log(Boolean(10 > 9))//retorna verdadero 
console.log(ver(3))
console.log(ver(100))
console.log(ver(3.14))
console.log(ver(-15))
console.log(ver('hello'))
console.log(ver('false'))
console.log(ver(7+1+3.14))//todo con un valor es verdadero
console.log(ver(0))//retorna un false toda variable sin valor es false
console.log(ver(-0))
console.log(ver(''))
let y
console.log(ver(y))
console.log(ver(null))
console.log(ver(false))
console.log(ver(NaN))
//boolean pueden ser objetos 
var z = false;
var w =  new Boolean(false)
console.log( typeof z)
console.log( typeof w)
console.log(z==w)
console.log(z===w)
var k = new Boolean(false)
console.log(k===w)