let deseaCuotas = prompt("¿Desea realizar el pago en cuotas? (Sí/No):").toLowerCase();

while (deseaCuotas !== "sí" && deseaCuotas !== "no") {
  alert("Por favor, ingrese una respuesta válida (Sí o No)");
  deseaCuotas = prompt("¿Desea realizar el pago en cuotas? (Sí/No):").toLowerCase();
}

if (deseaCuotas === "sí") {
  let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas (3, 6, 12 o 18):"));

  while (![3, 6, 12, 18].includes(cuotas)) {
    alert("Por favor, ingrese una cantidad válida de cuotas (3, 6, 12 o 18).");
    cuotas = parseInt(prompt("Ingrese la cantidad de cuotas (3, 6, 12 o 18):"));
  }

  calcularTotalConInteres(cuotas);
} else {
  const montoSinCuotas = 100000; // Monto sin interés
  alert(`El precio sin cuotas es de: $${montoSinCuotas.toFixed(2)}`);
}

function calcularTotalConInteres(cuotas) {
  const monto = 100000; // Monto sin interés
  let interes = 0;

  switch (cuotas) {
    case 3:
      interes = 0.05;
      break;
    case 6:
      interes = 0.08;
      break;
    case 12:
      interes = 0.12;
      break;
    case 18:
      interes = 0.15;
      break;
    default:
      alert("Cantidad de cuotas no válida");
      return;
  }

  const totalConInteres = monto * (1 + interes);
  alert(`El total a pagar en ${cuotas} cuotas con interés es de: $${totalConInteres.toFixed(2)}`);
}

