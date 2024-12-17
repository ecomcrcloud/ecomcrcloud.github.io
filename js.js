


document.addEventListener('DOMContentLoaded', () => {
    // Selección de elementos
    const bar = document.querySelector('.navegador');
    const navLinks = document.querySelectorAll('.nav a');
    const botonLinks = document.querySelectorAll('.boton a');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Función para manejar el scroll
    const handleScroll = () => {
        const scrolled = window.scrollY > 50;

        // Agregar o quitar clases dependiendo del scroll
        bar?.classList.toggle('scrolled', scrolled);
        navMenu?.classList.toggle('scrolled', scrolled); // Aplica la clase al menú
        navLinks.forEach(link => link.classList.toggle('scrolled', scrolled));
        botonLinks.forEach(link => link.classList.toggle('scrolled', scrolled));
    };

    // Evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Evento para mostrar/ocultar menú
    menuToggle?.addEventListener('click', () => {
        navMenu?.classList.toggle('show');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("vdHLvHbYiXtLFXxR_"); // Reemplaza con tu User ID de EmailJS

    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Captura los valores del formulario
        const formData = new FormData(form);

        // Envía los datos usando EmailJS
        emailjs.send("service_odfyi58", "template_g593kka", {
            company_name: formData.get("company-name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        })
        .then(() => {
            alert("Correo enviado exitosamente.");
            form.reset(); // Resetea el formulario
        })
        .catch((error) => {
            console.error("Error al enviar el correo:", error);
            alert("Hubo un problema al enviar el correo. Inténtalo más tarde.");
        });
    });
});

const themeToggler = document.querySelector(".theme-toggler");
// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-varibles');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})






