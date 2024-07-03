document.addEventListener("DOMContentLoaded", function () {
    inicializarPagina();
});

// Función para inicializar la página de Contacto y Soporte
function inicializarPagina() {
    const contenido = document.getElementById("contenido_contacto_soporte");
    contenido.innerHTML = `
        <h2 id="contactoSoporte">Contacto y Soporte</h2>
        <form id="contactForm">
            <h3>Formulario de Contacto</h3>
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required>
            <br>
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required>
            <br>
            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
            <br>
            <button type="submit">Enviar</button>
        </form>
        <div id="faq">
            <h3 id="preguntasFrecuentesFAQ">Preguntas Frecuentes (FAQ)</h3>
            <div class="faq-item">
                <h4>¿Cómo uso FinanzApp?</h4>
                <p>FinanzApp es fácil de usar. Simplemente ingresa tus datos financieros y sigue tus progresos.</p>
            </div>
            <div class="faq-item">
                <h4>¿Es seguro ingresar mis datos?</h4>
                <p>Sí, todos tus datos están seguros y protegidos con encriptación de nivel bancario.</p>
            </div>
            <div class="faq-item">
                <h4>¿Puedo cambiar mis metas de ahorro?</h4>
                <p>Sí, puedes ajustar tus metas de ahorro en cualquier momento desde la sección de Metas de Ahorro.</p>
            </div>
            <div class="faq-item">
                <h4>¿Que pasa si me equivoco al cargar un monto?</h4>
                <p>En la parte de abajo de la ventana de Test de Finanzas, tenes un botón rojo con la leyenda "Borrar Datos", que te permite borrar tus montos cargados.</p>
            </div>
            <div class="faq-item">
                <h4>¿Pueden ayudarme con información y asesoramiento específico?</h4>
                <p>Si, puedes contactar con nuestro equipo de asesores y obtener asesoramiento personalizado. ¡Gracias por usar FinanzApp</p>
            </div>
        </div>
    `;

    aplicarEstilos();

    // Funciones y Eventos para el formulario de Contacto y Soporte 
    document
        .getElementById("contactForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            enviarFormulario();
        });
}

function enviarFormulario() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log(`Nombre: ${name}`);
    console.log(`Correo Electrónico: ${email}`);
    console.log(`Mensaje: ${message}`);

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Formulario enviado con éxito. Nos pondremos en contacto pronto.",
        showConfirmButton: false,
        timer: 3000
    });

    document.getElementById("contactForm").reset();
}

// Estilos para Contacto y Soporte
function aplicarEstilos() {
    const contenido = document.getElementById("contenido_contacto_soporte");
    contenido.style.margin = "20px";

    const form = document.getElementById("contactForm");
    form.style.backgroundColor = "#fff";
    form.style.border = "1px solid #ccc";
    form.style.borderRadius = "8px";
    form.style.padding = "20px";
    form.style.width = "100%";
    form.style.maxWidth = "600px";
    form.style.margin = "0 auto";
    form.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";

    const contactoSoporte = document.getElementById('contactoSoporte');
    contactoSoporte.style.color = "#2c3e50";
    contactoSoporte.style.fontSize = "32px";
    contactoSoporte.style.fontWeight = "bold";
    contactoSoporte.style.marginBottom = "10px";

    const formH3 = form.querySelector("h3");
    formH3.style.color = "#2c3e50";
    formH3.style.marginBottom = "20px";

    const labels = form.querySelectorAll("label");
    labels.forEach((label) => {
        label.style.display = "block";
        label.style.marginBottom = "5px";
        label.style.color = "#2c3e50";
        label.style.textAlign = "left";
    });

    const inputs = form.querySelectorAll(
        'input[type="text"], input[type="email"], textarea'
    );

    inputs.forEach((input) => {
        input.style.width = "calc(100% - 22px)";
        input.style.padding = "10px";
        input.style.marginBottom = "10px";
        input.style.border = "1px solid #ccc";
        input.style.borderRadius = "4px";
    });

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.style.backgroundColor = "#3498db";
    submitButton.style.color = "#fff";
    submitButton.style.border = "none";
    submitButton.style.padding = "15px 30px";
    submitButton.style.fontSize = "16px";
    submitButton.style.borderRadius = "8px";
    submitButton.style.cursor = "pointer";

    const faq = document.getElementById("faq");
    faq.style.marginTop = "40px";

    const faqItems = faq.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
        item.style.backgroundColor = "#fff";
        item.style.border = "1px solid #ccc";
        item.style.borderRadius = "8px";
        item.style.padding = "20px";
        item.style.margin = "10px 25vw";
        item.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    });

    const preguntasFrecuentesFAQ = document.getElementById('preguntasFrecuentesFAQ');
    preguntasFrecuentesFAQ.style.color = "#2c3e50";
    preguntasFrecuentesFAQ.style.fontSize = "18px";
    preguntasFrecuentesFAQ.style.fontWeight = "bold";
    preguntasFrecuentesFAQ.style.marginBottom = "10px";

    const faqPs = faq.querySelectorAll("p");
    faqPs.forEach((p) => {
        p.style.color = "#333";
        p.style.textAlign = "center";
        p.style.margin = "0";
    });
}