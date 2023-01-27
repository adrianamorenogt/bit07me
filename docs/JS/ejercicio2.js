/* function saludar() {
  let nombre = document.getElementById("Input1").value;
  if (nombre === null || nombre === "") {
    alert(":( No escribiste tu nombre.");
  } else {
    document.getElementById("resultadoSaludo").innerText = nombre;
    //resultadoSaludo.setAttribute("title", nombre);
    resultadoSaludo.value = "Hola, es un gusto saludarte" + nombre;
    console.log(resultadoSaludo);
  }
} */

// Pedir edad al usuario y responder si es o no es mayor de edad.
function esMayorDeEdad() {
  let edad = document.getElementById("Input1").value;
  // const edad = Number(prompt("Escribe tu edad"));
  if (edad === null || edad === "") {
    alert(" No escribiste tu edad");
  } else {
    document.getElementById("resultadoEdad").innerText = edad;
    edad >= 18 ? alert("Eres mayor de edad") : alert("Eres menor de edad");
    console.log(resultadoEdad);
  }
}
