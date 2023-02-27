// Pedir un número, mostrar la suma total desde 1 hasta n.
function sumaTotal() {
  let numero1 = document.getElementById("Input1").value;
  let resultado = 0;
  let i = 1;
  while (i <= numero1) {
    resultado += i;
    i++;
  }
  document.getElementById("resultadoNumero").innerText =
    "La suma total es: " + resultado;
}
