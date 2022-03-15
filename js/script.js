

$('nav a').click(function(){
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);

    
  });