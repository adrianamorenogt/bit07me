// Pedir un número, mostrar el cuadrado de n.
function elCuadrado() {
  let numero = document.getElementById("Input1").value;
  document.getElementById(
    "resultadoNumero"
  ).innerText = `El cuadrado de ${numero} es: ${numero * numero}`;
}
