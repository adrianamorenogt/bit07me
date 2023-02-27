/* function multiplosDeDos() {
  let numero = document.getElementById("Input1").value;
  const numero = parseInt(prompt("Ingresa un número"));
  if (edad === null || edad === "") {
    alert(" No escribiste ningún número");
  } else {
    document.getElementById("resultadoNumero").innerText = numero;
    let pares = "";
    for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      pares += i + ", ";
    }
    console.log(resultadoNumero);
  }
  alert(`Los números pares desde 1 hasta ${numero}, son: ${pares}`);
}
 */

function multiplosDeDos() {
  let numero = document.getElementById("Input1").value;
  let pares = "";
  if (numero === 0) {
    alert("No escribiste un número válido");
  }
  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      pares += i + ", ";
    }
  }
  document.getElementById(
    "resultadoNumero"
  ).innerText = `Los números pares desde 1 hasta ${numero}, son: ${pares}`;
}
