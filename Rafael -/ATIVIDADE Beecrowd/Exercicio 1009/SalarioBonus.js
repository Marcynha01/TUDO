function CalculoSalario(){
let Nome = document.getElementById('Nome1').value
let SalarioF = Number(document.getElementById("SalarioF").value)
let totalV = Number(document.getElementById("totalV").value)




let valorFinal = SalarioF + totalV * 0.15

    document.getElementById("idresultado").innerHTML= Nome +
    "Valor a receber: R$ " + valorFinal.toFixed(2)
}