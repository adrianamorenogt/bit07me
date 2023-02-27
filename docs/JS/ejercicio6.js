//elTriple();

// Pedir un número, mostrar la mitad de n.
function laMitad() {
  let numero = document.getElementById("Input1").value;
  let resultado = numero / 2;
  document.getElementById("resultadoNumero").innerText =
    "La mitad de " + numero + " es: " + resultado;
}
