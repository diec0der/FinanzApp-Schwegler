document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;

    const header = document.createElement('header');
    header.id = 'header';
    header.innerHTML = `
        <h1><a href="index.html" style="text-decoration: none; color: inherit;">€ FinanzApp</a></h1>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="test_finanzas.html">Test de Finanzas</a></li>
                <li><a href="inspiraciones.html">Inspiraciones</a></li>
                <li><a href="contacto_soporte.html">Contacto y Soporte</a></li>
            </ul>
        </nav>
    `;
    body.prepend(header);

    const footer = document.createElement('footer');
    footer.innerHTML = `
        <span id="fecha"></span>
        <p>© By Diego Schwegler. Todos los derechos reservados.</p>
    `;
    body.appendChild(footer);

    document.getElementById('fecha').innerText = obtenerFechaLarga();
});

function obtenerFechaLarga() {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const hoy = new Date();
    return hoy.toLocaleDateString('es-ES', opciones);
}