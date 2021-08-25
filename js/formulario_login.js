const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input")

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    password1: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

}

const campos = {

    correo: false,
    password1:false,

}


const validarformulario = (e) => {
    switch(e.target.name){

        case "correo":
            validarcampos(expresiones.correo, e.target, "correo")
            break;
        case "password1":
            validarcampos(expresiones.password1, e.target, "password1")
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


inputs.forEach((input)=>{
    input.addEventListener("keyup", validarformulario);
    input.addEventListener("blur", validarformulario);
})