// Pedir un número, mostrar el triple de n.
function elTriple() {
  let numero = document.getElementById("Input1").value;
  const resultado = numero * 3;
  document.getElementById(
    "resultadoNumero"
  ).innerText = `El triple de ${numero} es: ${resultado}`;
}
