const VACIO = "";

let ingresosTotales = prompt("¿Cuál es el monto de ingresos que has tenido este mes?");
while (ingresosTotales == VACIO || isNaN(ingresosTotales) || Number(ingresosTotales) <= 0) {
    alert("Por favor, ingrese un valor numérico válido."); 10
    ingresosTotales = prompt("¿Cuántos ingresos ha tenido este mes?");
}

let nivelAhorro;
do {
    nivelAhorro = prompt("¿Qué nivel de ahorro desea tener? (Bajo - Medio - Alto)").trim().toLowerCase();

    if (nivelAhorro !== "bajo" && nivelAhorro !== "medio" && nivelAhorro !== "alto") {
        alert("Usted ha ingresado un valor no válido, por favor, ingrese 'Bajo', 'Medio' o 'Alto'.").trim().toLowerCase();
    }
} while (nivelAhorro !== "bajo" && nivelAhorro !== "medio" && nivelAhorro !== "alto");

let porcentajeAhorro;
if (nivelAhorro === "bajo") {
    porcentajeAhorro = 0.1;
} else if (nivelAhorro === "medio") {
    porcentajeAhorro = 0.25;
} else if (nivelAhorro === "alto") {
    porcentajeAhorro = 0.50;
}

let decisionInvertir;
do {
    decisionInvertir = prompt("¿Desea invertir el monto ahorrado? (Si - No)").trim().toLowerCase();

    if (decisionInvertir !== "si" && decisionInvertir !== "no") {
        alert("Usted ha ingresado un valor no válido, por favor, ingrese 'Si' o 'No'.").trim().toLowerCase();
    }
} while (decisionInvertir !== "si" && decisionInvertir !== "no");

let porcentajeGastos = 1 - porcentajeAhorro;

let montoInvertir

if (decisionInvertir == "si") {
    montoInvertir = porcentajeAhorro * ingresosTotales
}

let plazoFijo = montoInvertir * 0.40;
let bonosSoberanos = montoInvertir * 0.30;
let fondoComunInversion = montoInvertir * 0.20;
let accionesEmpresas = montoInvertir * 0.10;

function diversificarCartera(montoInvertir) {
    plazoFijo;
    bonosSoberanos;
    fondoComunInversion;
    accionesEmpresas;
}

alert("Usted ha tenido $" + ingresosTotales + " de ingresos en el mes y ha decidido destinar un " + (porcentajeAhorro * 100) + "% de ahorro mensual, por lo que debe destinar $" + (porcentajeGastos * ingresosTotales) + " para gastos mensuales.");
if (decisionInvertir === "si") {
    alert("Usted ha decidido invertir el monto ahorrado, por lo que deberá invertir $" + plazoFijo + " en plazo fijo, $" + bonosSoberanos + " en bonos soberanos, $" + fondoComunInversion + " en fondo común de inversión y $" + accionesEmpresas + " en acciones de empresas.");
}
else {
    alert("Usted ha decidido no invertir el monto ahorrado.");
}

console.log("El usuario ha tenido $" + ingresosTotales + " de ingresos en el mes y ha decidido destinar un " + (porcentajeAhorro * 100) + "% de ahorro mensual.");
console.log("El usuario ha decidido destinar $" + (porcentajeGastos * ingresosTotales) + " para gastos mensuales.");
console.log("Porcentaje de gastos: " + (porcentajeGastos * 100) + "%");
console.log("El usuario ha decidido " + decisionInvertir + " invertir el monto ahorrado");
console.log("El monto a invertir definido por el usuario es $" + montoInvertir);