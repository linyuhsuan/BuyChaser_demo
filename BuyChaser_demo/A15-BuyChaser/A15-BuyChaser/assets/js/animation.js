$(window).scroll(function() {
    
    if ( $(this).scrollTop() > 100){
        $('#header.alt').css("background-color","#fcf7eb");
        $('#header.alt nav a').css("color","dimgray");
    } 

    if ( $(this).scrollTop() < 100){
        $('#header.alt').css("background-color","transparent");
        $('#header.alt nav a').css("color","white");
    } 
});