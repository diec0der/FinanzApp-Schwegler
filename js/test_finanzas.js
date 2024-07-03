const VACIO = "";
let ingresos = [];
let gastosFijos = [];
let gastosVariables = [];
let nivelAhorro;
let porcentajeAhorro;
let perfilInversor;
let montoInvertir;
let inversiones = [];

// Definir el SweetAlert con botones personalizados
const swalWithCustomButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
    },
    buttonsStyling: false
});

// Función para capturar ingresos del usuario
function capturarIngresos() {
    swalWithCustomButtons.fire({
        title: "¿Cuál es el monto de ingresos que has tenido este mes? (Ej: 5000)",
        input: "text",
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Guardar",
        showLoaderOnConfirm: true,
        preConfirm: (ingreso) => {
            if (ingreso == VACIO || isNaN(ingreso) || Number(ingreso) <= 0) {
                Swal.showValidationMessage("Por favor, ingrese un valor numérico válido.");
                return false;
            }
            return ingreso;
        }
    }).then((result) => {
        if (result.isConfirmed) {
            ingresos.push(Number(result.value));
            mostrarHistorialIngresos();
            mostrarSumatoriaIngresos();
        }
    });
}

// Función para capturar gastos fijos del usuario
function capturarGastosFijos() {
    swalWithCustomButtons.fire({
        title: "¿Cuál es el monto de los gastos fijos que has tenido este mes? (Ej: 1000)",
        input: "text",
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Guardar",
        showLoaderOnConfirm: true,
        preConfirm: (gastoFijo) => {
            if (gastoFijo == VACIO || isNaN(gastoFijo) || Number(gastoFijo) <= 0) {
                Swal.showValidationMessage("Por favor, ingrese un valor numérico válido.");
                return false;
            }
            return gastoFijo;
        }
    }).then((result) => {
        if (result.isConfirmed) {
            gastosFijos.push(Number(result.value));
            mostrarHistorialGastos();
            mostrarSumatoriaGastos();
        }
    });
}

// Función para capturar gastos variables del usuario
function capturarGastosVariables() {
    swalWithCustomButtons.fire({
        title: "¿Cuál es el monto de los gastos variables que has tenido este mes? (Ej: 500)",
        input: "text",
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Guardar",
        showLoaderOnConfirm: true,
        preConfirm: (gastoVariable) => {
            if (gastoVariable == VACIO || isNaN(gastoVariable) || Number(gastoVariable) <= 0) {
                Swal.showValidationMessage("Por favor, ingrese un valor numérico válido.");
                return false;
            }
            return gastoVariable;
        }
    }).then((result) => {
        if (result.isConfirmed) {
            gastosVariables.push(Number(result.value));
            mostrarHistorialGastos();
            mostrarSumatoriaGastos();
        }
    });
}


// Función para mostrar el historial de ingresos
function mostrarHistorialIngresos() {
    const historialIngresos = document.getElementById('historialIngresos');
    historialIngresos.innerHTML = ingresos.map(ingreso => `<li>Ingreso: $${ingreso.toFixed(2)}</li>`).join('');
}

// Función para mostrar la sumatoria de ingresos
function mostrarSumatoriaIngresos() {
    const sumatoriaIngresos = document.getElementById('sumatoriaIngresos');
    const totalIngresos = ingresos.reduce((acc, ingreso) => acc + ingreso, 0);
    sumatoriaIngresos.innerHTML = `<strong>Sumatoria de Ingresos: $${totalIngresos.toFixed(2)}</strong>`;
}

// Función para mostrar el historial de gastos
function mostrarHistorialGastos() {
    const historialGastos = document.getElementById('historialGastos');
    historialGastos.innerHTML = `
        ${gastosFijos.map(gasto => `<li>Gasto Fijo: $${gasto.toFixed(2)}</li>`).join('')}
        ${gastosVariables.map(gasto => `<li>Gasto Variable: $${gasto.toFixed(2)}</li>`).join('')}
    `;
}

// Función para mostrar la sumatoria de gastos
function mostrarSumatoriaGastos() {
    const sumatoriaGastos = document.getElementById('sumatoriaGastos');
    const totalGastosFijos = gastosFijos.reduce((acc, gasto) => acc + gasto, 0);
    const totalGastosVariables = gastosVariables.reduce((acc, gasto) => acc + gasto, 0);
    const totalGastos = totalGastosFijos + totalGastosVariables;
    sumatoriaGastos.innerHTML = `
        <p><strong>Sumatoria de Gastos Fijos: $${totalGastosFijos.toFixed(2)}</strong></p>
        <p><strong>Sumatoria de Gastos Variables: $${totalGastosVariables.toFixed(2)}</strong></p>
        <p><strong>Sumatoria de Gastos Totales: $${totalGastos.toFixed(2)}</strong></p>
    `;
}

// Función para establecer metas de ahorro
function establecerMetaAhorro(nivel) {
    switch (nivel) {
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
    nivelAhorro = nivel;
    evaluarAhorro();
}

// Función para evaluar el ahorro
function evaluarAhorro() {
    const totalIngresos = ingresos.reduce((acc, ingreso) => acc + ingreso, 0);
    const totalGastos = gastosFijos.reduce((acc, gasto) => acc + gasto, 0) + gastosVariables.reduce((acc, gasto) => acc + gasto, 0);
    const ahorroEsperado = totalIngresos * porcentajeAhorro;
    const ahorroReal = totalIngresos - totalGastos;
    const evaluacionAhorro = document.getElementById('evaluacionAhorro');
    evaluacionAhorro.innerHTML = `
        <p>Ahorro Esperado: $${ahorroEsperado.toFixed(2)}</p>
        <p>Ahorro Real: $${ahorroReal.toFixed(2)}</p>
        <p>${ahorroReal >= ahorroEsperado ? "<strong>Usted ha ahorrado correctamente.</strong>" : "<strong>Usted ha gastado más de lo que correspondía, por consiguiente no ha cumplido su meta de ahorro.</strong>"}</p>
    `;
}

// Función para determinar el perfil de inversor del usuario
function determinarPerfil(perfil) {
    perfilInversor = perfil;

    let ahorroEfectivo = ingresos.reduce((acc, ingreso) => acc + ingreso, 0) - (gastosFijos.reduce((acc, gasto) => acc + gasto, 0) + gastosVariables.reduce((acc, gasto) => acc + gasto, 0));
    montoInvertir = ahorroEfectivo

    inversiones = diversificarCartera(montoInvertir, perfilInversor);

    mostrarResultadosPerfil();
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
// Función para mostrar los resultados del perfil de inversor
function mostrarResultadosPerfil() {
    const totalInversiones = inversiones.reduce((acc, inversion) => acc + parseFloat(inversion.split('$')[1]), 0);
    const resultadosPerfil = document.getElementById('resultadosPerfil');
    resultadosPerfil.innerHTML = `
        <h3>Resultados del Perfil</h3>
        <p>Perfil de Inversor: ${perfilInversor.charAt(0).toUpperCase() + perfilInversor.slice(1)}</p>
        <h3>Inversiones Recomendadas</h3>
        <ul>
            ${inversiones.map(inversion => `<li>${inversion}</li>`).join('')}
        </ul>
        <p><strong>Sumatoria de Inversiones: $${totalInversiones.toFixed(2)}</strong></p>
    `;
}

// Función para mostrar el resumen financiero
function mostrarResumen() {
    const totalIngresos = ingresos.reduce((acc, ingreso) => acc + ingreso, 0);
    const totalGastos = gastosFijos.reduce((acc, gasto) => acc + gasto, 0) + gastosVariables.reduce((acc, gasto) => acc + gasto, 0);
    const ahorroEsperado = totalIngresos * porcentajeAhorro;
    const ahorroReal = totalIngresos - totalGastos;
    const resumenFinanciero = document.getElementById('resumenFinanciero');
    resumenFinanciero.innerHTML = `
        <h3>Resumen Financiero</h3>
        <p>Ingresos Totales: $${totalIngresos.toFixed(2)}</p>
        <p>Gastos Totales: $${totalGastos.toFixed(2)}</p>
        <p>Ahorro del Mes: $${ahorroReal.toFixed(2)}</p>
        <p>Ahorro Esperado: $${ahorroEsperado.toFixed(2)}</p>
        <p><strong>Inversiones Recomendadas</strong></p>
        <ul>
            ${inversiones.map(inversion => `<li>${inversion}</li>`).join('')}
        </ul>
    `;
}
// Función para refrescar la página
function refrescarPagina() {
    swalWithCustomButtons.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, ¡borrar datos!",
        cancelButtonText: "No, cancelar",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithCustomButtons.fire({
                title: "¡Borrado!",
                text: "Tus datos han sido borrados.",
                icon: "success"
            }).then(() => {
                location.reload();
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithCustomButtons.fire({
                title: "Cancelado",
                text: "Tus datos están a salvo :)",
                icon: "error"
            });
        }
    });
}

// Llamar a la función para refrescar la página
document.addEventListener('DOMContentLoaded', inicializarPagina);

// Inicializar la página de Test de Finanzas
function inicializarPagina() {
    const contenido = document.getElementById('contenido_test_finanzas');
    contenido.innerHTML = `
        <h2 id="testFinanzas">Test de Finanzas Personales</h2>
        <h3>Ingresos</h3>
        <button id="btnIngresos" onclick="capturarIngresos()">Añadir Ingreso</button>
        <ul id="historialIngresos"></ul>
        <p id="sumatoriaIngresos"></p>
        <h3>Gastos</h3>
        <button id="btnGastosFijos" onclick="capturarGastosFijos()">Añadir Gasto Fijo</button>
        <button id="btnGastosVariables" onclick="capturarGastosVariables()">Añadir Gasto Variable</button>
        <ul id="historialGastos"></ul>
        <div id="sumatoriaGastos"></div>
        <h3>Metas de Ahorro</h3>
        <button id="btnAhorroBajo" onclick="establecerMetaAhorro('bajo')">Ahorro Bajo</button>
        <button id="btnAhorroMedio" onclick="establecerMetaAhorro('medio')">Ahorro Medio</button>
        <button id="btnAhorroAlto" onclick="establecerMetaAhorro('alto')">Ahorro Alto</button>
        <div id="evaluacionAhorro"></div>
        <h3>Perfil de Inversor</h3>
        <button id="btnPerfilConservador" onclick="determinarPerfil('conservador')">Conservador</button>
        <button id="btnPerfilModerado" onclick="determinarPerfil('moderado')">Moderado</button>
        <button id="btnPerfilAgresivo" onclick="determinarPerfil('agresivo')">Agresivo</button>
        <div id="resultadosPerfil"></div>
        <h3>Resumen Financiero</h3>
        <button id="btnMostrarResumen" onclick="mostrarResumen()">Mostrar Resumen</button>
        <div id="resumenFinanciero"></div>
        <button id="btnRefrescar" onclick="refrescarPagina()">Borrar Datos</button>
    `;

    // Estilos para los botones
    const btnIngresos = document.getElementById('btnIngresos');
    const btnGastosFijos = document.getElementById('btnGastosFijos');
    const btnGastosVariables = document.getElementById('btnGastosVariables');
    const btnAhorroBajo = document.getElementById('btnAhorroBajo');
    const btnAhorroMedio = document.getElementById('btnAhorroMedio');
    const btnAhorroAlto = document.getElementById('btnAhorroAlto');
    const btnPerfilConservador = document.getElementById('btnPerfilConservador');
    const btnPerfilModerado = document.getElementById('btnPerfilModerado');
    const btnPerfilAgresivo = document.getElementById('btnPerfilAgresivo');
    const btnMostrarResumen = document.getElementById('btnMostrarResumen');
    const btnRefrescar = document.getElementById('btnRefrescar');

    const buttons = [
        btnIngresos, btnGastosFijos, btnGastosVariables,
        btnAhorroBajo, btnAhorroMedio, btnAhorroAlto,
        btnPerfilConservador, btnPerfilModerado, btnPerfilAgresivo,
        btnMostrarResumen, btnRefrescar
    ];
    
    buttons.forEach(button => {
        button.style.backgroundColor = "#3498db";
        button.style.color = "#fff";
        button.style.border = "none";
        button.style.padding = "10px 15px";
        button.style.fontSize = "13px";
        button.style.margin = "10px";
        button.style.borderRadius = "8px";
        button.style.cursor = "pointer";
        btnRefrescar.style.backgroundColor = "#e74c3c";
    });

    // Estilos para los títulos (h2, h3 y textos)
    const titulos = document.querySelectorAll('h2, h3');
    titulos.forEach(titulo => {
        titulo.style.color = "#2c3e50";
        titulo.style.fontSize = "20px";
        titulo.style.marginTop = "10px";
    });
    const testFinanzas = document.getElementById('testFinanzas');
        testFinanzas.style.fontSize = "25px";
        testFinanzas.style.fontWeight = "bold";

    const historialGastos = document.getElementById('historialGastos');
        historialGastos.style.padding = "10px";

    const sumatoriaGastos = document.getElementById('sumatoriaGastos');
        sumatoriaGastos.style.padding = "10px";

    const resultadosPerfil = document.getElementById('resultadosPerfil');
        resultadosPerfil.style.padding = "10px";

    const resumenFinanciero = document.getElementById('resumenFinanciero');
        resumenFinanciero.style.padding = "10px";

    // Estilos para las listas y párrafos
    const uls = document.querySelectorAll('ul');
    const ps = document.querySelectorAll('p');
    uls.forEach(ul => {
        ul.style.listStyleType = "none";
        ul.style.margin = "0";
        ul.style.padding = "0";
    });
    ps.forEach(p => {
        p.style.margin = "10px 0";
    });

    // Estilos para los divs de resultados
    const resultados = document.querySelectorAll('#sumatoriaIngresos, #sumatoriaGastos, #evaluacionAhorro, #resultadosPerfil, #resumenFinanciero');
    resultados.forEach(resultado => {
        resultado.style.margin = "10px 35vw";
        resultado.style.padding = "10px";
        resultado.style.border = "1px solid #ccc";
        resultado.style.borderRadius = "8px";
        resultado.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
        resultado.style.backgroundColor = "#fff";
    });
}