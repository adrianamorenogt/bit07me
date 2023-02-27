// Pedir un número, mostrar la suma de los números impares desde 1 hasta n.
const sumaTotalDeImpares = () => {
  let numero1 = document.getElementById("Input1").value;

  let resultado = 0;

  for (let i = 1; i <= numero1; i++) {
    if (i % 2 !== 0) {
      resultado = resultado + i;
    }
  }

  document.getElementById("resultadoNumero").innerText =
    "La suma total de los impares es: " + resultado;
};
