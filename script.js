let trocaImagem = () => {
  let img = document.getElementById("imagem");
  let msg = window.document.getElementById("hora");
  let data = new Date();
  let hora = 19;
  msg.innerHTML = `Agora são ${hora} horas e ${data.getMinutes()} minutos.`;

  if (hora >= 0 && hora < 5) {
    img.src = "img/linda-noite-no-oceano-com-lua-cheia_104785-866.avif";
    console.log("madruga");
  } else if (hora >= 5 && hora < 12) {
    img.src = "img/manha.jpg";
    console.log("manha");
  } else if (hora >= 12 && hora < 16) {
    img.src = "img/tarde.jpg";
    console.log("tarde");
  } else if (hora >= 16 && hora < 18) {
    img.src = "img/fim-de-tarde.jpg";
    console.log("final de tarde");
  } else {
    img.src = "img/linda-noite-no-oceano-com-lua-cheia_104785-866.avif";
    console.log("noite");
  }
};
