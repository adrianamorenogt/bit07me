// Pedir un número, mostrar si es un número primo o no.
function esPrimo() {
  let numero = document.getElementById("Input1").value;
  if (numero < 2) {
    resultado = "Error, debes ingresar un número mayor que 1";
  }
  let contador = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      contador++;
    }
  }
  if (contador === 2) {
    resultado = `El número ${numero}, es primo`;
  } else {
    resultado = `El número ${numero}, no es primo`;
  }
  document.getElementById("resultadoNumero").innerText = resultado;
}
