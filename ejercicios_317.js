let aguinaldo = +prompt("¿Cuanto dinero recibira de aguinaldo?");

if (aguinaldo >= 50000) {
    console.log(
        `Usted podra comprar: Una televisión, un modular, tres pares de zapatos, cinco camisas y cinco pantalones.`
    );
} else if (20000 <= aguinaldo < 50000) {
    console.log(
        `Usted podra comprar: Una grabadora, tres pares de zapatos, cinco camisas y cinco pantalones`
    );
} else if (10000 <= aguinaldo < 20000) {
    console.log(
        `Usted podra comprar:  Dos pares de zapatos, tres camisas y tres pantalones`
    );
} else if (aguinaldo < 10000) {
    console.log(
        `usted podra comprar: Un par de zapatos, dos camisas y dos pantalones.`
    );
}