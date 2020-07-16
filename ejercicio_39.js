const planA = 1200;
const planB = 950;

let alcohol = prompt(`¿Usted toma alcohol? (Escriba Si o No)`).toLowerCase();
let lentes = prompt(`¿Usted usa lentes? (Escriba Si o No)`).toLowerCase();
let enfermedad = prompt(
    `¿Usted tiene una enfermedad Cardiaca o Diabetes? (Escriba Si o No)`
).toLowerCase();
let edad = +prompt(`¿Que edad tiene?`);

let trueAlcoholPlanA = 0;
let trueAlcoholPlanB = 0;
let trueLentesPlanA = 0;
let trueLentesPlanB = 0;
let trueEnfermedadPlanA = 0;
let trueEnfermedadPlanB = 0;
let edadA = 0;
let edadB = 0;

if (alcohol === "si") {
    trueAlcoholPlanA = planA * 0.1;
    trueAlcoholPlanB = planB * 0.1;
}
if (lentes === "si") {
    trueLentesPlanA = planA * 0.05;
    trueLentesPlanB = planB * 0.05;
}
if (enfermedad === "si") {
    trueEnfermedadPlanA = planA * 0.05;
    trueEnfermedadPlanB = planB * 0.05;
}
if (edad >= 40) {
    edadA = planA * 0.2;
    edadB = planB * 0.2;
}
if (edad < 40) {
    edadA = planA * 0.1;
    edadB = planB * 0.1;
} {
    console.log(
        `La poliza de Cobertura Amplia le costaria: ${
      planA + trueAlcoholPlanA + trueLentesPlanA + trueEnfermedadPlanA + edadA
    }`
    );

    console.log(
        `La poliza de Cobrtura de Daños a terceros le costaria: ${
      planB + trueAlcoholPlanB + trueLentesPlanB + trueEnfermedadPlanB + edadB
    }`
    );
}