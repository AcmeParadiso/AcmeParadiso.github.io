

//home
var link = document.createElement( "link" );
link.href = "css/normalize.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName( "head" )[0].appendChild( link );


//home
var link = document.createElement( "link" );
link.href = "css/home.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName( "head" )[0].appendChild( link );


$('#twinkling').css('height', 200);


$('.ham-cont').click(function(){
    $('.nav').animate({"left":"0%"}, "slow");
})

$('.pop-out-close').click(function(){
    $('.nav').animate({"left":"100%"}, "slow");
})
    


