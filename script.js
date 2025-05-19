var num = document.querySelector("#inumber");
var adc = document.querySelector(".adc");
var sele = document.querySelector("#ilist");
var fim = document.querySelector(".fim");
var res = document.querySelector(".resul");
var valores = [];

function adicionar() {
    if (num.value.length == 0 || num.value < 1 || num.value > 100) {
        alert("Valor inválido");
    } else {
        var valor = Number(num.value);

        if (valores.includes(valor)) {
            alert("Valor já adicionado");
        } else {
            valores.push(valor);
            var numa = document.createElement("option");
            numa.innerHTML = `Valor ${valor} adicionado`;
            sele.appendChild(numa);
            res.innerHTML = ""; // Limpa os resultados ao adicionar novo
        }
    }

    num.value = "";
    num.focus();
}

adc.addEventListener("click", adicionar);

function finalizar() {
    if (valores.length === 0) {
        alert("Adicione valores antes de finalizar");
        return;
    }

    let total = valores.length;
    let maior = Math.max(...valores);
    let menor = Math.min(...valores);
    let soma = valores.reduce((a, b) => a + b, 0);
    let media = soma / total;

    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.</p>`;
}

fim.addEventListener("click", finalizar);
