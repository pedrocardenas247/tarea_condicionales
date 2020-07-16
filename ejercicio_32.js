let horasTrabajadas = +prompt("Ingrese las horas trabajadas");
let pagoHora = +prompt("Ingrese el pago por hora");

if (horasTrabajadas <= 40) {
    console.log(`Su pago semanal es: ${(horasTrabajadas) * (pagoHora)}`);
} else if (horasTrabajadas > 40) {
    console.log(`Su pago semanal es: ${((horasTrabajadas - 40) * (pagoHora * 2)) + ((horasTrabajadas) * (pagoHora)) }`);
}