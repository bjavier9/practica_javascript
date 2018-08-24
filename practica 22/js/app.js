
document.getElementById('rt').innerHTML=`<button onclick="add()">añadir</button>  <br>
<button onclick="subt()">substraer</button>
`

// Define object
var obj = {counter : 0};

// Define setters
Object.defineProperty(obj, "reset", {
    get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
    set : function (i) {this.counter += i;}
});

// let obj = {
//     counter: 0,
//     get reset(){
//         this.counter = 0;
//     },
//     get increment(){
//         this.counter++;
//     },
//     get decrement(){
//         this.counter--;
//     },
//     set add(value){
//         this.counter += value
//     },
//     set subtract(value){
//         this.counter -= value
//     }
// }
function add(){
    obj.increment
    document.getElementById('app').innerHTML= obj.counter
}
function subt(){
    obj.decrement
    document.getElementById('app').innerHTML= obj.counter
}
//clases

class person{
    constructor(nombre){
        this.nombre = nombre;
    }
    decirnombre(){
        console.log(this.nombre)
    }
}
let nombre = new person('jalisco')
nombre.decirnombre()
console.log(typeof person)

//clases como expreciones 
let persona = class {
    constructor(){
        this.nombre= '';
        this.edad = 30;
        this.direccion = 'hola sjd perroo peksjf'
    
    
    }
    decirnombre(){
        console.log(this.edad)
    }
}
let nom = new persona()
console.log(typeof nom)

//clases como parametros
function creadorclases(definirclase){
    return new definirclase()
}
let objeto = creadorclases(class{
    constructor(){
        this.nombre = 'raqui'
        this.edad = 30
    }
    saludar(){
        console.log(`${this.nombre} hola`)
    }
})
objeto.saludar()

//otro ejemplo 
// class cuadrado{
//     constructor(lado){
//         this.lado = lado;
//     }
//     getArea(){
//         return this.lado * this.lado
//     }
// }
// function imprimir(cuadrado){
//     console.log( cuadrado.getArea());

// }
// let mesa = new cuadrado(10);
// imprimir(mesa);

//metodo computado y estaticos
let nombreMetodo = 'hola'

class persona1{
    constructor(nombre){
        this.nombre = nombre;
    }
    decirNommbre(){
        console.log(this.nombre)
    }
    [nombreMetodo](){//propiedad computada son metodos q se pueden definir sus nombre 
        //en una variable
        console.log(this.nombre.toUpperCase() )
    }

    static crear(nombre){
        return new persona1(nombre)
    }
}
let yo = persona1.crear("hosded")
console.log(yo)


//herencia
class rectangulo{
    constructor(alto, largo){
        this.alto = alto;
        this.largo = largo;
    }
    getarea(){
        return this.alto * this.largo;
    }
}

let Rectangulo =  new rectangulo(3,2);

class cuadrado extends rectangulo{
    constructor(alto){
        super(alto, alto);
    }
    getarea(){
        return super.getarea()
    }
}
let Cuadrado = new cuadrado(3)
console.log( Cuadrado.getarea())