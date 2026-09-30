var escuro = document.getElementById("gordo")
let BotãoSimples = document.getElementById("simples")
let trocaFundo = false

BotãoSimples.onclick = trocaClasse


function trocaClasse(){

    if(trocaFundo == true){
    escuro.classList.remove("gordo")
    escuro.classList.add("corpo")
    trocaFundo = false
    }
    
    else{
    escuro.classList.remove("corpo")
    escuro.classList.add("gordo")
    trocaFundo = true
    }
}