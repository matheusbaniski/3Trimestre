    function tocaSomPom() {
      document.querySelector('#som_tecla_pom').play();
   document.querySelector('.tecla_pom').onclick = tocaSomPom;}

    function tocaSomClap() {
      document.querySelector('#som_tecla_clap').play();
   document.querySelector('.tecla_clap').onclick = tocaSomClap;}

   function tocaSomTim() {
    document.querySelector('#som_tecla_tim').play();
 document.querySelector('.tecla_tim').onclick = tocaSomTim;}

      function tocaSomPuff() {
      document.querySelector('#som_tecla_puff').play();
   document.querySelector('.tecla_puff').onclick = tocaSomPuff;}

     function tocaSomSplash() {
      document.querySelector('#som_tecla_splash').play()
   document.querySelector('.tecla_splash').onclick = tocaSomSplash;}
   
   function tocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
 document.querySelector('.tecla_toim').onclick = tocaSomToim;}

 function tocaSomPsh() {
  document.querySelector('#som_tecla_psh').play();
document.querySelector('.tecla_psh').onclick = tocaSomPsh;}
             
function tocaSomTic() {
  document.querySelector('#som_tecla_tic').play();
document.querySelector('.tecla_tic').onclick = tocaSomTic;}

function tocaSomTom() {
  document.querySelector('#som_tecla_tom').play();
document.querySelector('.tecla_tom').onclick = tocaSomTom;}
document.querySelectorAll('.tecla');
const ListaDeTeclas = document.querySelectorAll('.tecla');

ListaDeTeclas[0].onclick = tocaSomPom;
ListaDeTeclas[0].onclick = tocaSomClap;
ListaDeTeclas[0].onclick = tocaSomTim;
ListaDeTeclas[0].onclick = tocaSomPuff;
ListaDeTeclas[0].onclick = tocaSomSplash;
ListaDeTeclas[0].onclick = tocaSomToim;
ListaDeTeclas[0].onclick = tocaSomPsh;
ListaDeTeclas[0].onclick = tocaSomTic;
ListaDeTeclas[0].onclick = tocaSomTom;