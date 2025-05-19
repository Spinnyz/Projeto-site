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
    let soma = valores.reduce((a, b) => a + b, 0);
     let media = soma / total;

    resultado.innerHTML = "";
    resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
}
    
    
fim.addEventListener("click",finalizar)