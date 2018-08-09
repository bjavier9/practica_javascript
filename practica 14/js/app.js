let age = 10 //operador ternario
let x = (age < 18)?'Too yong':'Old enough'
console.log(x)


function rf(y){
let msj
    y = Number(y)
if(isNaN(y)){
    msj = 'no es number'
}else{
    msj = (y < 18)?'Too yong':'Old enough'
}
console.log(msj)
}
rf(19)

//declaracion if
let h1 = new Date()
h1 = h1.getHours()
let h2 = new Date()
h2 = h2.getMinutes()
if(h1>17){
    console.log(`buenas noches la hora es ${h1}:${h2}`)
}else if(h1>12){
    console.log(`buenas tardes la hora es ${h1}:${h2} `)
}else{
    console.log(`buenos dias la hora es ${h1}:${h2}`)
}
let dia 
switch(new Date().getDay()){
    case 0:
        day ='domingo';
        break;
    case 1:
        day = 'lunes';
        break;
    case 2: 
        day = 'martes';
        break;
    case 3:
        day = 'miercoles';
        break;
    case 4:
        day = 'jueves';
        break;
    case 5:
        day = 'viernes';
        break;
    case 6:
        day = 'saturday';
        break;    
}
console.log(day)
let text 
switch(new Date().getDay()){
    case 6:
        text = 'hoy es sabado'
        break

    case 0: 
        text = 'hoy es domingo'
        break
    default: 
        text = 'looking foward to the weekend'    
}
console.log(text)

let y
let w = 0
switch(w){
    case 0:
    y = 'OFF'
    break

    case 1: 
    y ='on'
    break

    default:
    y = 'no value found'
}
console.log(y)
let fruits = ['kiwi', 'sandia','melones','manzana']
let i
let f=''
for(i=0; i<fruits.length; i++){
    f +=`${fruits[i]} ` 
}
console.log(f)
fruits.push('aguacate')
console.log(fruits.toString())

//recorriendo propiedades de objetos
var person = {name:'jhon', apellido:'dick', age:18}
let tx='';
let k
for(k in person){
    tx += person[k]
}
console.log(tx)