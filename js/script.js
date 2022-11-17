function conta(){
const A = prompt('Digite o valor de A')
const B = prompt('Digite o valor de B')
const C = prompt('Digite o valor de C')
const D = prompt('Digite o valor de D')

const soma = parseFloat(A)+parseFloat(C);
console.log(soma)
const mult = parseFloat(B)*parseFloat(D);
console.log(mult)
const resultado = document.getElementById('resultado')
if(soma < mult){
     resultado.innerText = 'B x D é maior que A + C'
}
else if(soma > mult){
    resultado.innerText = 'A + C é maior que B x D'
}
else if(soma == mult){
    resultado.innerText = 'B x D é igual a A + C'
}
else{
    resultado.innerText = 'Erro!!! Digite novamente os valores'
}
}

window.addEventListener('load',conta);