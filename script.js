document.addEventListener("DOMContentLoaded", () => {
  const btnReclamar = document.getElementById("btnReclamar");
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const premioBox = document.getElementById("premioBox");

  // Botón reclamar → WhatsApp
  btnReclamar.addEventListener("click", () => {
    const textoPremio = premioBox.textContent;
    const match = textoPremio.match(/\$(\d+)/);
    const premio = match ? match[1] : "0";

    const numero = "7442073056"; // Número fijo de WhatsApp
    const mensaje = encodeURIComponent(`gane el premio del sorteo de ${premio}`);
    window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
  });

  // Menú hamburguesa
  hamburger.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });
});
