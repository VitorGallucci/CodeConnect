const uploadBtn = document.getElementById('upload-btn');
const inputUpload = document.getElementById('image-upload');

uploadBtn.addEventListener('click', () => {
  inputUpload.click();
});

function lerConteudoDoArquivo (arquivo) {

  return new Promise((resolve, reject) => {

    const leitor = new FileReader();

    leitor.onload = () => {
      resolve({url: leitor.result, nome: arquivo.name});
    }

    leitor.onerror = () => {
      reject(`Erro ao ler o arquivo ${arquivo.name}`);
    }

    leitor.readAsDataURL(arquivo);

  })

}

const imagemPrincipal = document.querySelector('.main-imagem');
const nomeDaImagem = document.querySelector('.container-imagem-nome p');

inputUpload.addEventListener('change', async (evento) => {

  const arquivo = evento.target.files[0];

  if (arquivo) {
    try {
      const ConteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
      imagemPrincipal.src = ConteudoDoArquivo.url;
      nomeDaImagem.textContent = ConteudoDoArquivo.nome;
    }
    catch (erro) {
      console.log(erro);
    }
  }

})








































