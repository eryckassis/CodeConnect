const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

document
  .getElementById("imageInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const previewImage = document.getElementById("previewImage");
        previewImage.src = e.target.result;
        previewImage.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

uploadBtn.addEventListener("click", () => {
  inputUpload.click();
});

function lerConteudo(arquivo) {
  return new Promise((resolve, reject) => {
    const leitor = new FileReader();
    leitor.onload = () => {
      resolve({ url: leitor.result, nome: arquivo.name });
    };

    leitor.onerror = () => {
      reject(`Erro na leitura do arquivo: ${arquivo.name}`);
    };

    leitor.readAsDataURL(arquivo);
  });
}
