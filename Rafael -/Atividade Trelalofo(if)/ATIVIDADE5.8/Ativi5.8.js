function Eleicao(){
    let idade = Number(document.getElementById("idade").value)

if(idade <= 15 ){
    document.getElementById("idResultadoeleicao").innerHTML = "Infelizmente  você não podera votar"
}else if( idade == 16 || idade == 17){
    document.getElementById("idResultadoeleicao").innerHTML = "  Seu voto e facultativo, e vc pode votar"
}else if(idade >= 18 && idade <= 65  ){
    document.getElementById("idResultadoeleicao").innerHTML = "Seu voto é obrigatorio!!"
}else if( idade >=66 ){
    document.getElementById("idResultadoeleicao").innerHTML = "Seu voto é facultativo"
}
}