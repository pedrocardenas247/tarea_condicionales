let horasParking = prompt("Ingrese el numero de horas");
let primerasDos = horasParking * 5;
let siguientesTres = 10 + (horasParking - 2) * 4;
let siguientesCinco = 22 + (horasParking - 5) * 3;
let mayorDiez = 37 + (horasParking - 10) * 2;

if (horasParking <= 2) {
    console.log(`El pago es de: ${primerasDos} soles.`);
} else if (horasParking > 2 && horasParking < 5) {
    console.log(`El pago es de: ${siguientesTres} soles.`);
} else if (horasParking > 5 && horasParking < 10) {
    console.log(`El pago es de: ${siguientesCinco} soles.`);
} else if (horasParking > 10) {
    console.log(`El pago es de ${mayorDiez} soles`);
}