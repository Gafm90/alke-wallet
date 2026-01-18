document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const emailValido = "usuario@alke.cl";
  const passwordValida = "Talentodigital";

  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;

  if (email === emailValido && password === passwordValida) {
       localStorage.setItem("logged", "true");

      if (!localStorage.getItem("saldo")) {
      localStorage.setItem("saldo", "100000");
    }

    window.location.href = "menu.html";
  } else {
    alert("Credenciales incorrectas");
  }
});
