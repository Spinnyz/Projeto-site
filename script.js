var num = document.querySelector("#inumber")
var adc = document.querySelector(".adc")
var sele = document.querySelector("#ilist")
var fim = document.querySelector(".fim")

function enviar(){
    if (num.value.length == 0 || num.value < 1 || num.value > 100){
        alert("Valor invalido")
    }
}

fim.addEventListener("click",enviar)