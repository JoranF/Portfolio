$(function() { // toggle active nav item
$('#home').addClass('activel'); // home active on load

$('.nav-link').click(function(){
    $('.nav-link').removeClass('activel');

    $(this).toggleClass('activel');
});
});