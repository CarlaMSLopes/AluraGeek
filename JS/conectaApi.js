async function listarProdutos() {
    const conexao = await fetch("http://localhost:3000/listaDeCards");
    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida);
    return conexaoConvertida;
}

export const conectaApi = {listarProdutos};


