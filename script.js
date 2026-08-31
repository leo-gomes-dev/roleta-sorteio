const ITENS_ROLETA = [
  { texto: "1 Min de IA Liberado!", cor: "#FFD700" },
  { texto: "1 Min Sem Tocar no Código!", cor: "#FF4500" },
  { texto: "Espiar Outra Equipe!", cor: "#1E90FF" },
  { texto: "Inverter Código com Outra Equipe!", cor: "#32CD32" },
  { texto: "Pula o Próximo Desafio", cor: "#BA55D3" },
  { texto: "Digitar com 1 Mão só!", cor: "#FF8C00" },
];

const circuloRoleta = document.getElementById("roleta-circulo");
const botaoGirar = document.getElementById("botao-girar");
const painelResultado = document.getElementById("painel-resultado");
const textoResultado = document.getElementById("texto-resultado");

let estaGirando = false;
let rotacaoAtual = 0;

function iniciarRoleta() {
  circuloRoleta.innerHTML = "";
  const qtdFatias = ITENS_ROLETA.length;
  const anguloPorFatia = 360 / qtdFatias;

  ITENS_ROLETA.forEach((item, index) => {
    const anguloCentro = index * anguloPorFatia;

    const container = document.createElement("div");
    container.className = "fatia-container";
    container.style.transform = `rotate(${anguloCentro}deg)`;

    const fundo = document.createElement("div");
    fundo.className = "fatia-fundo";
    fundo.style.backgroundColor = item.cor;
    fundo.style.transform = `rotate(-30deg)`;

    const textoSpan = document.createElement("div");
    textoSpan.className = "fatia-texto";
    textoSpan.innerText = item.texto;

    container.appendChild(fundo);
    container.appendChild(textoSpan);
    circuloRoleta.appendChild(container);
  });
}

function girarRoleta() {
  if (estaGirando) return;

  estaGirando = true;
  botaoGirar.disabled = true;
  botaoGirar.innerText = "SORTEANDO...";
  painelResultado.style.display = "none";

  const grausExtras = Math.floor(Math.random() * 360) + 1440;
  rotacaoAtual += grausExtras;

  circuloRoleta.style.transition =
    "transform 3s cubic-bezier(0.1, 0.8, 0.3, 1)";
  circuloRoleta.style.transform = `rotate(${rotacaoAtual}deg)`;

  setTimeout(() => {
    estaGirando = false;
    botaoGirar.disabled = false;
    botaoGirar.innerText = "🎲 GIRAR ROLETA";

    // --- CÁLCULO CALIBRADO COM COMPENSAÇÃO DEÂNGULO ---
    const grausPorSegmento = 360 / ITENS_ROLETA.length;

    // Compensação de 30 graus para ajustar o centro visual da fatia perfeitamente sob o ponteiro do topo
    const compensacaoVisual = grausPorSegmento / 2;

    // Calcula a posição real descontando a rotação acumulada e somando a calibração
    let grausRestantes = (360 - (rotacaoAtual % 360) + compensacaoVisual) % 360;
    if (grausRestantes < 0) grausRestantes += 360;

    const indiceGanhador =
      Math.floor(grausRestantes / grausPorSegmento) % ITENS_ROLETA.length;

    textoResultado.innerText = ITENS_ROLETA[indiceGanhador].texto;
    painelResultado.style.display = "block";
  }, 3000);
}

iniciarRoleta();
botaoGirar.addEventListener("click", girarRoleta);
