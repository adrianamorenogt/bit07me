// Pedir un número, mostrar n reducido en 5.
function reducidoEn5() {
  let numero = document.getElementById("Input1").value;
  document.getElementById(
    "resultadoNumero"
  ).innerText = `El número ${numero} reducido en 5 es: ${numero - 5}`;
}
