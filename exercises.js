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

/*3.a*/
var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
console.log(meses [4]);
console.log(meses [10]);

/*3.b*/
meses.sort();
console.log(meses);

/*3.c*/
var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
meses.unshift('Inicio de Año');
meses.push('Fin de Año');
console.log(meses);

/*3.d*/
meses.shift();
meses.pop();
console.log(meses);

/*3.e*/
meses.reverse();
console.log(meses);

/*3.f*/
console.log(meses.join('-'));

/*3.g*/
meses.reverse();
var algunosMeses = meses.slice(4,11);
console.log(algunosMeses);

/*4.a*/
var numeroAleatorio = Math.random(0,1);
console.log(numeroAleatorio);
if (numeroAleatorio>=0.5) {
                        console.log('Greater than 0,5');
                            } else {
                                    console.log('Lower than 0,5');
}

/*4.b*/
var age = 60;
if (age<2) {
    console.log('Bebe');
            }else if(age>=2 && age<=12) {
                console.log('Nino');
            }else if(age>=13 && age<=19) {
                console.log('Adolescente');
            }else if(age>=20 && age<=30) {
                console.log('Joven');
            }else if(age>=31 && age<=60) {
                console.log('Adulto');
            }else if(age>=61 && age<=75) {
                console.log('Adulto Mayor');
            }else {
                console.log('Anciano');
}     

/*5.a*/
var nombres = ['mariano','lautaro','bruno','julian','federico'];
for (var i = 0; i<5; i++) {
    alert(nombres[i]);
}

/*5.b*/
for (var i = 0; i<5; i++) {
    var nombresMayuscula = nombres[i].substring(0,1).toUpperCase() + nombres[i].substring(1,);
    alert(nombresMayuscula);
}

/*5.c*/
var sentence = '';
for (var i =0; i<5; i++) {
    sentence = sentence + nombres[i];
}
alert(sentence);

/*5.d*/
var vacio = [];
for (var i = 0; i<10; i++) {
    vacio[i] = i;
}
console.log(vacio);

/*6.a*/
function suma(num1,num2) {
    return num1+num2;
}
var resultado = suma(8,26);
console.log(resultado);

/*6.b*/
function sumasuma(num1,num2) {
    var x1 = isNaN(num1);
    var x2 = isNaN(num2);
    if (x1 == false && x2 == false) {
        return num1+num2;
    }else {
        alert('Error-One of both parameters, is not a number')
        return NaN
        }
}
var result = sumasuma('a',27);

/*6.c*/

