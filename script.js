function btnNumeros(num) {
  let numerosdeantes = document.getElementById("texto").value
  document.getElementById("texto").value = numerosdeantes + num
}

function limpar() {
  document.getElementById("texto").value = ""
}

function resultado() {
  calculo = document.getElementById("texto").value
  document.getElementById("texto").value = eval(calculo)
}