var num = document.querySelector("#inumber")
var adc = document.querySelector(".adc")
var sele = document.querySelector("#ilist")
var fim = document.querySelector(".fim")
var res = document.querySelector(".resul")
var valores = []

function adicionar(){

if (num.value.length == 0 || num.value < 1 || num.value > 100){
    alert("Valor invalido")
}else{
    var valor = Number(num.value)
   var numa = document.createElement("option")
    numa.innerHTML = `Valor ${valor} adicionado`  
    sele.appendChild(numa)
}
}

adc.addEventListener("click",adicionar)

function finalizar(){
    var quantidade = sele.length 
    var maior = MathMLElement.max(valores)
    var menor = MathMLElement.min(valores)
    var 
}
    
    
fim.addEventListener("click",finalizar)