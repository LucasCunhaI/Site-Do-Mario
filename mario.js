const formulario = document.querySelector(".fale-conosco")
    console.log(formulario)

 const mascara = document.querySelector(".marcara-form")

 const screen = {small: 0, medium: 200,  large: 500}


function cliqueiNoBotao(){
    formulario.style.left = "60%"
    mascara.style.visibility = "visible"
    screen = formulario.style.left = "20%"
}

function sumirFormulario(){
    formulario.style.left = "-22%"
    mascara.style.visibility = hidden
}

