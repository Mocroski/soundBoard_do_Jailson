let audios = [
  { caminho: "audios/grito.mp3", legenda: "GRITO" },
  { caminho: "audios/jailson-mendes-eu-quero-vai.mp3", legenda: "Eu quero vai" },
  { caminho: "audios/cu-de-macho.mp3", legenda: "Cu de macho" },
  { caminho: "audios/gostoso.mp3", legenda: "Gostoso" },
  { caminho: "audios/deixa-eu-mama.mp3", legenda: "Deixa eu mama" },
  { caminho: "audios/reclamando.mp3", legenda: "Reclamando" },
  { caminho: "audios/no-meu-cara.mp3", legenda: "No meu cara" },
  { caminho: "audios/como_assim_eu_n_o_entendi.mp3", legenda: "Como assim" },
  { caminho: "audios/aiquedelicia.mp3", legenda: "Ai que delicia" }
];

let botoes = document.querySelectorAll(".botao");
let legendas = document.querySelectorAll("p");

for (let i = 0; i < 9; i++) {
  legendas[i].textContent = audios[i].legenda;
  botoes[i].setAttribute("data-item", i);
}

let audioTag = document.querySelector("audio");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    let som = audios[botao.getAttribute("data-item")];
    audioTag.setAttribute("src", som.caminho);

    audioTag.addEventListener("loadeddata", () => {
      audioTag.play();
    });
  });
});
