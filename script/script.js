/*CLASE 1:

let numero1 = 1;
let numero2 = 4;
let numero3 = 7;
let entrada = parseFloat (prompt("Ingresa un numero"));
let salida = entrada + numero1 * numero3 /numero2;
alert (salida);

*/

/*CLASE 2:*/

let nombre = prompt("cual es tu nombre");

if (nombre == "Rodrigo"){
    alert("Sos el profesor");
}
else if ((nombre != "") && ((nombre === "Mauricio") || (nombre === "Samuel") || (nombre === "Juan"))){
    alert("Sos un tutor");
}
else{
    alert("Sos un alumno");
}

