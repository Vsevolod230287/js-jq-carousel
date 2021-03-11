$(document).ready(function() {
  var prevBtn = $('.prev i.fa-angle-left');
  var nextBtn = $('.next i.fa-angle-right');



  nextBtn.click(function() {
    var activeImg = $('.images img.active');
    var activeCircle = $('.nav i.active');

    if (activeImg.hasClass('last')) {

      activeImg.removeClass('active');
      $('.images img.first').addClass('active');

      activeCircle.removeClass('active');
      $('.nav i.first').addClass('active');

    } else {

      activeImg.removeClass('active').next().addClass('active');
      activeCircle.removeClass('active').next().addClass('active');

    }
  })



  prevBtn.click(function() {
    var activeImg = $('.images img.active');
    var activeCircle = $('.nav i.active');

    if (activeImg.hasClass('first')) {

      activeImg.removeClass('active');
      $('.images img.last').addClass('active');

      activeCircle.removeClass('active');
      $('.nav i.last').addClass('active');

    } else {

      activeImg.removeClass('active').prev().addClass('active');
      activeCircle.removeClass('active').prev().addClass('active');

    }
  })



}) // document ready function chiusura
