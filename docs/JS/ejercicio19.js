// Pedir dos números, mostrar si el primer número es divisible por el segundo.
function esDivisible() {
  let numero1 = document.getElementById("Input1").value;
  let numero2 = document.getElementById("Input2").value;
  let resultado = numero1 % numero2;
  if (resultado === 0) {
    resultado = `${numero1} SI es divisible por ${numero2}`;
  } else {
    resultado = `${numero1} NO es divisible por ${numero2}`;
  }
  document.getElementById("resultadoNumero").innerText = resultado;
}
