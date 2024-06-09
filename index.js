var setaesqerda = window.document.getElementById("setaesqerda")
varsetadireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")

function rolarparadireita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaesqerda.style = "display:flex; margin-top : 55px"
    setadireita.style = "display:none" 

}

function rolarparaesquerda(){
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaesqerda.style = "display:none; margin-top : 55px"
    setadireita.style = "display:flex" 


}