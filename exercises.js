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
var nombrecompleto = 'MarianoMontrasi'
console.log(nombreCompleto.toUpperCase());

/*2.b*/
var curso = 'Curso JavaScript'
var curso1 = curso.substring(0,5)
console.log(curso1);

/*2.c*/
var carrera = 'Ingenieria Mecánica'
var carrera1 = carrera.substring(17,20);
console.log(carrera1);
