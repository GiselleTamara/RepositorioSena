function sumar() {
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2 = parseFloat(prompt("Ingrese el segundo número:"));
    var resultado = num1 + num2;
    document.write("La suma es: " + resultado);
}

function restar() {
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2 = parseFloat(prompt("Ingrese el segundo número:"));
    var resultado = num1 - num2;
    document.write("La resta es: " + resultado);
}

function multiplicar() {
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2 = parseFloat(prompt("Ingrese el segundo número:"));
    var resultado = num1 * num2;
    document.write("La multiplicación es: " + resultado);
}

function dividir() {
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2 = parseFloat(prompt("Ingrese el segundo número:"));
    if (num2 !== 0) {
        var resultado = num1 / num2;
        document.write("La división es: " + resultado);
    } else {
        document.write("No se puede dividir por cero.");
    }
}


