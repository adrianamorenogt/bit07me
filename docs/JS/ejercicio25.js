// Pedir un número, mostrar los números desde n hasta 0.
const desdeNhasta0 = () => {
  let numero1 = document.getElementById("Input1").value;
  let resultado = "";
  let i = 1;
  for (let i = numero1; i > -1; i--) {
    resultado = resultado + i + ", ";
  }
  document.getElementById("resultadoNumero").innerText =
    "El resultado es: " + resultado;
};
