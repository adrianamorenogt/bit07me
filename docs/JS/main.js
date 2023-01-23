function validateLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username === "bit" && password === "2023") {
    location.href = "ejercicios.html";
  } else {
    alert("Invalid credentials");
  }
}
