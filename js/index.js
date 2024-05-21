const VACIO = "";

let ingresosTotales = prompt("¿Cuántos ingresos ha tenido este mes?");
while (ingresosTotales == VACIO || isNaN(ingresosTotales) || Number(ingresosTotales) <= 0) {
    alert("Por favor, ingrese un valor numérico válido.");
    ingresosTotales = prompt("¿Cuántos ingresos ha tenido este mes?");
}

let nivelAhorro;
do {
    nivelAhorro = prompt("¿Qué nivel de ahorro desea tener? (Bajo - Medio - Alto)").trim();
    
    if (nivelAhorro !== "Bajo" && nivelAhorro !== "Medio" && nivelAhorro !== "Alto") {
        alert("Usted ha ingresado un valor no válido, por favor, ingrese 'Bajo', 'Medio' o 'Alto'.");
}
} while (nivelAhorro !== "Bajo" && nivelAhorro !== "Medio" && nivelAhorro !== "Alto");

let porcentajeAhorro;
if (nivelAhorro === "Bajo") {
    porcentajeAhorro = 0.1;
} else if (nivelAhorro === "Medio") {
    porcentajeAhorro = 0.25;
} else if (nivelAhorro === "Alto") {
    porcentajeAhorro = 0.50;
}

let porcentajeGastos = calcularPorcentajeGastos(porcentajeAhorro);
let montoNecesidadesBasicas = calcularNecesidadesBasicas(porcentajeGastos);
let montoGastosDiscrecionales = calcularGastosDiscrecionales(porcentajeGastos);
function calcularPorcentajeGastos(porcentajeAhorro) {
    return 1 - porcentajeAhorro;
}
function calcularNecesidadesBasicas(porcentajeGastos) {
    return porcentajeGastos * 0.7 * 100;
}
function calcularGastosDiscrecionales(porcentajeGastos) {
    return porcentajeGastos * 0.3 * 100;
}

alert("Usted ha tenido $" + ingresosTotales + " de ingresos en el mes y ha decidido destinar un " + (porcentajeAhorro * 100) + "% de ahorro mensual, por lo que debe gastar $" + (montoNecesidadesBasicas+montoGastosDiscrecionales) + " para gastos mensuales.");
console.log("El usuario ha tenido $" + ingresosTotales + " de ingresos en el mes y ha decidido destinar un " + (porcentajeAhorro * 100) + "% de ahorro mensual.");
console.log ("El usuario ha decidido destinar $" + (porcentajeGastos * ingresosTotales) + " para gastos mensuales.");
console.log("Porcentaje de gastos: " + (porcentajeGastos * 100) + "%");
console.log("Monto destinado a necesidades básicas: $" + montoNecesidadesBasicas);
console.log("Monto destinado a gastos discrecionales: $" + montoGastosDiscrecionales);