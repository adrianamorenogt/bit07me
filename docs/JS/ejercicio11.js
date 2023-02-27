// Pedir un número, mostrar si es positivo, negativo o si es cero.
function ceroNegativoPositivo() {
  let numero = document.getElementById("Input1").value;
  let resultado = "";
  if (parseInt(numero) === 0) {
    resultado = "Ingresó el número cero.";
  } else if (numero < 0) {
    resultado = "Ingresó un número negativo.";
  } else {
    resultado = "Ingresó un número positivo.";
  }
  document.getElementById("resultadoNumero").innerText = resultado;
}
