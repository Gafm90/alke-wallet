const lista = document.getElementById("transactionList");

if (lista) {
  const transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];

  lista.innerHTML = "";

  transacciones.reverse().forEach(tx => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";

    li.innerHTML = `
      <span>${tx.tipo}</span>
      <span class="${tx.monto >= 0 ? 'text-success' : 'text-danger'}">
        ${tx.monto >= 0 ? '+' : ''}$${Math.abs(tx.monto).toLocaleString('es-CL')}
      </span>
    `;

    lista.appendChild(li);
  });
}
