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
const premioBox = document.getElementById("premioBox");

if (btnReclamar && premioBox) {
  btnReclamar.addEventListener("click", () => {
    const premioTexto = premioBox.textContent.match(/\$[0-9]+/);
    const premio = premioTexto ? premioTexto[0] : "$0";
    const numero = "7442073056"; // Número de WhatsApp
    const mensaje = `Gané el premio del sorteo de ${premio} pesos`;
    window.open(`https://wa.me/52${numero}?text=${encodeURIComponent(mensaje)}`, "_blank");
  });
}
