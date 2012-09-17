$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
});


// accending sort
function asc_sort(a, b){
    return ($(b).text()) < ($(a).text());    
}

// decending sort
function dec_sort(a, b){
    return ($(b).text()) > ($(a).text());    
}

function Agenda(){
    this.adicionar = function(name, phone){
        $("ul#contatos").append("<li data-theme='c'><a href='#paginaDetalhesContato' data-transition='slide' telefone='"+phone+"'>"+name+"</a></li>");
        $('ul#contatos').listview('refresh');
    },
    
    this.limpar = function(){
        $("ul#contatos li").each(function(){
            $(this).remove();
        })
    }
    
    this.ordenar = function(){
        $("ul#contatos li").sort(asc_sort).appendTo('ul#contatos');
    }
    
}
var agenda = new Agenda();

function WebService(webserviceUrl){
    
    this.webserviceUrl = webserviceUrl;
    
    this.list = function(){
        $.ajax({
            type: "POST",
            url: this.webserviceUrl,
            //contentType: "text/xml",
            data: $('script#soap-template-list').html(),
            //dataType: "xml",
            processData: false,
            async: false,
            success: function(data, textStatus, jqXHR){
                console.log('Dados recebido do web service: ' + data);
                $(data).find('item').each(function () {
                    agenda.adicionar($(this).find('name').text(), $(this).find('phone').text())
                });
            },
            error: function(request, status, error){
                console.log('erro');
            }
        });
    },
    
    this.adicionar = function(name, phone){
        template = $('script#soap-template-add').html();
        template = template.replace("${name}", name);
        template = template.replace("${phone}", phone);
        $.ajax({
            type: "POST",
            url: this.webserviceUrl,
            data: template,
            processData: false,
            async: false,
            success: function(data, textStatus, jqXHR){
                console.log('Dados recebido do web service: ' + data);
            },
            error: function(request, status, error){
                console.log('erro');
            }
        });
    }
}


//var webservice = new WebService("http://localhost/AgendaTelefonicaPHPSOAP/public/webservice.php");
url = prompt("URL do Web service", "http://127.0.0.1:8080/PhonebookService/PhonebookService")
var webservice = new WebService(url);

//eventos
$(function() {
    $('a#botao-adicionar').click(function(){

        });
});





