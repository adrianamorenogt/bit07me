// Pedir un número, mostrar multiplos de 3 desde 1 hasta n.
function multiplosDe3() {
  let numero1 = document.getElementById("Input1").value;
  let resultado = "";
  let i = 1;
  while (i <= numero1) {
    if (i % 3 === 0) {
      resultado = resultado + i + ", ";
    }
    i++;
  }
  document.getElementById("resultadoNumero").innerText =
    "El resultado es: " + resultado;
}
