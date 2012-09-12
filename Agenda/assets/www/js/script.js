$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
});

var webserviceUrl = "http://127.0.0.1:8080/AgendaTelefonica-JSP/PhonebookService";

$(function() {
    $('a#botao-adicionar').click(function(){
        $("ul#contatos").append("<li data-theme='c'><a href='#page1' data-transition='slide'>Noob!</a></li>");
        $('ul#contatos').listview('refresh');
                    
        console.log($('script#soap-template-list').html());
        $.ajax({
            type: "post",
            url: webserviceUrl,
            contentType: "text/xml",
            data: $('script#soap-template-list').html(),
            dataType: "xml",
            processData: false,
            sucess: function(data){
                console.log(data);
            },
            error: function(){
                console.log('erro');
            }
        });
                    
                    
    });
});





