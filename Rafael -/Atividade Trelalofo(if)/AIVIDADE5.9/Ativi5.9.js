function calcular(){
    let altura = Number(document.getElementById("alturaInp").value)
    let genero = (document.getElementById("generoInp").value)

if( genero == "feminino" ){
    pesoIdeal = 62.1 * altura - 44.7
}else{
    pesoIdeal = 72.7 * altura - 58
}
 alert (pesoIdeal)
}