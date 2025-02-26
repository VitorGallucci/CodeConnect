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

const inputTags = document.getElementById('input-tags');
const listaTags = document.getElementById('lista-tags');

listaTags.addEventListener('click', (evento) => {
  
    if (evento.target.classList.contains('remove-tag')) {
      const tagRemover = evento.target.parentElement;
      listaTags.removeChild(tagRemover);
    }

})

const tagsDisponivieis = ['Front-end', 'Back-end', 'Mobile', 'Design', 'UX', 'UI', 'Data Science', 'Machine Learning', 'DevOps', 'Gestão', 'Marketing', 'Empreendedorismo', 'Inovação', 'Outros'];

async function verificaTagsDisponivieis(tagTexto) {

  return new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(tagsDisponivieis.includes(tagTexto));
      }, 500);

  })

}

inputTags.addEventListener('keypress', async (evento) => {
  
  if (evento.key === 'Enter') {
    evento.preventDefault();
    const tagTexto = inputTags.value.trim();
    if (tagTexto !== '') {
      try {
        const tagExiste = await verificaTagsDisponivieis(tagTexto);
        if (!tagExiste) {
          alert('Tag inválida');
          throw 'Tag inválida';
        }
        const tagNova = document.createElement('li');
        tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" alt="Remover tag" class="remove-tag">`;
        listaTags.appendChild(tagNova);
        inputTags.value = '';
      }
      catch (erro) {
        console.log(erro);
      }
    }
  }

})  

const botaoPublicar = document.querySelector('.botao-publicar');

botaoPublicar.addEventListener('click', async (evento) => {

  evento.preventDefault();

  const nome = document.getElementById('nome').value();
  const descricao = document.getElementById('descricao').value();
  const imagem = imagemPrincipal.src;
  const tags = Array.from(listaTags.children).map(tag => tag.querySelector('p').textContent);

});
































