// Esperamos que cargue el formulario
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // evita que recargue la página

  // Credenciales simuladas
  const emailValido = "usuario@alke.cl";
  const passwordValida = "Talentodigital";

  // Obtenemos valores del formulario
  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;

  if (email === emailValido && password === passwordValida) {
    // Guardamos sesión
    localStorage.setItem("logged", "true");

    // Si no hay saldo, lo inicializamos
    if (!localStorage.getItem("saldo")) {
      localStorage.setItem("saldo", "100000");
    }

    window.location.href = "menu.html";
  } else {
    alert("Credenciales incorrectas");
  }
});
