//ciclo mientras
var i = 0;
var text = '';
while (i < 10) {
    text += "<br>The number is " + i;
    i++;
}
console.log(text)
document.getElementById("app").innerHTML = text;
var text1 = ''
var x = 0
do{
    text1+=`number ${i}`
i++
}while(x==10)
console.log(text1)


// comparandos ciclos
let frutas = ['kiwi', 'aguacate','manzana']
let text2 = ""
i = 0
for(;frutas[i];){
    text2 += ` nombre de la fruta: ${frutas[i]}`
    i++
}
console.log(text2)

i = 0
let text3 = ""
while(frutas[i]){
    text3 += `${frutas[i]}, `
    i++
}
console.log(text3)

//break
i=0
text4 = "" 
for(i=0;i<10;i++){
    if( i === 3){ break;}
    text4 += "numero: "+i
}
console.log(text4)

//continue omite ciertos valore especificados
i=0
text = "" 
for(i=0;i<10;i++){
    if( i === 3){ continue;}
    text += `numero ${i}`
}
console.log(text)

text = ''
let cars = ['BMW','VOLVO','FERRARI','LAMBORGHINI','BUGATTI']
list : {
     text += cars[0]
     text += cars[1]
     text += cars[2]
     break list;
     text += cars[3]
     text += cars[4]
     text += cars[5]
}
console.log(text)

console.log(Number(true))