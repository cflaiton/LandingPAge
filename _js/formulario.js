const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input")

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    entidad: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,30}$/u,// Letras y espacios, pueden llevar acentos.
    nit: /^\d{8,8}-\d{1}$/, // Ej: 12345678-9.
    //nit: /^\d{5,15}$/,//
    nombre: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,30}$/u,// Letras y espacios, pueden llevar acentos.
    apellidos:  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,30}$/u, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefonoempresa: /^\d{7,7}$/, // telefono fijo de 7 digitos, Colombia.
    telefonopersonal: /^\d{10,10}$/, // Movil de 10 digitos, Colombia.
    documento: /^\d{5,15}$/, // documento de identidad, Colombia.
    dirempresa: /^[a-zA-Z\s0-9\#\-]{1,20}$/,
    dirpersonal: /^[a-zA-Z\s0-9\#\-]{1,20}$/,
}

const campos = {
    entidad: false,
    nit: false,
    dirempresa: false,
    telefonoempresa: false,
    nombre: false,
    apellidos: false,
    documento: false,
    dirpersonal: false,
    telefonopersonal: false,
    correo: false,
    password:false,

}


const validarformulario = (e) => {
    switch(e.target.name){
        case "txtEntidad":
            validarcampos(expresiones.entidad, e.target, "entidad");
            break;
        case "txtNIT":
            validarcampos(expresiones.nit, e.target, "nit");
            break;
        case "txtDireccionE":
            validarcampos(expresiones.dirempresa, e.target, "dirempresa")
            break;
        case "txtTelefonoE":
            validarcampos(expresiones.telefonoempresa, e.target, "telempresa");
            break;
        case "txtNombre":
            validarcampos(expresiones.nombre, e.target, "nombre");
            break;
        case "txtApellido":
            validarcampos(expresiones.apellidos, e.target, "apellidos")
            break;
        case "txtCedula":
            validarcampos(expresiones.documento, e.target, "documento");
            break;
        case "txtDireccion":
            validarcampos(expresiones.dirpersonal, e.target, "dirpersonal")
            break;
        case "txtTelefono":
            validarcampos(expresiones.telefonopersonal, e.target, "telpersonal");
            break;
        case "txtEmail":
            validarcampos(expresiones.correo, e.target, "correo")
            break;
        case "txtPassword":
            validarcampos(expresiones.password, e.target, "password1")
            validarPassword2();
            break;
        case "txtPassword2":
            validarPassword2();
            break;
    }
}


const validarcampos = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-incorrecto");
        document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-correcto");
        document.getElementById(`grupo_${campo}`)
        document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.remove("formulario_input_error_activo");
        campos[campo] = true;
    } else{
        document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-incorrecto");
        document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-correcto");
        document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.add("formulario_input_error_activo");
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password1');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById(`grupo_password2`).classList.add('formulario_grupo-incorrecto');
        document.getElementById(`grupo_password2`).classList.remove('formulario_grupo-correcto');
        document.querySelector(`#grupo_password2 .formulario_input_error`).classList.add('formulario_input_error_activo');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo_password2`).classList.remove('formulario_grupo-incorrecto');
        document.getElementById(`grupo_password2`).classList.add('formulario_grupo-correcto');
        document.querySelector(`#grupo_password2 .formulario_input_error`).classList.remove('formulario_input_error_activo');
        campos['password'] = true;
    }
}

inputs.forEach((input)=>{
    input.addEventListener("keyup", validarformulario);
    input.addEventListener("blur", validarformulario);
})
