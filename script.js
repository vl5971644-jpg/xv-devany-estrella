// Cuenta regresiva para el 1 de agosto de 2026 a las 6:00 PM
const fechaEvento = new Date("August 1, 2026 18:00:00").getTime();

const contador = setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) {
    clearInterval(contador);
    document.getElementById("countdown").innerHTML =
      "<h2>¡Hoy es el gran día! 💜</h2>";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;

}, 1000);
