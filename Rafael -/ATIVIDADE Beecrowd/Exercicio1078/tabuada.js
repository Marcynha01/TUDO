function DIVIDIR() {
  let n = Number(document.getElementById("inpPrimeiro").value);

  document.getElementById("idResultado").innerHTML = ''
  if (n > 2 && n < 1000) {
    for (i = 1; i <= 10; i++) {
      let multi = i * n;
      document.getElementById("idResultado").innerHTML +=
        i + "x" + n + "=" + multi + "<BR>";
    }
  } else {
    alert("Numero invalido");
  }
}
