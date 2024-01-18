const formulario = document.querySelector(".fale-conosco")
    console.log(formulario)

 const mascara = document.querySelector(".marcara-form")


function cliqueiNoBotao(){
    formulario.style.left = "60%"
    mascara.style.visibility = "visible"
}

function sumirFormulario(){
    formulario.style.left = "-22%"
}
