let miFormulario = document.getElementById("formulario");
const nombreForm = document.getElementById('nombreForm');
const emailForm = document.getElementById('emailForm');
const textForm = document.getElementById('textForm');
const mainContact = document.getElementById('mainContact');
const divContact = document.createElement('div');
const textContact = document.createElement('h4');

mainContact.appendChild(divContact);

miFormulario.addEventListener("submit", validarFormulario);

//* Funcion para enviar y validar formulario
function validarFormulario(e) {
    e.preventDefault(); 
    
    let nombre = nombreForm.value.trim();
    let email = emailForm.value.trim();
    let mensaje = textForm.value.trim();

    // Validar que los campos no estén vacíos
    if (nombre === '') {
        Swal.fire("Por favor, ingresa tu nombre"); 
        return;
    } if (email === '') {
        Swal.fire("Por favor, ingresa tu correo electrónico");
        return;
    } if (mensaje === '') {
        Swal.fire("Por favor, ingresa tu mensaje"); 
        return;
    }
    let emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            title: "Mail incorrecto!",
            text: "Ingresa un correo electrónico válido",
            icon: "warning"
        }); 
        return;
    };
    Swal.fire({
        title: "Mensaje enviado",
        text: "Formulado enviado correctamente",
        icon: "success"
    });  
};


mainContact.style.fontFamily = 'play';
miFormulario.style.fontFamily = 'play';





