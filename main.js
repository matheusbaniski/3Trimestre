    function tocaSomPom() {
      document.querySelector('#som_tecla_pom').play();}

document.querySelectorAll('.tecla');
const ListaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
//estrair de repetiçao - Enquanto
while(contador <ListaDeTeclas.length) {
  ListaDeTeclas[contador].onclick= tocaSomPom;
  contador = contador+1;
}
