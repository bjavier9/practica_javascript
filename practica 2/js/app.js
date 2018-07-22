var person = { firstName:'javier', lastName:'Batista', Age:12, colorhair:'blue '}
var perro = ['marino','rayo']
console.log(person.firstName)
console.log(typeof person)
console.log(typeof perro)
console.log(typeof 3.14)
console.log(typeof true)
console.log(typeof x)
console.log(typeof 3)
console.log(typeof function myfunction(){})

let vulve = (x,y,z)=>{
    x*=y;
    x-=z;
    return x;
}

console.log(vulve(12,4,6))

let resp = (nM)=>{

  let p = ((nM.length == 3)? 'true estas pendejo wey':'false nose si es cierto')
    return p
}
console.log(resp('wewr'))

let persona = {
    nombre:'javier',
    apellido:'batista',
    edad: 22,
    fullname:function() {
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(persona.fullname())