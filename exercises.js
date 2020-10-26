/* Practice Number One*/
/*1.a*/
var num1, num2;
num1 = 5;
num2 = 10;
var suma1y2= num1 + num2;
console.log(suma1y2);

/*1.b*/
var nombre ='Mariano', apellido = 'Montrasi';
var nombreCompleto = nombre + apellido;
console.log(nombreCompleto);

/*1.c*-----Uso las dos vairables string anteriores*/
var cantLetras = nombre.length + apellido.length;
console.log (cantLetras);

/*2.a*/
var nombrecompleto = 'MarianoMontrasi';
console.log(nombreCompleto.toUpperCase());

/*2.b*/
var curso = 'Curso JavaScript';
var curso1 = curso.substring(0,5);
console.log(curso1);

/*2.c*/
var carrera = 'Ingenieria Mecánica';
var carrera1 = carrera.substring(17,20);
console.log(carrera1);

/*2.d*/
var profesion = 'electrICIsta';
var profesionModificado = profesion.substring(0,1).toUpperCase() + profesion.substring(2,12).toLowerCase();
console.log(profesionModificado);

/*2.e*/
var equipos = 'River Plate';
var espacio = equipos.indexOf(' ',0);
console.log(espacio);

/*2.f*/
var miCarrera = 'ingenieria mecanica'
var carreraModificada = miCarrera.substring(0,miCarrera.indexOf('i',0) + 1).toUpperCase() + miCarrera.substring(1,11) + miCarrera.substring(11,miCarrera.indexOf('m',0) + 1).toUpperCase() + miCarrera.substring(12,19);
console.log(carreraModificada);