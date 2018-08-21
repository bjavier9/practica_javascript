let person = {

    firstname: 'maria',
    lastname: 'janeiro',
    id: 93034,
    fullname: function(){
        return `nombre: ${this.firstname}, apellido:${this.lastname}, id: ${this.id}  `
    }
}
console.log(person.fullname())

var x = this
console.log(x)//retorna un objeto tipo ventana 

function mi(){
    return this
} 
console.log(mi())
let person1= {

    firstname: 'maria',
    lastname: 'janeiro',
    id: 93034,
    mi: function(){
        return this
    }
}
console.log(person1.mi().toString())



//pedir sal a la vecina
let micasa = {
    
    pedido: function(){
        return ` <ul>
     <li>${this.msj}</li>
     <li>Primero que todo yo me llamo 
     ${this.nombre_de_la_vecina} y no tengo ${this.tiene}</li>
 </ul>`
    }
}

let casavecina = {
    msj:'vecina tiene sal',
    nombre_de_la_vecina: 'joana',
    tiene: 'sal',
}
debugger;
document.getElementById('app').innerHTML= micasa.pedido.call(casavecina);
//uso de const 
const car = {type:'toyota',model:'450', color:'verdesito'}
car.color = 'red';
car.owner = 'larry';
console.log(car.owner.toString())

const carro = ['toyota', 'BMW','volvo', 'bugatty']
carro[0]='ferrari'
carro.push('audi')
console.log(carro)