// Pedir dos números, mostrar la resta.
const resta = () => {
  let numero1 = document.getElementById("Input1").value;
  let numero2 = document.getElementById("Input2").value;
  let resultado = parseInt(numero1) - parseInt(numero2);

  document.getElementById(
    "resultadoNumero"
  ).innerText = `${numero1} - ${numero2} = ${resultado}`;
};
