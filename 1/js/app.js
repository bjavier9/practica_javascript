
let x = 'hola como estas';
let y = 'vale shaval';
console.log(`${x} ${y}`)
document.getElementById('example').innerHTML = `<h1>${x} ${y}<h1> `
console.log('hola mundo')
let foo = { a: "alpha", 2: "two" };
console.log(foo.a)
console.log(foo[2])

//literal tipo de objeto 
let ejm = "Toyota"
function carros(nombre) {
    if (nombre == 'honda') {
        return `${nombre} si vendemos, la mejor marca`
    } else {
        return `no vendermos ${nombre}.`
    }
}
var auto = {
    micarro: 'saturn',
    getcarro: carros('honda'),
    suauto: ejm
}
console.log(carros(ejm))
console.log(auto.micarro)
console.log(auto.getcarro)
console.log(auto.getcarro)
console.log(auto.suauto)
var dentro = { demi: { c: 'ayer me dormi', 'u': 'no quiero irme señor stark' } }
console.log(dentro.demi.c)
console.log(dentro.demi.u)
console.log(`Roses are red,\n\
Violets are blue.\n\
I'm schizophrenic,\n\
And so am I.`)
let w= 0;
while( w <10){
	console.log(w)
	w++
}console.log(w)
throw "error"
function dime(){
	let nombre = document.getElementById('nombre').value;
	let trapito = document.getElementById('trapito').value;
	trapito = trapito.length;
	if(trapito==1){
		alert('cortec el pelo gei')
	}
	else if(trapito==2){
		alert('los trapitos son geys')
	}
	else if(trapito==3){
		alert(`'mas gei q un gei' ${nombre}`)
	}
	else if(trapito==4){
		alert(`quieres drogas ${nombre}`)
	}else{
		alert(`${nombre} cortec el pelo gei`)
	}

	console.log(trapito)
	alert(``)
}