let dinero = +prompt("Ingrese el monto que desea invertir");

if (dinero > 0 && dinero <= 10) {
    console.log(`Con ${dinero} soles, Usted puede comprar UNA TARJETA`);
} else if (dinero > 10 && dinero <= 100) {
    console.log(`Con ${dinero} soles, Usted puede comprar CHOCOLATES`);
} else if (dinero > 100 && dinero <= 250) {
    console.log(`Con ${dinero} soles, Usted puede comprar FLORES`);
} else if (dinero > 250) {
    console.log(`Con ${dinero} soles, Usted puede comprar UN ANILLO`);
}