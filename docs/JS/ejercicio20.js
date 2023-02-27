// Pedir dos números y el nombre de una operación, mostrar el resultado.
const unaOperacion = () => {
  let numero1 = document.getElementById("Input1").value;
  let numero2 = document.getElementById("Input2").value;
  let operacion = document.getElementById("Input3").value;
  let resultado = "";
  switch (operacion) {
    case "sumar":
      resultado = `${numero1} + ${numero2} = ${
        parseInt(numero1) + parseInt(numero2)
      }`;
      break;
    case "restar":
      resultado = `${numero1} - ${numero2} = ${
        parseInt(numero1) - parseInt(numero2)
      }`;
      break;
    case "multiplicar":
      resultado = `${numero1} x ${numero2} = ${
        parseInt(numero1) * parseInt(numero2)
      }`;
      break;
    case "dividir":
      resultado = `${numero1} / ${numero2} = ${
        parseInt(numero1) / parseInt(numero2)
      }`;
      break;
    default:
      resultado = `La operación "${operacion}" no existe en esta función.`;
      break;
  }
  document.getElementById("resultadoNumero").innerText = resultado;
};
