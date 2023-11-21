const painelImagens = document.querySelectorAll('.imagem-produto');
const setaVoltar = document.querySelector('a#btn-voltar');
const setaAvancar = document.querySelector('a#btn-avancar');
let imagemAtual = 0;

function esconderImagens() {
    painelImagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    painelImagens[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function () {
    const totalDeImagens = painelImagens.length - 1
    if (imagemAtual === totalDeImagens) {
        imagemAtual = 0
    } else {
        imagemAtual ++
    }
    esconderImagens();
    mostrarImagem();
})

setaVoltar.addEventListener('click', function() {
    if (imagemAtual === 0) {
        imagemAtual = painelImagens.length;
    }

    imagemAtual --;
    esconderImagens();
    mostrarImagem();
})



const btnLoja = document.querySelector('button.btn-loja')

btnLoja.addEventListener('click', ()=>{
    window.open('https://www.bruckstore.com.br/meias-atacado')
})
