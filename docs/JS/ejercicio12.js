// Pedir un número, mostrar si es par, impar o si es cero.
function ceroParImpar() {
  let numero = document.getElementById("Input1").value;
  let resultado = "";

  if (parseInt(numero) === 0) {
    resultado = "Ingresó el número cero.";
  } else if (numero % 2 === 0) {
    resultado = "El numero " + numero + " es un número par.";
  } else {
    resultado = "El numero " + numero + " es un número impar.";
  }
  document.getElementById("resultadoNumero").innerText = resultado;
}
