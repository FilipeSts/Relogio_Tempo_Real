function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();

  if (hora >= 5 && hora < 12) {
    // BOM DIA!
    img.src = "manha.png";
    document.body.style.background = "#c2ac16";
    msg.innerHTML = `Agora são ${hora} horas. Bom Dia!`;
  } else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    img.src = "tarde.png";
    document.body.style.background = "#798d9c";
    msg.innerHTML = `Agora são ${hora} horas. Boa Tarde!`;
  } else if (hora >= 18 && hora < 24) {
    // BOA NOITE!
    img.src = "noite.png";
    document.body.style.background = "#0c1718";
    msg.innerHTML = `Agora são ${hora} horas. Boa Noite!`;
  } else {
    // BOA MADRUGADA
    img.src = "madrugada.png";
    document.body.style.background = "#1b1f22";
    msg.innerHTML = `Agora são ${hora} horas. Boa Madrugada!`;
  }
}

function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  timeElement.textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();
