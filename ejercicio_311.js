let aniosTrabajo = prompt("¿Cuantos años esta trabajado en la empresa?");

if (aniosTrabajo <= 5) {
    console.log(`Le corresponde: ${aniosTrabajo * 100} de bono.`);
} else if (aniosTrabajo > 5) {
    console.log(`Le correponde: 1000`);
}