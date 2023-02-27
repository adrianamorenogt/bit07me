// Pedir un número, mostrar la suma de los números pares desde 1 hasta n.
const sumaTotalDePares = () => {
  let numero1 = document.getElementById("Input1").value;
  let resultado = 0;
  for (let i = 1; i <= numero1; i++) {
    if (i % 2 === 0) {
      resultado = resultado + i;
    }
  }
  document.getElementById("resultadoNumero").innerText =
    "La suma total es: " + "La suma total de los pares es: " + resultado;
};
