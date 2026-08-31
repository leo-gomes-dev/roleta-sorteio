# 🎯 Roleta do Destino - Gamificação Fullstack 🚀

Uma roleta interativa 100% web feita com **HTML5, CSS3 e JavaScript puro (Vanilla JS)**. Foi desenvolvida especificamente para dinâmicas de gamificação em salas de aula de desenvolvimento Fullstack, trazendo recompensas lúdicas e penalidades em tempo real para os alunos.

---

## 🕹️ Funcionalidades

- **Física de Desaceleração:** Animação fluida via transições CSS utilizando curvas Bézier para simular um giro real.
- **Renderização Dinâmica:** As fatias e os textos se adaptam automaticamente ao tamanho e às cores definidas no código.
- **Efeitos Inclusos:**
  - 🤖 1 Minuto de Inteligência Artificial Liberado
  - 🚫 1 Minuto Sem Tocar no Código (Fique longe do teclado!)
  - 👀 Espiar Outra Equipe
  - 🛡️ Imunidade no Bloqueio
  - 💥 Pula o Próximo Desafio
  - 🐢 Digitar com apenas 1 Mão só

---

## 🚀 Como Rodar o Projeto

Como o projeto utiliza apenas tecnologias nativas do navegador, você não precisa instalar nenhuma dependência (como Node.js ou npm).

1. Clone este repositório:
   ```bash
   git clone https://github.com/leo-gomes-dev/roleta-sorteio.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd NOME_DO_REPOSITORIO
   ```
3. Abra o arquivo `index.html` diretamente em qualquer navegador ou utilize a extensão **Live Server** no VS Code.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da aplicação.
- **CSS3:** Estilização baseada em variáveis e sistema de rotação por graus.
- **JavaScript (ES6):** Manipulação de DOM e lógica matemática de mapeamento de fatias.

---

## 📦 Como Customizar os Prêmios?

Se quiser alterar os brindes ou castigos, basta abrir o arquivo `script.js` e modificar o array `ITENS_ROLETA`:

```javascript
const ITENS_ROLETA = [
  { texto: "🎁 Nova Recompensa!", cor: "#HEX_DA_COR" },
];
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---
Developed with 💻 for Leo Gomes.
