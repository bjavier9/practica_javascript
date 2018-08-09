console.log(new Date())
console.log(new Date(2018,11,24,10,33,30))
console.log(new Date(2018, 11, 24,10,33))
console.log(new Date(2019,11))
console.log(new Date(2018))
console.log(new Date(9,11,24))

console.log(new Date('October 13, 2014 11:13:00'))

console.log(new Date(0))
console.log(new Date().toString())
console.log(new Date().toUTCString())
console.log(new Date().toDateString())
let dta= new Date()
console.log(dta)
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(dta.getTime())//devuelve los milisegundos desde enero de 1970
console.log(dta.getMonth())
console.log(months[dta.getMonth()])// el indice retorna un numero de mes q va de 0 a 11.
console.log(dta.getDate())//get day retorna un indice de 1 a 31
console.log(dta.getHours())//devuelve la hora de 0 a 23
console.log(dta.getMinutes())//devuelve los minutos de 0 a 59
console.log(dta.getSeconds())//devuelve los segundos de 0 a 59
console.log(dta.getMilliseconds())//devuelve los milisegundos de 0 a 59
console.log(dta.getDay())//retorno de dias de 0 a 6
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days[dta.getDay()])
let someday = new Date()
console.log(someday.setFullYear(2020))//establece el año del objeto de fecha. ejemplo hasta el 2020
console.log(someday.setFullYear(2020,11,3))
console.log(dta.setMonth(11))//establece el mes de un objeto de 0 a 11
console.log(dta.setDate(20))//establece el dia de un objeto
console.log(someday.setDate(someday.setDate()+50))// se le puede agregar dias
console.log(dta.setHours(22))//se puede establecer las horas de un objeto 
console.log(dta.setMinutes(30))//se puede establecer la horas de un objeto de 0-59
console.log(dta.setSeconds(30))//establece los segundos de un objeto 


someday.setFullYear(2018,8,0)
console.log(someday)
