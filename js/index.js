document.addEventListener("DOMContentLoaded", function() {
    inicializarPagina();
});

// Función para inicializar la página de inicio
async function inicializarPagina() {
    const contenido = document.getElementById("contenido_index");
    contenido.innerHTML = `
        <h2>Bienvenido a FinanzApp</h2>
        <div id="introduccion">
            <p>Bienvenido a <strong>FinanzApp</strong>, tu herramienta integral para gestionar tus finanzas personales. Acá vas a poder llevar un control detallado de tus ingresos y gastos, establecer metas de ahorro y descubrir tu perfil de inversor. ¡Comenzá hoy mismo a tomar el control de tus finanzas! Primero completá el test de finanzas, segundo, Francia... Y si, ¡Nos volvimo' a ilusionar!</p>
        </div>
        <div id="accesosDirectos">
            <button onclick="location.href='test_finanzas.html'">Test de Finanzas</button>
            <button onclick="location.href='inspiraciones.html'">Conceptos Financieros</button>
            <button onclick="location.href='contacto_soporte.html'">Preguntas Frecuentes</button>
        </div>
        <h3>Sobre Mí</h3>
        <div id="sobreMi">
            <img src="/src/img/diego_schwegler.jpg" alt="Diego Schwegler" id="fotoDiego">
            <p>Hola, soy Diego Schwegler. Director de Administración de la Dirección General de Rentas de la Provincia de Misiones, y apasionado por ayudar a la gente a manejar mejor sus finanzas personales. En este sitio, comparto mis conocimientos y herramientas que espero te sean útiles. ¡Vamos juntos por un futuro financiero más seguro y próspero!</p>
            <p>Nací y crecí en Misiones, donde he tenido el privilegio de desarrollar mi carrera profesional de Contador Público y actualmente Maestrando en Gestión Pública. Con más de 10 años de experiencia en el sector financiero y administrativo, he visto de primera mano los desafíos que enfrentan las personas y las empresas para gestionar sus finanzas de manera efectiva. Esta plataforma es mi manera de contribuir a la comunidad, proporcionando recursos accesibles y fáciles de entender para todos.</p>
            <p>En mi tiempo libre, disfruto de la lectura, especialmente libros sobre economía y desarrollo personal. También soy un entusiasta del deporte, especialmente el fútbol. La reciente victoria de Argentina en el campeonato del mundo es un testimonio de la perseverancia y el trabajo en equipo, cualidades que considero esenciales tanto en la vida personal como profesional.</p>
            <p>Mi objetivo con FinanzApp es crear una herramienta útil y práctica que puedas usar diariamente para mejorar tu salud financiera. Desde el seguimiento de tus gastos hasta la planificación de tus inversiones, cada funcionalidad ha sido diseñada pensando en tus necesidades. Espero que encuentres en FinanzApp un aliado en tu camino hacia la estabilidad y el crecimiento financiero.</p>
            <p>¡Gracias por visitar mi sitio y no dudes en contactarme si tienes alguna pregunta o necesitas asistencia! Estoy aquí para ayudarte.</p>
        </div>
        <h3>Mantenete Informado</h3>
        <div id="iframes-container" style="display: flex; justify-content: space-around; gap: 10px;">
            <iframe style="width: 30%; height: 260px; border-radius: 10px; box-shadow: 2px 4px 4px rgb(0 0 0 / 25%); border: 1px solid #bcbcbc; margin-top: 20px" src="https://dolarhoy.com/i/cotizaciones/dolar-blue" frameborder="0"></iframe>
            <iframe style="width: 30%; height: 260px; border-radius: 10px; box-shadow: 2px 4px 4px rgb(0 0 0 / 25%); border: 1px solid #bcbcbc; margin-top: 20px" src="https://dolarhoy.com/i/cotizaciones/dolar-bancos-y-casas-de-cambio" frameborder="0"></iframe>
            <iframe style="width: 30%; height: 260px; border-radius: 10px; box-shadow: 2px 4px 4px rgb(0 0 0 / 25%); border: 1px solid #bcbcbc; margin-top: 20px" src="https://dolarhoy.com/i/cotizaciones/dolar-mep" frameborder="0"></iframe>
        </div>
        <div id="noticiasFinancieras">
            <p>Las noticias de ahora...</p>
        </div>
    `;

    aplicarEstilos();
    await peticionNoticias();
}

// Estilos
function aplicarEstilos() {
    // Estilos para el contenedor de contenido
    const contenido = document.getElementById('contenido_index');
    contenido.style.display = 'flex';
    contenido.style.flexDirection = 'column';
    contenido.style.alignItems = 'center';
    contenido.style.justifyContent = 'center';
    contenido.style.minHeight = '100vh';
    contenido.style.padding = '20px';

    // Estilos para la introducción
    const introduccion = document.getElementById('introduccion');
    introduccion.style.backgroundColor = '#f9f9f9';
    introduccion.style.border = '1px solid #ccc';
    introduccion.style.borderRadius = '8px';
    introduccion.style.padding = '20px';
    introduccion.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    introduccion.style.textAlign = 'justify';
    introduccion.style.margin = '20px auto';
    introduccion.style.width = '50%';

    // Estilos para accesos directos
    const accesosDirectos = document.getElementById('accesosDirectos');
    accesosDirectos.style.display = 'flex';
    accesosDirectos.style.justifyContent = 'space-around';
    accesosDirectos.style.margin = '20px auto';
    accesosDirectos.style.width = '50%';

    // Estilos para botones
    const botones = document.querySelectorAll('button');
    botones.forEach(boton => {
        boton.style.backgroundColor = '#3498db';
        boton.style.color = '#fff';
        boton.style.border = 'none';
        boton.style.padding = '10px 20px';
        boton.style.fontSize = '16px';
        boton.style.margin = '10px 20px';
        boton.style.borderRadius = '8px';
        boton.style.cursor = 'pointer';
        boton.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });

    // Estilos para sección sobre mí
    const sobreMi = document.getElementById('sobreMi');
    sobreMi.style.display = 'flex';
    sobreMi.style.flexDirection = 'column';
    sobreMi.style.alignItems = 'center';
    sobreMi.style.backgroundColor = '#f9f9f9';
    sobreMi.style.border = '1px solid #ccc';
    sobreMi.style.borderRadius = '8px';
    sobreMi.style.padding = '20px';
    sobreMi.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    sobreMi.style.textAlign = 'justify';
    sobreMi.style.margin = '20px auto';
    sobreMi.style.width = '70%';

    const fotoDiego = document.getElementById('fotoDiego');
    fotoDiego.style.borderRadius = '50%';
    fotoDiego.style.width = '150px';
    fotoDiego.style.marginBottom = '20px';

    const h2s = document.querySelectorAll('h2');
    h2s.forEach(h2 => {
        h2.style.color = '#2c3e50';
        h2.style.fontSize = '36px';
        h2.style.marginTop = '40px';
        h2.style.textAlign = 'center';
    });

    const h3s = document.querySelectorAll('h3');
    h3s.forEach(h3 => {
        h3.style.color = '#2c3e50';
        h3.style.fontSize = '28px';
        h3.style.marginTop = '40px';
        h3.style.textAlign = 'center';
    });

    const ps = document.querySelectorAll('p');
    ps.forEach(p => {
        p.style.margin = '10px 0';
        p.style.textAlign = 'left';
    });
}

// Función para obtener noticias de la API
async function peticionNoticias() {
    const noticiasFinancieras = document.getElementById('noticiasFinancieras');
    const API_KEY = '379086b54d854c3b85ddaff6b1d5da10';
    const url = `https://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=${API_KEY}`;

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const data = datos.articles;

        for (const item of data) {
            const card = document.createElement('div');
            card.innerHTML = `
                <div class="noticia card">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">Fuente: <strong>${item.author || 'Desconocido'}</strong> </p>
                        <p class="card-text"><a href="${item.url}" target="_blank">Leer más</a></p>
                    </div>
                </div>
            `;
            noticiasFinancieras.appendChild(card);
        }

        // Aplicar estilos a las noticias
        const noticiasDivs = document.querySelectorAll('.noticia');
        noticiasDivs.forEach(noticia => {
            noticia.style.backgroundColor = '#fff';
            noticia.style.border = '1px solid #ccc';
            noticia.style.borderRadius = '8px';
            noticia.style.padding = '20px';
            noticia.style.margin = '10px 0';
            noticia.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            noticia.style.textAlign = 'left';
        });

        const noticiasH5 = document.querySelectorAll('.noticia .card-title');
        noticiasH5.forEach(h5 => {
            h5.style.color = '#2c3e50';
            h5.style.marginBottom = '10px';
        });

        const noticiasPs = document.querySelectorAll('.noticia .card-text');
        noticiasPs.forEach(p => {
            p.style.color = '#333';
        });

        const noticiasLinks = document.querySelectorAll('.noticia .card-text a');
        noticiasLinks.forEach(link => {
            link.style.color = '#3498db';
            link.style.textDecoration = 'none';
            link.style.fontWeight = 'bold';
        });

    } catch (error) {
        noticiasFinancieras.innerHTML = `<p>Error al cargar las noticias: ${error.message}</p>`;
    }
}

// Llamar a la función para cargar las noticias
peticionNoticias();