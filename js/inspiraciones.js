document.addEventListener("DOMContentLoaded", function() {
    inicializarPagina();
});

// Función para inicializar la página de Inspiraciones
function inicializarPagina() {
    const contenido = document.getElementById("contenido_inspiraciones");
    contenido.innerHTML = `
        <h2>Conceptos Financieros</h2>
        <div id="conceptosFinancieros">
            <h3>Ingresos</h3>
            <p>Los ingresos son todas las <strong>entradas de dinero</strong> que recibes, ya sea por tu trabajo, inversiones, alquileres, etc.</p>
            <h3>Gastos Fijos</h3>
            <p>Los gastos fijos son aquellos que se <strong>repiten regularmente</strong> y cuyo monto suele ser el mismo cada mes, como el alquiler, la hipoteca, el pago del auto, servicios, etc.</p>
            <h3>Gastos Variables</h3>
            <p>Los gastos variables son aquellos que <strong>pueden cambiar de un mes a otro</strong>, como comida, entretenimiento, ropa, etc.</p>
            <h3>Nivel de Ahorro</h3>
            <p>El nivel de ahorro es el <strong>porcentaje de tus ingresos que decides guardar</strong> para el futuro. Aquí están los porcentajes recomendados según tu nivel de ahorro:</p>
            <ul class="no-vinetas">
                <li><strong>Bajo:</strong> 10% de tus ingresos</li>
                <li><strong>Medio:</strong> 25% de tus ingresos</li>
                <li><strong>Alto:</strong> 50% de tus ingresos</li>
            </ul>
            <h3>Tipos de Inversor</h3>
            <p>Existen varios tipos de inversores, desde conservadores hasta agresivos. Un inversor <strong>conservador</strong> prefiere inversiones seguras con menores rendimientos, mientras que un inversor <strong>agresivo</strong> está dispuesto a asumir más riesgos para obtener mayores ganancias.</p>
        </div>
        <button id="btnMasConceptos">Seguí aprendiendo</button>
        <h2>Aprendé de los mejores</h2>
        <div id="carritoCompras">
            <div id="productos" class="productos-grid">
            </div>
            <h3>Carrito</h3>
            <div id="listaCarrito"></div>
            <button id="btnVaciarCarrito">Vaciar Carrito</button>
        </div>
        <h2>Inspiraciones Financieras</h2>
        <div id="listaInspiraciones"></div>
    `;

    mostrarProductos();
    mostrarCarrito();
    mostrarInspiraciones();
    aplicarEstilos();

    document.getElementById('btnVaciarCarrito').addEventListener('click', vaciarCarrito);
}

// Libros de Finanzas Personales
const productos = [
    { id: 1, nombre: "Padre Rico, Padre Pobre - Robert Kiyosaki", precio: 10000, imagen: "padre_rico_padre_pobre.jpg" },
    { id: 2, nombre: "El Hombre Más Rico de Babilonia - George S. Clason", precio: 15000, imagen: "hombre_mas_rico_babilonia.jpg" },
    { id: 3, nombre: "Piense y Hágase Rico - Napoleon Hill", precio: 2000, imagen: "piense_y_hagase_rico.jpg" },
    { id: 4, nombre: "El Inversor Inteligente - Benjamin Graham", precio: 25000, imagen: "inversor_inteligente.jpg" },
    { id: 5, nombre: "Los Secretos de la Mente Millonaria - T. Harv Eker", precio: 1200, imagen: "secretos_mente_millonaria.jpg" },
    { id: 6, nombre: "La Transformación Total de su Dinero - Dave Ramsey", precio: 18000, imagen: "transformacion_total_dinero.jpg" }
];

// Función para mostrar los productos
function mostrarProductos() {
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = productos.map(producto => `
        <div class="producto">
            <img src="/src/img/${producto.imagen}" alt="${producto.nombre}">
            <p>${producto.nombre}</p>
            <p><strong>Precio:</strong> $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        </div>
    `).join('');
}

// Función para añadir un producto al carrito
function agregarAlCarrito(idProducto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = productos.find(p => p.id === idProducto);
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Función para mostrar el carrito
function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = carrito.map(producto => `
        <div class="productoCarrito">
            <p>${producto.nombre} - Precio: $${producto.precio}</p>
        </div>
    `).join('');

// Calcular el total del carrito
    const totalCarrito = carrito.reduce((total, producto) => total + producto.precio, 0);

// Muestra el total del carrito
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('totalCarrito');
    totalDiv.innerHTML = `<p><strong>Total del carrito: $${totalCarrito}</strong></p>`;
    listaCarrito.appendChild(totalDiv);

// Para que al agregar un producto al carrito, mantenga el estilo
    aplicarEstilos();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
}

// Texto para inspiraciones
const inspiraciones = [
    "<strong>El dinero no puede comprar la felicidad, pero es un excelente plan de ahorro.</strong> - Anónimo",
    "<strong>No ahorres lo que queda después de gastar, gasta lo que queda después de ahorrar.</strong> - Warren Buffett",
    "<strong>La mejor inversión que puedes hacer es en ti mismo.</strong> - Warren Buffett",
    "<strong>No pongas todos los huevos en la misma canasta.</strong> - Refrán popular",
    "<strong>El éxito financiero se trata de tomar decisiones inteligentes, no de ganar más dinero.</strong> - Dave Ramsey"
];

// Función para mostrar las inspiraciones
function mostrarInspiraciones() {
    const listaInspiraciones = document.getElementById('listaInspiraciones');
    listaInspiraciones.innerHTML = inspiraciones.map((inspiracion, index) => `
        <div class="inspiracion-item">
            <p>${index + 1}. ${inspiracion}</p>
        </div>
    `).join('');
}

// Estilos
function aplicarEstilos() {
    // Estilos para productos y carrito
    const productos = document.querySelectorAll('.producto, .productoCarrito');
    productos.forEach(producto => {
        producto.style.backgroundColor = '#fff';
        producto.style.border = '1px solid #ccc';
        producto.style.borderRadius = '8px';
        producto.style.padding = '20px';
        producto.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        producto.style.textAlign = 'center';
        producto.style.margin = '10px auto';
    });

    // Estilos para imágenes en el carrito
    const imagenesCarrito = document.querySelectorAll('.productoCarrito img');
    imagenesCarrito.forEach(imagen => {
        imagen.style.marginRight = '20px';
    });

    // Estilos para detalles de productos en el carrito
    const detallesProducto = document.querySelectorAll('.productoCarrito p');
    detallesProducto.forEach(detalle => {
        detalle.style.textAlign = 'left';
    });

    // Estilos para listaCarrito
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.style.display = 'flex';
    listaCarrito.style.flexDirection = 'column';
    listaCarrito.style.alignItems = 'left';
    
    // Asegurando estilos para totalCarrito
    const totalCarritoDiv = document.querySelector('.totalCarrito');
    if (totalCarritoDiv) {
        totalCarritoDiv.style.backgroundColor = '#fff';
        totalCarritoDiv.style.border = '1px solid #ccc';
        totalCarritoDiv.style.borderRadius = '8px';
        totalCarritoDiv.style.padding = '20px';
        totalCarritoDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        totalCarritoDiv.style.textAlign = 'center';
        totalCarritoDiv.style.margin = '10px auto';
    }

    // Estilos para inspiraciones
    const inspiracionesItems = document.querySelectorAll('.inspiracion-item');
    inspiracionesItems.forEach(item => {
        item.style.backgroundColor = '#fff';
        item.style.fontStyle = 'italic';
        item.style.border = '1px solid #ccc';
        item.style.borderRadius = '8px';
        item.style.padding = '20px';
        item.style.margin = '10px auto';
        item.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        item.style.textAlign = 'center';
        item.style.maxWidth = '50%';
    });

    // Estilos para títulos
    const titulos = document.querySelectorAll('h2, h3');
    titulos.forEach(titulo => {
        titulo.style.color = '#2c3e50';
        titulo.style.fontSize = '20px';
        titulo.style.marginTop = '10px';
    });

    // Estilos para h2
    const h2s = document.querySelectorAll('h2');
    h2s.forEach(h2 => {
        h2.style.fontSize = '24px';
        h2.style.marginTop = '20px';
    });

    // Estilos para h3
    const h3s = document.querySelectorAll('h3');
    h3s.forEach(h3 => {
        h3.style.fontSize = '20px';
        h3.style.marginTop = '20px';
        h3.style.marginBottom = '10px';
        h3.style.color = '#2c3e50';
        h3.style.textAlign = 'center';
    });

    // Estilos para conceptos financieros
    const conceptosFinancieros = document.getElementById('conceptosFinancieros');
    conceptosFinancieros.style.width = '50%';
    conceptosFinancieros.style.margin = '0 auto';
    conceptosFinancieros.style.textAlign = 'justify';

    // Estilos para listas y párrafos
    const uls = document.querySelectorAll('ul');
    uls.forEach(ul => {
        ul.style.listStyleType = 'none';
        ul.style.margin = '0';
        ul.style.padding = '0';
    });

    const ps = document.querySelectorAll('p');
    ps.forEach(p => {
        p.style.margin = '10px 0';
        p.style.textAlign = 'left';
    });

    // Estilos para divs de resultados
    const resultadoDivs = document.querySelectorAll('#sumatoriaIngresos, #sumatoriaGastos, #evaluacionAhorro, #resultadosPerfil, #resumenFinanciero');
    resultadoDivs.forEach(resultado => {
        resultado.style.margin = '10px 150px';
        resultado.style.padding = '10px';
        resultado.style.border = '1px solid #ccc';
        resultado.style.borderRadius = '8px';
        resultado.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        resultado.style.backgroundColor = '#fff';
    });

    // Estilos para carrito de compras
    const carritoCompras = document.getElementById('carritoCompras');
    carritoCompras.style.width = '50%';
    carritoCompras.style.margin = '20px auto';
    carritoCompras.style.textAlign = 'center';
    carritoCompras.style.padding = '20px';
    carritoCompras.style.border = '1px solid #ccc';
    carritoCompras.style.borderRadius = '8px';
    carritoCompras.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

    // Estilos para grid de productos
    const productosGrid = document.querySelector('.productos-grid');
    productosGrid.style.display = 'grid';
    productosGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    productosGrid.style.gap = '10px';

    const btnMasConceptos = document.getElementById('btnMasConceptos');

    btnMasConceptos.addEventListener('click', () => {
        Swal.fire({
            title: "<strong>Aprendé de los que saben!</strong>",
            icon: "success",
            html: `
                Conocé más en el <b>sitio web</b> de
                <a href="https://www.nerdwallet.com" target="_blank">NerdWallet</a>.
            `,
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: `
                <i class="fa fa-thumbs-up"></i> Continuar en FinanzApp
            `,
            confirmButtonAriaLabel: "FinanzApp",
            cancelButtonText: `
                <i class="fa fa-thumbs-down"></i>
            `,
            cancelButtonAriaLabel: "Thumbs down"
            });
    });

    // Estilos para botones
    const botones = document.querySelectorAll('button');
    botones.forEach(boton => {
        boton.style.backgroundColor = '#3498db';
        boton.style.color = '#fff';
        boton.style.border = 'none';
        boton.style.padding = '10px 15px';
        boton.style.fontSize = '13px';
        boton.style.margin = '10px';
        boton.style.borderRadius = '8px';
        boton.style.cursor = 'pointer';
    });

    // Estilos para botón de vaciado del carrito
    const btnVaciarCarrito = document.getElementById('btnVaciarCarrito');
    if (btnVaciarCarrito) {
        btnVaciarCarrito.style.backgroundColor = '#e74c3c';
    }
}

