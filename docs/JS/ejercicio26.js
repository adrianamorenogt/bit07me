// Pedir un número, mostrar el cubo.
cubo = () => {
  let numero1 = document.getElementById("Input1").value;
  let resultado = Math.pow(numero1, 3);
  document.getElementById("resultadoNumero").innerText =
    "El resultado es: " + resultado;
};
