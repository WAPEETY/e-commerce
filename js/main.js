$(document).ready(function () {
        $('.sidenav').sidenav();
});

$(document).ready(function(){
    $('.carousel').carousel();
});

$(document).ready(function(){
    $('.pushpin').pushpin();
});

$('.sidenav li').click(() => {
  $('.sidenav').sidenav('close');
})
