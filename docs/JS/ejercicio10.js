// Pedir un número, mostrar el doble de n más 4.
function elDobleMas4() {
  let numero = document.getElementById("Input1").value;
  let resultado = numero * 2 + 4;
  document.getElementById(
    "resultadoNumero"
  ).innerText = `El doble de ${numero} más 4 es: ${resultado}`;
}
