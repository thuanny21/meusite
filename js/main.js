$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});



//scroll
$('.navbar a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
            
    $('html, body').animate({ 
        scrollTop: targetOffset - 60
    }, 500);
});



//
Visibility.onVisible(function(){
    setTimeout(function () {
        $(".introducao h1").addClass("animated fadeInDown");
    }, 400);
    setTimeout(function () {
        $(".introducao blockquote").addClass("animated fadeInDown");
    }, 800);
    setTimeout(function () {
        $(".introducao .btn").addClass("animated fadeInDown");
    }, 1200);
    setTimeout(function () {
        $(".animar").addClass("animated fadeInDown");
    }, 1600);

    setTimeout(function () {
        $(".introducao-interna h1").addClass("animated fadeInDown");
    }, 400);
    setTimeout(function () {
        $(".introducao-interna p").addClass("animated fadeInDown");
    }, 800);
    setTimeout(function () {
        $(".animar-interno").addClass("animated fadeInDown");
    }, 1200);
});