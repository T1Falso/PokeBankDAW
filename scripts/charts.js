// Chart Depositos
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const depositos = [
  500, 700, 800, 1200, 1500, 1300, 1000, 950, 1100, 1400, 1600, 1800,
];

const retiros = [100, 70, 83, 500, 1500, 130, 100, 50, 20, 400, 600, 100];

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("depositosChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: meses,
      datasets: [
        {
          label: "Depósitos en Pokedolares",
          data: depositos,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("retirosChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: meses,
      datasets: [
        {
          label: "Retiros en Pokedolares",
          data: retiros,
          backgroundColor: "rgba(192, 75, 75, 0.6)",
          borderColor: "rgba(192, 75, 75, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("ServiciosChart").getContext("2d");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: servicios,
      datasets: [
        {
          data: PagoServicios,
          backgroundColor: colores,
          borderColor: "rgba(255, 255, 255, 1)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });
});

const servicios = ["Telefono", "Pokebolas", "Comida de Pokemon", "Internet"];
const PagoServicios = [100, 170, 530, 50];
const colores = [
  "rgba(255, 99, 132, 0.7)", // Rojo
  "rgba(54, 162, 235, 0.7)", // Azul
  "rgba(255, 206, 86, 0.7)", // Amarillo
  "rgba(75, 192, 192, 0.7)", // Verde
];

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document
    .getElementById("depositosTransaccionesChart")
    .getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: meses,
      datasets: [
        {
          label: "Depósitos en Pokedólares",
          data: depositos,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Retiros en Pokedólares",
          data: retiros,
          backgroundColor: "rgba(192, 75, 75, 0.6)",
          borderColor: "rgba(192, 75, 75, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
