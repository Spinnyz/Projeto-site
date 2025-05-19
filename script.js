var num = document.querySelector("#inumber")
var adc = document.querySelector(".adc")
var sele = document.querySelector("#ilist")
var fim = document.querySelector(".fim")

function adicionar(){
    if (num.value.length == 0 || num.value < 1 || num.value > 100){
        alert("Valor invalido")
    }else{
       var num = sele.CreateElement("option")
        num.innerHTML = `Valor ${num.value} adicionado`        
    }
}

adc.addEventListener("click",adicionar)