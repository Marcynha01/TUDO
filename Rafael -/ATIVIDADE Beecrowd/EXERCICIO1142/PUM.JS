function calcularPUM(){
let resultado = document.getElementById("divResultado")
    let puns= Number(document.getElementById("ipNumero").value)
    let cont = 1
    resultado.innerHTML = ''
while(puns > 0){
    if(cont % 4 == 0){

        resultado.innerHTML +=  'PUM<br>'
 puns--
    }else{
        resultado.innerHTML += cont + ''
    }
   cont++
}
}
  