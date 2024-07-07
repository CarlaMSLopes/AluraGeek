import { listaDeCards } from "./cards.js";

const painelDeCards = document.querySelector(".cards_produtos");

listaDeCards.forEach((card) => {
  painelDeCards.innerHTML += `<div class="card">
            <img src="${card.imagem}" alt="${card.descricaoAcess}" />
            <h2 class="${card.id}">${card.tituloDoproduto}</h2>
            <div class="preco_card">
              <h3 class="${card.id}">R$ ${card.precoDoProduto}</h3>
              <br/>
              <button class="botao__apagar">
                <img src="/assets/delete.svg" alt="Apagar" />
              </button>
            </div>
          </div>`;
});

// const textosHover = document.querySelectorAll(".titulo__hover");
// const cards = document.querySelectorAll(".card");

// cards.forEach((card) => {
//   card.addEventListener("mouseenter", () => {
//     textosHover.forEach((texto) => {
//       texto.classList.add("cor");
//     });
//   });
//   card.addEventListener("mouseleave", () =>
//     textosHover.forEach((texto) => texto.classList.remove("cor"))
//   );
// });
