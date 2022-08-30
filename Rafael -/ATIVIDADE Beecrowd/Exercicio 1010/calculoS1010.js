let CP1 = 1
let QTDE1 = 1
let VU1 = 5.30

function Calcular1010(){
    let CP1= Number(document.getElementById('codigo1').value)
    let QTDE1= Number(document.getElementById('qtde1').value)
    let VU1= Number(document.getElementById('valor1').value)


    let CP2= Number(document.getElementById('codigo2').value)
    let QTDE2= Number(document.getElementById('qtde2').value)
    let VU2= Number(document.getElementById('valor2').value)

    let valorFinal = QTDE1*VU1 + QTDE2*VU2

document.getElementById("idresultado").innerHTML = 
'VALOR A PAGAR: R$ ' + valorFinal.toFixed(2)





}
