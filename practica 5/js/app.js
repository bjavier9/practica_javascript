//cadenas----busqueda de cadenas
let text = 'dsdjsdljskdjslkjds'
console.log(text.length);

let maria= {
    nombre: 'maria',
    apellido:'gimenez',
    anos: 19,
    fullname: function (){
        return `Su nombre completo ${this.nombre} ${this.apellido} y tiene ${this.anos} años`
    }
}
console.log(maria.fullname())
let post = ['oblivion', 'maria','juan','perin']
if(post.indexOf('maria')==1){
    console.log(maria.fullname())
}

//lastIndexof() devuelve la ultima posicion devuelve -1 si no encuentra el texto
let str = 'Hola que tal como estas'
console.log(str.lastIndexOf('como'))

//indexOf  puede localizar apartir de un segundo parametro 
console.log(str.indexOf('estas',5)) 

//search() busca una cadena paraa un valor especifico y devuelve la posicicion 
console.log(str.search('que'))
//la diferencia de search es que no puede tomar unsegundo valor para indexar. ademas esta si es mas pontente para utilizar expresiones regulares.

//extraer parte de string
console.log(str.slice(5,13))
//posicion negativas se cuentan desde el final de la cadena
console.log(str.slice(-11,-3))

let frutitas = "Apple, Banana, Kiwi"
//omite el parametro y corta el resto de la cadena
console.log(frutitas.slice(15))
console.log(frutitas.slice(-12))
//el metodo de substring no acepta parametros negativos
console.log(frutitas.substring(7,13))
//substr tenemos que especificar el tamaño delas cadenas a extrare 
console.log(frutitas.substr(15))
console.log(frutitas.substr(-12))

//remplazar contenido de una cadena remplace y es sencible a mayusculas
let soft = 'Visita mi tiendita juan. mi casa'
console.log(soft)
console.log(soft.replace('juan','maria'))
//usar una expresion regular en caso de mayusculas
console.log(soft.replace(/VISITA/i,'Hola'))
//usando la expresion regular /g en caso de que la coincidencia se global
console.log(soft.replace(/mi/g,'Hola'))

//CONVERSION A MAYUSCULA o minuscula
let fto = 'Olis papirrines todo bien todo correcto'
console.log(fto.toUpperCase())
console.log(fto.toLowerCase())

//metodo concat() paraa unir varias cadenas 
let x= 'jajajajaj manco'
let y= 'no sin brazos'
console.log(x.concat(` ${y}`))
//elimina espacios en blanco trim()
let vs = '        hola!      ededed   '
console.log(vs.trim())

//extraccion de caracteres de las cadenas
let perritos = 'perritos perritos'
console.log(perritos.charAt(0))

//charcodeat devuelve el numero unicode
console.log(perritos.charCodeAt(0))

//acceder a una cadena como matriz es inseguro 
console.log(perritos[5])

//convertir una cadena a una matriz con el metodo split
let text1 = 'a,b,c,d'
let xtx = text1.split(',')
console.log(xtx[3])
let tr = ''
let arr = text1.split('')
for (var i = 0; i < arr.length; i++) {
    tr += arr[i] + "<br>"
}
console.log(tr)