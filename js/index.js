const VACIO = "";
let ingresosTotales;
let gastosTotales;
let nivelAhorro;
let porcentajeAhorro;
let decisionInvertir;
let montoInvertir;
let inversiones = [];

// Función para actualizar la fecha en el footer en formato largo
function obtenerFechaLarga() {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const hoy = new Date();
    return hoy.toLocaleDateString('es-ES', opciones);
}

document.getElementById('fecha').innerText = obtenerFechaLarga();

// Función para capturar ingresos y gastos del usuario
function capturarIngresos() {
    ingresosTotales = prompt("¿Cuál es el monto de ingresos que has tenido este mes? (Ej: 5000)");
    while (ingresosTotales == VACIO || isNaN(ingresosTotales) || Number(ingresosTotales) <= 0) {
        alert("Por favor, ingrese un valor numérico válido.");
        ingresosTotales = prompt("¿Cuántos ingresos ha tenido este mes? (Ej: 5000)");
    }

    gastosTotales = prompt("¿Cuál es el monto de gastos que has tenido este mes? (Ej: 2000)");
    while (gastosTotales == VACIO || isNaN(gastosTotales) || Number(gastosTotales) <= 0) {
        alert("Por favor, ingrese un valor numérico válido para los gastos.");
        gastosTotales = prompt("¿Cuál es el monto de gastos que has tenido este mes? (Ej: 2000)");
    }

    nivelAhorro = prompt("¿Qué nivel de ahorro desea tener? (Bajo - Medio - Alto)").trim().toLowerCase();
    while (nivelAhorro !== "bajo" && nivelAhorro !== "medio" && nivelAhorro !== "alto") {
        alert("Usted ha ingresado un valor no válido, por favor, ingrese 'Bajo', 'Medio' o 'Alto'.");
        nivelAhorro = prompt("¿Qué nivel de ahorro desea tener? (Bajo - Medio - Alto)").trim().toLowerCase();
    }

    alert("Aprete el botón 'Determinar Perfil de Inversor' para ver el perfil de inversor de este usuario.");

    switch (nivelAhorro) {
        case "bajo":
            porcentajeAhorro = 0.1;
            break;
        case "medio":
            porcentajeAhorro = 0.25;
            break;
        case "alto":
            porcentajeAhorro = 0.5;
            break;
    }
}

// Función para determinar el perfil de inversor del usuario
function determinarPerfil() {
    decisionInvertir = prompt("¿Desea invertir el monto ahorrado? (Si - No)").trim().toLowerCase();
    while (decisionInvertir !== "si" && decisionInvertir !== "no") {
        alert("Por favor, ingrese 'Si' o 'No'.");
        decisionInvertir = prompt("¿Desea invertir el monto ahorrado? (Si - No)").trim().toLowerCase();
    }

    if (decisionInvertir === "no") {
        alert("El usuario ha elegido no invertir el monto ahorrado.");
        return;
    }

    alert("Los perfiles de inversión son: Conservador (menor riesgo, menor rendimiento), Moderado (riesgo medio, rendimiento medio), Agresivo (mayor riesgo, mayor rendimiento).");

    let perfilInversor = prompt("¿Cuál es su perfil de inversor? (Conservador - Moderado - Agresivo)").trim().toLowerCase();
    while (perfilInversor !== "conservador" && perfilInversor !== "moderado" && perfilInversor !== "agresivo") {
        alert("Por favor, ingrese un perfil válido (Conservador - Moderado - Agresivo).");
        perfilInversor = prompt("¿Cuál es su perfil de inversor? (Conservador - Moderado - Agresivo)").trim().toLowerCase();
    }

    let ahorroEsperado = ingresosTotales * porcentajeAhorro;
    let ahorroEfectivo = ingresosTotales - gastosTotales;
    montoInvertir = Math.max(ahorroEsperado, ahorroEfectivo);  // Usar el mayor valor entre ahorro del mes y ahorro esperado

    inversiones = diversificarCartera(montoInvertir, perfilInversor);

    alert("Aprete el botón 'Mostrar Resumen' para ver el resumen financiero.");
}

// Función que devuelve las inversiones recomendadas basadas en el perfil del inversor
function diversificarCartera(monto, perfil) {
    let inversiones = [];
    if (perfil === "conservador") {
        inversiones.push(`Plazo Fijo: $${(monto * 0.6).toFixed(2)}`);
        inversiones.push(`Bonos Soberanos: $${(monto * 0.4).toFixed(2)}`);
    } else if (perfil === "moderado") {
        inversiones.push(`Plazo Fijo: $${(monto * 0.4).toFixed(2)}`);
        inversiones.push(`Bonos Soberanos: $${(monto * 0.3).toFixed(2)}`);
        inversiones.push(`Fondo Común de Inversión: $${(monto * 0.2).toFixed(2)}`);
        inversiones.push(`Acciones de Empresas: $${(monto * 0.1).toFixed(2)}`);
    } else if (perfil === "agresivo") {
        inversiones.push(`Plazo Fijo: $${(monto * 0.2).toFixed(2)}`);
        inversiones.push(`Bonos Soberanos: $${(monto * 0.2).toFixed(2)}`);
        inversiones.push(`Fondo Común de Inversión: $${(monto * 0.3).toFixed(2)}`);
        inversiones.push(`Acciones de Empresas: $${(monto * 0.3).toFixed(2)}`);
    }
    return inversiones;
}

// Función para mostrar un resumen financiero con los ingresos, gastos y ahorro esperado
function mostrarResumen() {
    let ahorroEsperado = ingresosTotales * porcentajeAhorro;
    let ahorroEfectivo = ingresosTotales - gastosTotales;
    let mensajeAhorro = ahorroEfectivo >= ahorroEsperado ? "Usted ha ahorrado correctamente." : "Usted ha gastado más de lo que correspondía, por consiguiente no ha cumplido su meta de ahorro.";
    let decisionInvertirTexto = decisionInvertir === "si" ? "El usuario ha decidido invertir su ahorro." : "El usuario ha decidido no invertir su ahorro.";

    let resumen = `Resumen Financiero:
    - Ingresos Totales: $${ingresosTotales}
    - Gastos Totales: $${gastosTotales}
    - Ahorro del Mes: $${ahorroEfectivo}
    - Ahorro Esperado: $${ahorroEsperado}
    - ${mensajeAhorro}`;
    if (decisionInvertir === "si") {
        resumen += `\n${decisionInvertirTexto}\nCartera de Inversión:\n - ${inversiones.join("\n - ")}`;
    } else {
        resumen += `\n${decisionInvertirTexto}`;
    }
    
    // Llamar a la función para imprimir el resumen en la consola
    imprimirResumen();

    // Mostrar el resumen en un alert
    alert(resumen);
}

// Función para imprimir el resumen en la consola
function imprimirResumen() {
    let ahorroEsperado = ingresosTotales * porcentajeAhorro;
    let ahorroEfectivo = ingresosTotales - gastosTotales;
    let mensajeAhorro = ahorroEfectivo >= ahorroEsperado ? "Usted ha ahorrado correctamente." : "Usted ha gastado más de lo que correspondía, por consiguiente no ha cumplido su meta de ahorro.";
    let decisionInvertirTexto = decisionInvertir === "si" ? "El usuario ha decidido invertir su ahorro." : "El usuario ha decidido no invertir su ahorro.";

console.log(`Resumen Financiero:
    - Ingresos Totales: $${ingresosTotales}
    - Gastos Totales: $${gastosTotales}
    - Ahorro del Mes: $${ahorroEfectivo}
    - Ahorro Esperado: $${ahorroEsperado}
    - ${mensajeAhorro}`);

    if (decisionInvertir === "si") {
        console.log(`${decisionInvertirTexto}
        Cartera de Inversión:
        - ${inversiones.join("\n - ")}`);
    } else {
        console.log(decisionInvertirTexto);
    }
}