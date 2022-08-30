function Quadrante(){
let x = Number(document.getElementById("numberX").value)
let y = Number(document.getElementById("numberY").value)


if( x > 0 && y > 0){
    document.getElementById("idResultado").innerHTML = "Primeiro Quadrante"
}else if(x < 0 && y >0){
document.getElementById("idResultado").innerHTML=  "Segundo Quadrante"
}else if(x < 0 && y < 0){
    document.getElementById("idResultado").innerHTML=  "Terceiro Quadrante"
}else if(x > 0 && y < 0){
    document.getElementById("idResultado").innerHTML=  "Quarto Quadrante"
}else if(x == 0 || y == 0){
    document.getElementById("idResultado").innerHTML=  "Não possui uadrante"
}

}