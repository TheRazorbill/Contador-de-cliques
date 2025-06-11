const contadorElemento = document.getElementById("contador");
const botaoContar = document.getElementById("botaoContar");
const botaoResetar = document.getElementById("botaoResetar");

let contagem = 0;

function atualizarContadorNaTela() {
  contadorElemento.textContent = contagem;
}

botaoContar.addEventListener("click", () => {
  contagem++;
  atualizarContadorNaTela();

  contadorElemento.classList.add("clicked");
  setTimeout(() => {
    contadorElemento.classList.remove("clicked");
  }, 200);
});

botaoResetar.addEventListener("click", () => {
  contagem = 0;
  atualizarContadorNaTela();

  contadorElemento.classList.add("clicked");
  setTimeout(() => {
    contadorElemento.classList.remove("clicked");
  }, 200);
});

atualizarContadorNaTela();
