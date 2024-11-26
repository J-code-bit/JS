
//alert('Hola JS')
//console.log('Hola JS',4*3)

//VARIABLES

var num1;
num1 = 3;

let num2 = 5;
        
let nombreCompleto;
let nombre_completo;

let suma = 3 + 7 + 5;
console.log ('Suma:',suma);


//CONSTANTES

const IVA = 21;
console.log ('IVA :',IVA);

//IVA = 10    no se puede cambiar la constante


//TIPO DE DATOS

let num3 = new Number(34);
let num4 = Number("54");


//parse...

num1 = parseInt("123.5");
num2 = parseFloat("123.51");


//Operadores

num1 = 3; 

suma = 1 + 4;
let resta = 6 - 9;
let multi = 5 * 6;
let division = 5/4;

let expo = 2**3
num1 = 11 % 3; //sirve para saber si un numero es multiplo de otro. Cuando da 0 es multiplo. O si es par o impar.

//Incremento y decremento

let num6 = 0;
num6 = num6 + 1;
console.log(num6);

num6 = num6 + 1;
console.log(num6);

num6 = num6 + 1; 
console.log(num6);


num6 ++; //incremeto. Sumo 1 al valor actual de la variable
console.log(num6);

console.log(num6++); //posfijo se toma el valor actual y luego se suma
console.log(num6)
console.log(++num6); //prefijo primero se hsce la suma y luego se muestra 


//Concatenacion

let msg1 = 'Hola';
let msg2 = 'Mundo';

//let msg3 = msg1 + msg2;
//let msg3 = msg1 + ' ' + msg2; //para que se imprima con espacio

let msg3 = `El mensaje final es: ${msg1} ${msg2}`;

//console.log(msg3);

//let numero = prompt('Ingrese un número: ');
//numero = parseInt(numero);
//suma = 4 + numero;

//const nombre = prompt('ingrese su nombre');
//document.write('<p> Hola ' + nombre + '</p>');


