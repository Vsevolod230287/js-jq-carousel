// Per facilitarvi la vita usate immagini delle stesse dimensioni
 // :faccia_leggermente_sorridente: Lo slider prevederà due frecce (icone)
 // che permettono di scorrere tra le immagini dello slider In oltre per scorrere
 //  le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
 //  Utiliziamo una classe first e last per capire quali sono la prima
 //  e ultima immagine dello slider Utilizziamo una classe active per aiutarci
 //   a capire quale è l’immagine attuale da visualizzare nello slider
// BONUS
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente Generiamo i pallini con JS
$(document).ready(function () {
  var btnLeft = $(".prev .fa-angle-left");
  var btnRight = $(".next .fa-angle-right");
  var img = $(".images img")

  btnRight.click(function () {
    
    img.removeClass("active").next().addClass("active");
  })



});
