//acessando elemento com jquery
const titulo = $("h1")

//mudar o texto do elemento
titulo.text("Olá JQuery")

//css via jquery
//titulo.css("color", "red")
titulo.css({
    "color" : "red",
    "text-align" : "center",
    "font-size" : "25px"
});

titulo.on("click", function(){
    $("body").css("background-color", "yellow");
    $("h2").text("clicou!!")

    titulo.fadeOut();
});