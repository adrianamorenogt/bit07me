// Pedir dos números, mostrar el resto de la división.
const residuo = () => {
  let numero1 = document.getElementById("Input1").value;
  let numero2 = document.getElementById("Input2").value;
  let resultado = "";
  if (parseInt(numero2) === 0) {
    resultado = "El número 2 no puede ser 0";
  } else {
    resultado =
      numero1 +
      " % " +
      numero2 +
      " = " +
      (parseInt(numero1) % parseInt(numero2));
  }
  document.getElementById("resultadoNumero").innerText = resultado;
};
