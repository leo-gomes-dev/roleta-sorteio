// Lista com os brindes e penalidades
const ITENS_ROLETA = [
  { texto: "🤖 1 Min de IA Liberado!", cor: "#FFD700" },
  { texto: "🚫 1 Min Sem Tocar no Código!", cor: "#FF4500" },
  { texto: "👀 Espiar Outra Equipe!", cor: "#1E90FF" },
  { texto: "🛡️ Imunidade no Bloqueio", cor: "#32CD32" },
  { texto: "💥 Pula o Próximo Desafio", cor: "#BA55D3" },
  { texto: "🐢 Digitar com 1 Mão só!", cor: "#FF8C00" },
];

// Elementos do DOM
const circuloRoleta = document.getElementById("roleta-circulo");
const botaoGirar = document.getElementById("botao-girar");
const painelResultado = document.getElementById("painel-resultado");
const textoResultado = document.getElementById("texto-resultado");

// Estados de controle da animação
let estaGirando = false;
let rotacaoAtual = 0;

// Renderiza as fatias dinamicamente dentro do círculo da roleta
function iniciarRoleta() {
  const anguloPorFatia = 360 / ITENS_ROLETA.length;

  ITENS_ROLETA.forEach((item, index) => {
    const fatia = document.createElement("div");
    fatia.className = "fatia";
    fatia.style.backgroundColor = item.cor;
    // Define a rotação de corte inicial de cada fatia
    fatia.style.transform = `rotate(${index * anguloPorFatia}deg)`;

    const textoSpan = document.createElement("span");
    textoSpan.className = "texto-fatia";
    textoSpan.innerText = item.texto;

    fatia.appendChild(textoSpan);
    circuloRoleta.appendChild(fatia);
  });
}

// Executa a física de giro da roleta
function girarRoleta() {
  if (estaGirando) return;

  estaGirando = true;
  botaoGirar.disabled = true;
  botaoGirar.innerText = "SORTEANDO...";
  painelResultado.style.display = "none";

  // Adiciona no mínimo 4 voltas completas (1440 graus) mais um ângulo aleatório
  const grausExtras = Math.floor(Math.random() * 360) + 1440;
  rotacaoAtual += grausExtras;

  // Aplica a transição CSS de rotação simulando desaceleração física
  circuloRoleta.style.transition =
    "transform 3s cubic-bezier(0.1, 0.8, 0.3, 1)";
  circuloRoleta.style.transform = `rotate(${rotacaoAtual}deg)`;

  // Aguarda os 3 segundos da animação acabar para calcular e revelar o resultado
  setTimeout(() => {
    estaGirando = false;
    botaoGirar.disabled = false;
    botaoGirar.innerText = "🎲 GIRAR ROLETA";

    const grausRestantes = rotacaoAtual % 360;
    const grausPorSegmento = 360 / ITENS_ROLETA.length;

    // Mapeia qual fatia parou apontada para o triângulo indicador fixado no topo (0 graus)
    const indiceGanhador =
      Math.floor((360 - grausRestantes) / grausPorSegmento) %
      ITENS_ROLETA.length;

    // Atualiza a interface com o prêmio
    textoResultado.innerText = ITENS_ROLETA[indiceGanhador].texto;
    painelResultado.style.display = "block";
  }, 3000);
}

// Inicializações e Event Listeners
iniciarRoleta();
botaoGirar.addEventListener("click", girarRoleta);
