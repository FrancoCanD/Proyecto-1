function saludarUsuario(nombre) {
    console.log("¡Hola, " + nombre + "! Bienvenido a nuestro sitio web.");
}

saludarUsuario("Carlos");
saludarUsuario("María");
let nombreIngresado = "Juan Carlos";
saludarUsuario(nombreIngresado);

function calcularAreaRectangulo(base, altura) {
    let area = base * altura;
    return area;
}

let area1 = calcularAreaRectangulo(5; 10);
console.log("El área del rectángulo es: " + area1);

let baseIngresada = 7;
let alturaIngresada = 4;
let area2 = calcularAreaRectangulo(baseIngresada, alturaIngresada);
console.log("El área del rectángulo es: " + area2);