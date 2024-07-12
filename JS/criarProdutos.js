const formulario = document.querySelector("[data-formulario]");

const inputFile = document.querySelector("#pictureinput");
const pictureImage = document.querySelector(".pictureimage");

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});
async function criarCard(event) {
  event.preventDefault();
  const imagem = document.querySelector("[data-imagem]").value;
  const nome = document.querySelector("[data-nome]").value;
  const valor = document.querySelector("[data-valor]").value;
  const fileInput = document.getElementById("pictureinput");
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const base64Image = e.target.result;

      fetch("http://localhost:3000/listaDeCards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imagem: base64Image,
          tituloDoproduto: nome,
          precoDoProduto: `R$${valor},00`,
        }),
      });
    };
    reader.readAsDataURL(file);
  } else {
    document.getElementById("result").innerText = "No file selected";
  }

  window.alert("Produto Adcionado com sucesso!");
}

formulario.addEventListener("submit", (event) => criarCard(event));
