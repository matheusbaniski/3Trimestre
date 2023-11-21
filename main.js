//a função que deve ser executada e tocaSom, mas que som? Nesse caso, sera o parametro idElementoAudio. Ou seja, o endereço da tecla sera procurado no html e reproduzido.
function tocaSom(idElementoAudio) {
     const elemento = document.querySelector(idElementoAudio);
// se o elemento pesquisado for igual a "inexistente", o alerta de elemento nao encontrado aparecera.
    if(elemento === null){
      alert('Elemento não encontrado');
    }
//se o elemento existir, a funçao play daquele elemento acontecera, ou seja, a tecla sera reproduzida. 
    if(elemento && elemento.localName === 'Audio'){
      elemento.play();
        }else {
          alert('Elemento nao encontrado');
}
}
//querySelector encontra as informações a tecla pesquisada no documento.
const ListaDeTeclas = document.querySelectorAll('.tecla');


// Estrutura de repetiçao - Enquanto
// para que as teclas nao sejam repetidas de maneira infinita, criamos o for, com valor de inicio 0, e valor final chamado de contador <listadeTeclas.lenth, para que a repetição seja exatamente do tamanho da nossa lista, que é de 9 teclas
for(let contador = 0;contador < ListaDeTeclas.length;contador++){
  const tecla = ListaDeTeclas[contador];
  // classlist armazena todas as informações do elemento pesquisado.
  const instrumento = tecla.classList[1];
  // o idAudio e responsavel por identificar o som do botao pesquisado.
  const idAudio = `#som_${instrumento}`;
  console.log(idAudio);
  //onclick significa "ao clicar na tecla" a função tocaSom sera executada, o id daquele audio sera buscado e reproduzido.

  tecla.onclick = function(){
    tocaSom(idAudio);
  };
  //onkeydown significa "quando a tecla estiver pressionada", nesse caso uma função sera executada, e qual é a função? É a estilização de mudança de cor do botao quando as tecla Enter e Space forem apertadas.
  tecla.onkeydown = function(evento) {
    if (evento.code === 'Enter' || evento.code === 'Space'){
    tecla.classList.add ('ativa');
  }
  };

 //onkeydown significa "quando a tecla estiver erguida, não pressionada", nesse caso, a função repetida.
  tecla.onkeyup = function () {
  tecla.classList.remove ('ativa');
  };
  console.loh(instrumento);
  console.log(contador);
}




