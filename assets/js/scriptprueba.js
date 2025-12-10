const saludo = 'Hola'
let numero = 2; 
{
    let alternador = 5;
    let resultado = alternador + 50;
    console.log(resultado);
    console.log(alternador);
    resultado = resultado + alternador;
    alternador = resultado - 45;
    console.log(alternador);
    resultado = resultado + alternador;
    console.log(resultado);
    console.log(alternador);
    console.log(typeof alternador);
}
var datoGlobal = 'Este dato es accesible en todo el script';
console.log(saludo);
console.log(datoGlobal);

let numero1;
let numero2;

let suma;
numero1 = 15;
numero2 = 10;
suma = numero1 + numero2;
console.log('la suma de ' + numero1 + ' y ' + numero2 + ' es: ' + suma);

let resta;
resta = numero2 - numero1;
console.log('la resta de ' + numero2 + ' y ' + numero1 + ' es: ' + resta);

let multiplicacion;
multiplicacion = numero1 * numero2;
console.log('La multiplicación de ' + numero1 + ' y ' + numero2 + ' es ' + multiplicacion)

let division;
division = numero2 / numero1;
console.log('la división de ' + numero2 + ' y ' + numero1 + ' es ' + division);

let modulo
modulo = numero2 % numero1;
console.log('el modulo de ' + numero2 + ' y ' + numero1 + ' es ' + modulo);

typeof saludo;
typeof numero;
typeof datoGlobal;
typeof suma;

console.log(typeof saludo);
console.log(typeof numero);
console.log(typeof datoGlobal);
console.log(typeof suma);
console.log(typeof resta);
console.log(typeof alternador);

 