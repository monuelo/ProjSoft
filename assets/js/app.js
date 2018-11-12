const widget_altura = document.getElementsByTagName("input")[0];
const widget_peso = document.getElementsByTagName("input")[1];
const widget_imc = document.getElementById("imc");
const widget_classificacao = document.getElementById("classificacao");

function calcule_imc() {

    const peso = Number(widget_peso.value);
    const altura = Number(widget_altura.value);
    let imc = imclib.valor_imc(peso, altura).toFixed(1);
    
    if (imc > 0) {
        widget_imc.innerText = "IMC = " + imc;
        widget_classificacao.innerText = imclib.class_imc(imc)
    } else {
        widget_classificacao.innerText = "";
        widget_imc.innerText = "";
    }
}
