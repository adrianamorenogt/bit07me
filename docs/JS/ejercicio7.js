// Pedir un número, mostrar la tercera parte de n.
function terceraParte() {
  let numero = document.getElementById("Input1").value;
  let resultado = numero / 3;
  document.getElementById("resultadoNumero").innerText =
    "La tercera parte de " + numero + " es: " + resultado;
}
