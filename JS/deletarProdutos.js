
async function deletarProduto(id) {
    try{
        const resposta = await fetch(`http://localhost:3000/listaDeCards/${id}`,{
            method: "DELETE",
        });
        if (!resposta.ok) {
            throw new Error("Não foi possível apagar o item.")
        }
        alert("Produto deletado.")
        document.querySelector(`.card[data-id = ${id}]`).remove();
    }  
    catch (error){
        console.log(error);
        alert("Erro ao deletar o produto.")
    }  
}

export function addEvent() {
  document.querySelectorAll(".botao__apagar").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id");
      deletarProduto(id);
    });
  });
}
