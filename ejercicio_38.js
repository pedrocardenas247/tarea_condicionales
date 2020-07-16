let antiguedad = +prompt("Ingrese la antiguedad");
let sueldo = +prompt("Ingrese el sueldo");

if (antiguedad < 2 && sueldo < 1000) {
    console.log(`Este mes le corresponde ${sueldo * 0.2} de bono.`);
} else if (antiguedad < 2 && 1000 <= sueldo <= 3500) {
    console.log(`Este mes le corresponde ${sueldo * 0.15} de bono.`);
} else if (antiguedad < 2 && sueldo > 3500) {
    console.log(`Este mes le corresponde ${sueldo * 0.1} de bono.`);
} else if (2 <= antiguedad < 5 && sueldo < 1000) {
    console.log(`Este mes le corresponde ${sueldo * 0.25} de bono.`);
} else if (2 <= antiguedad < 5 && 1000 <= sueldo <= 3500) {
    console.log(`Este mes le corresponde ${sueldo * 0.2} de bono.`);
} else if (2 <= antiguedad < 5 && sueldo > 3500) {
    console.log(`Este mes le corresponde ${sueldo * 0.2} de bono.`);
} else if (antiguedad >= 5 && sueldo >= 1) {
    console.log(`Este mes le corresponde ${sueldo * 0.3} de bono.`);
}