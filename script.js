let trocaImagem = () => {
  let img = document.getElementById("imagem");
  let msg = window.document.getElementById("hora");
  let data = new Date();
  let hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas e ${data.getMinutes()} minutos.`;

  if (hora >= 0 && hora < 5) {
    img.src = "img/linda-noite-no-oceano-com-lua-cheia_104785-866.avif";
    document.body.style.background = "#515154";
    console.log("madruga");
  } else if (hora >= 5 && hora < 12) {
    img.src = "img/manha.jpg";
    document.body.style.background = "#e2cd9f";
    console.log("manha");
  } else if (hora >= 12 && hora < 16) {
    img.src = "img/tarde.jpg";
    document.body.style.background = "#b8946f";
    console.log("tarde");
  } else if (hora >= 16 && hora < 18) {
    img.src = "img/fim-de-tarde.jpg";
    document.body.style.background = "#b8946f";
    console.log("final de tarde");
  } else {
    img.src = "img/linda-noite-no-oceano-com-lua-cheia_104785-866.avif";
    document.body.style.background = "#515154";
    console.log("noite");
  }
};
