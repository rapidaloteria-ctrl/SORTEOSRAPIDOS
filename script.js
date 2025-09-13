// ============ MENÚ HAMBURGUESA ============
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
  });
}

// ============ BOTÓN WHATSAPP ============
const btnReclamar = document.getElementById("btnReclamar");
const btnReclamar2 = document.getElementById("btnReclamar2");
const premioBox = document.getElementById("premioBox");

// Función para enviar mensaje a un número
function reclamarPremio(numero) {
  const premioTexto = premioBox.textContent.match(/\$[0-9]+/);
  const premio = premioTexto ? premioTexto[0] : "$0";
  const mensaje = `Gané el premio del sorteo de ${premio}`;
  window.open(`https://wa.me/52${numero}?text=${encodeURIComponent(mensaje)}`, "_blank");
}

if (btnReclamar) {
  btnReclamar.addEventListener("click", () => {
    reclamarPremio("7442073056"); // Número 1
  });
}

if (btnReclamar2) {
  btnReclamar2.addEventListener("click", () => {
    reclamarPremio("7447781452"); // Número 2
  });
}

