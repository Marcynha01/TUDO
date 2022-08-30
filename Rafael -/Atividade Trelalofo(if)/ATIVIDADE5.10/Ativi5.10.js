function calcular(){
let qtde =  Number(document.getElementById("QTDE").value)
let precoU = 0.30


if(qtde < 12){
    valorTotal = qtde * precoU
}else{
    valorTotal = qtde * 0.25
} 
alert (valorTotal)
}
