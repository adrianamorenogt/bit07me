/* 
//Imprimir texto en ventana emergente
let nombre = prompt("Por favor, escribe tu nombre");
if (nombre === null || nombre === "") {
  alert("Lo siento, no escribiste tu nombre, por favor escribe tu nombre");
} else {
  alert("Hola, es un gusto saludarte " + nombre);
} 
*/

/* function saludar() {
  let nombre = document.getElementById("Input1").value;
  if (nombre === null || nombre === "") {
    alert(":( No escribiste tu nombre.");
  } else {
    let resultadoSaludo = document.getElementById("resultadoSaludo");
    //resultadoSaludo.setAttribute("title", nombre);
    resultadoSaludo.value = nombre;
    console.log(resultadoSaludo);
  }
} */

function saludar() {
  let nombre = document.getElementById("Input1").value;
  if (nombre === null || nombre === "") {
    alert(":( No escribiste tu nombre.");
  } else {
    document.getElementById("resultadoSaludo").innerText = nombre;
    //resultadoSaludo.setAttribute("title", nombre);
    resultadoSaludo.value = "Hola, es un gusto saludarte" + nombre;
    console.log(resultadoSaludo);
  }
}
