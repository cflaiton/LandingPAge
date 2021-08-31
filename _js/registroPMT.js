const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const textareas = document.querySelectorAll("#formulario textarea");

const expresiones = {
    civ:/^\d{7,10}$/,
    conctrato:/^\d{7,10}$/,
    descripcion:/^[a-zA-ZÀ-ÿ-Z0-9\s\_\-]{10,150}$/

}

const campos = {
    civ:false,
    conctrato:false,
    descripcion:false,


}


const validarformulario = (e) => {
    switch(e.target.name){
        case "civ":
            validarcampos(expresiones.civ, e.target, "civ");
            break;
        case "contrato":
            validarcampos(expresiones.conctrato, e.target, "contrato");
            break;
        case "descripcion":
            validarcampos(expresiones.descripcion, e.target, "descripcion");
            break;

    }
}


const validarcampos = (expresion,input, campo) => {
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

const validarcamposta = (expresion,textarea, campo) => {
    if(expresion.test(textarea.value)){
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

textareas.forEach((textarea)=>{
    textarea.addEventListener("keyup", validarformulario);
    textarea.addEventListener("blur", validarformulario);
})


