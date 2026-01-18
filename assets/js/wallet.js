// Mostrar saldo en menu
const saldoElemento = document.getElementById("saldo");

$(document).ready(function () {
  const saldo = localStorage.getItem("saldo") || 0;
  $("#saldoNumero").text(Number(saldo).toLocaleString("es-CL"));
});


const depositForm = document.getElementById("depositForm");

$("#depositForm").on("submit", function (e) {
  e.preventDefault();

  const monto = Number($("#depositAmount").val());
  let saldo = Number(localStorage.getItem("saldo"));

  saldo += monto;
  localStorage.setItem("saldo", saldo);
  guardarTransaccion("Depósito", monto);

  $("#depositMsg")
    .hide()
    .html('<div class="alert alert-success">Depósito realizado correctamente</div>')
    .fadeIn();

  setTimeout(() => {
    window.location.href = "menu.html";
  }, 1500);
});


function guardarTransaccion(tipo, monto) {
  let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];

  transacciones.push({
    tipo: tipo,
    monto: monto,
    fecha: new Date().toLocaleString()
  });

  localStorage.setItem("transacciones", JSON.stringify(transacciones));
}

const sendForm = document.getElementById("sendForm");

$("#sendForm").on("submit", function (e) {
  e.preventDefault();

  const contacto = $("#contactInput").val();
  const monto = Number($("#amountInput").val());
  let saldo = Number(localStorage.getItem("saldo"));

  if (monto <= 0 || monto > saldo) {
    $("#sendMsg").html(
      `<div class="alert alert-danger">Saldo insuficiente</div>`
    );
    return;
  }

  saldo -= monto;
  localStorage.setItem("saldo", saldo);

  guardarTransaccion("Envío", -monto);

  $("#sendMsg").html(
    `<div class="alert alert-success">Envío a ${contacto} realizado</div>`
  );

  $("#saldoNumero").text(saldo.toLocaleString("es-CL"));
});

$(document).ready(function () {
  $("#saldoCard").hide().fadeIn(800);
});

const contactos = ["Juan", "María", "Pedro", "Ana", "Camila"];

$("#contactInput").on("keyup", function () {
  const valor = $(this).val().toLowerCase();
  $("#contactList").empty();

  if (valor === "") return;

  contactos.forEach(contacto => {
    if (contacto.toLowerCase().includes(valor)) {
      $("#contactList").append(
        `<li class="list-group-item contact-item">${contacto}</li>`
      );
    }
  });
});

$(document).on("click", ".contact-item", function () {
  $("#contactInput").val($(this).text());
  $("#contactList").empty();
});
