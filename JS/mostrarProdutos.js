import { conectaApi } from "./conectaApi.js";
import { addEvent } from "./deletarProdutos.js";
const conteinerCards = document.querySelector("[data-card]");

function constroiProduto({

  id,
  imagem,
  tituloDoproduto,
  precoDoProduto,
  descricaoAcess
}) {
  const produto = document.createElement("div");
  produto.className = "card";
  produto.dataset.id = id;
  produto.innerHTML = `
            <img src="${imagem}" alt="${descricaoAcess}" />
            <h2 class="${id}">${tituloDoproduto}</h2>
            <div class="preco_card">
              <h3 class="${id}">R$ ${precoDoProduto}</h3>
              <br/>
              <button class="botao__apagar" data-id = "${id}">
                <img src="/assets/delete.svg" alt="Apagar" />
              </button>
            </div>
          `;
          
          return produto;
}

async function listarProdutos (){
    const listaApi = await conectaApi.listarProdutos();

    listaApi.forEach(produto => {
        conteinerCards.appendChild(constroiProduto({...produto}))
    });
    addEvent();
}

listarProdutos();