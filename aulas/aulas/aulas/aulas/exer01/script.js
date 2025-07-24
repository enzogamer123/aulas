function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    document.getElementById('resposta')
    resposta.textContent = numero1 + numero2
}

function sub(){
    var numero1 = document.getElementById("n7").valueAsNumber
    var numero2 = document.getElementById("n8").valueAsNumber
    document.getElementById('responda')
    resposta.textContent = numero1 - numero2

}
function diva(){
    var numero1 = document.getElementById("n4").valueAsNumber
    var numero2 = document.getElementById("n5").valueAsNumber
    document.getElementById('respost')
    if (numero=2 !== 0){
        resposta.innerHTML = numero1 / numero2
    }else{
        resposta.textContent = "Não se divide por 0"
    }
}
function mult(){
    var numero1 = document.getElementById("n7").valueAsNumber
    var numero2 = document.getElementById("n8").valueAsNumber
    document.getElementById('responda')
    resposta.textContent = numero1 * numero2
