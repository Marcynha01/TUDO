function Pontuacao(){
let ponto = Number(document.getElementById("tentativa1").value)

if( ponto <= 10 ){
document.getElementById("idResultadodapontucao").innerHTML = "Deu ruim"
}else if( ponto >=  11  &&  ponto <= 100){
document.getElementById("idResultadodapontucao").innerHTML = "Tá...Não desista, tenta de novo"
}else if(ponto > 101 && ponto <= 200){
document.getElementById("idResultadodapontucao").innerHTML = "Supimpa!!"
}else if( ponto => 201){
    document.getElementById("idResultadodapontucao").innerHTML ="MITOOUUU"
    
}

}