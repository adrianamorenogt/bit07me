// Pedir dos números, mostrar la suma.

const suma = () => {
  let numero1 = document.getElementById("Input1").value;
  let numero2 = document.getElementById("Input2").value;
  document.getElementById(
    "resultadoNumero"
  ).innerText = `${numero1} + ${numero2} = ${
    parseInt(numero1) + parseInt(numero2)
  }`;
};
