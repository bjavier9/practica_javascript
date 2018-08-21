//try permite probar errores
//catch manejar el error
//throw permite crear errores 
//finally ejecuta y atrapa resultados
// try{
//  adddlert('welcome')
// }catch(err){
//     console.log(err.message)
// }

// throw "Too big"
// throw 500
document.getElementById('app').innerHTML=`<input id='a1' type="text">
<button onclick="erro()">test</button><br>
<p id='msj'></p>`

function erro(){
let msj = document.getElementById('msj')
msj.innerHTML= ''
let x = document.getElementById('a1').value
try{
    if(x=="") throw 'empty';
    if(isNaN(x)) throw 'not a number';
    x = Number(x);
    if(x<5) throw 'too low';
    if(x>10) throw 'too high';
} catch(err){
    msj.innerHTML="input is "+err
}finally{
    document.getElementById('a1').value = ''
}
}
//error de rango 
var num = 1
try{
    num.toPrecision(500)
}catch(err){
    console.log(err.name)
}
//error de referencia al no declarar lla variable
var c
try{
    c = y +1
}catch(err){
    console.log(err.name)
}
//error de sitaxis
try{
    eval("alert('Hello)")
}catch(err){
    console.log(err.name)
}

// error de teclado dfuera de rango de tipos esperados
try{
    num.toUpperCase();
}catch(err){
    console.log(err.name)
}
//caracteres ilegales de una funcion 
try{
    decodeURI('%%%')
}catch(err){
    console.log(err.name)
}