/* =====================================================
   EMAILJS
===================================================== */


const EMAILJS_PUBLIC_KEY = "kP_SMGOsmjnFczNND";
const EMAILJS_SERVICE_ID = "service_a7dupho";
const EMAILJS_TEMPLATE_ID = "template_8w8vzoh";


/* Inicializar EmailJS */

emailjs.init({

    publicKey: EMAILJS_PUBLIC_KEY

});



/* =====================================================
   FORMULARIO
===================================================== */

const contactForm =
    document.getElementById("contact-form");

const submitButton =
    document.getElementById("submit-button");

const formStatus =
    document.getElementById("form-status");



contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        submitButton.disabled = true;

        submitButton.textContent =
            "Enviando...";


        formStatus.textContent = "";



        emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            contactForm
        )


        .then(function() {

            formStatus.textContent =
                "✓ Mensaje enviado correctamente.";

            contactForm.reset();

            submitButton.disabled = false;

            submitButton.textContent =
                "Enviar mensaje →";

        })


        .catch(function(error) {

            console.error(
                "Error:",
                error
            );

            formStatus.textContent =
                "✕ No se pudo enviar el mensaje. Intenta nuevamente.";

            submitButton.disabled = false;

            submitButton.textContent =
                "Enviar mensaje →";

        });

    }
);