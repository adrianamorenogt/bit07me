//multiplosDeDos();

// Pedir un número, mostrar el doble de n.
function elDoble() {
  let numero = document.getElementById("Input1").value;
  let resultado = numero * 2;

  document.getElementById("resultadoNumero").innerText =
    "El doble de " + numero + " es: " + resultado;
}
