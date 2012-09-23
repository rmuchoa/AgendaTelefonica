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
    this.adicionar = function(idContact, name, phone){
        $("ul#contatos").append("<li data-theme='c'><a href='#paginaDetalhesContato' data-transition='slide' id-contact='"+idContact+"' telefone='"+phone+"'>"+name+"</a></li>");
        $('ul#contatos').listview('refresh');
    },
    
    this.limpar = function(){
        $("ul#contatos li").each(function(){
            $(this).remove();
        })
    },
    
    this.ordenar = function(){
        $("ul#contatos li").sort(asc_sort).appendTo('ul#contatos');
        $('ul#contatos').listview('refresh');
    }
    
}
var agenda = new Agenda();

function WebService(webserviceUrl){
    
    this.webserviceUrl = webserviceUrl;
    
    this.listar = function(){
        $.ajax({
            type: "POST",
            url: this.webserviceUrl,
            data: $('script#soap-template-get-contacts').html(),
            processData: false,
            async: false,
            timeout: 5000,
            success: function(data, textStatus, jqXHR){
                console.log('Dados recebido do web service: ' + data);
                $(data).find('item').each(function () {
                    agenda.adicionar($(this).find('id_contact').text(), $(this).find('name').text(), $(this).find('phone').text());
                });
            },
            error: function(request, status, error){
                console.log('erro');
            }
        });
    },
    
    this.adicionar = function(name, phone){
        template = $('script#soap-template-add-contact').html();
        template = template.replace("${name}", name);
        template = template.replace("${phone}", phone);
        var result=null;
        $.ajax({
            type: "POST",
            url: this.webserviceUrl,
            data: template,
            processData: false,
            async: false,
            timeout: 5000,
            success: function(data, textStatus, jqXHR){
                console.log('Dados recebido do web service: ' + data);
                result=true;
            },
            error: function(request, status, error){
                console.log('erro');
                result=false;
            }
        });
        return result;
    },
    
    this.excluir = function(idContact){
        template = $('script#soap-template-remove-contact').html();
        template = template.replace("${idContact}", idContact);
        var result=null;
        $.ajax({
            type: "POST",
            url: this.webserviceUrl,
            data: template,
            processData: false,
            async: false,
            timeout: 5000,
            success: function(data, textStatus, jqXHR){
                console.log('Dados recebido do web service: ' + data);
                result=true;
            },
            error: function(request, status, error){
                console.log('erro');
                result=false;
            }
        });
        return result;
    }
}

function Dialog(){
    
    this.message = '';
    this.title = '';
    this.nextPage = '';
    
    this.changeData= function(title, message, nextPage){
        this.title = title;
        this.message = message;
        this.nextPage = nextPage;
    },
    
    this.show = function(){
        $('div#dialog-box h3').html(this.title);
        $('div#dialog-box p').html(this.message);
        $('div#dialog-box a').attr('href', this.nextPage);
        $.mobile.changePage("#dialog-box");
    },
    this.hide = function(){
        
    }
}

var dialog = new Dialog();
//var webservice = new WebService("http://localhost/AgendaTelefonicaPHPSOAP/public/webservice.php");
url = prompt("URL do Web service", "http://localhost/AgendaTelefonica-PHP/public/webservice.php")
var webservice = new WebService(url);

//eventos
$(function() {
    webservice.listar();
    agenda.ordenar();
    
    $('a#botao-adicionar').click(function(){

        });
    
    $('a#botao-sair').click(function(){
        app.exitApp();
        device.exitApp();
    });
    
    $('ul#contatos li a').live("click", function(){
        console.log('você clicou no contato '+$(this).attr('id-contact'));
        $("div#detalhe-pessoa").attr('IdContact', $(this).attr('id-contact'));
        $("h3#detalhe-nome").text($(this).text());
        $("span#detalhe-telefone").html($(this).attr('telefone'));
    //$('div#collapsibleDetalhes').collapsibleset('refresh');
    });
    $('a#botao-excluir').click(function(){
        idContact = $(this).parent().parent().parent().attr('IdContact');
        result = webservice.excluir(idContact);
        if(result == true){
            agenda.limpar();
            webservice.listar();
            agenda.ordenar();
            dialog.changeData("Excluido!", "O contato foi excluido com sucesso!",'#paginaPrincipal');
        }else{
            dialog.changeData("Erro ao Excluido!", "O contato não foi excluido!",'#paginaPrincipal');
        }
        dialog.show();
    });
        
    $('button#botao-salvar-contato').click(function(e){
        e.preventDefault();
        webservice.adicionar($('input#nome').val(), $('input#telefone').val())
        $('input#nome').val('');
        $('input#telefone').val('');
        agenda.limpar();
        webservice.listar();
        agenda.ordenar();
        dialog.changeData("Sucesso!", "O contato foi salvo com sucesso!",'#paginaPrincipal');
        dialog.show();
    });
});

document.addEventListener("backbutton", function(e){
    if($.mobile.activePage.is('#paginaPrincipal')){
        e.preventDefault();
        navigator.app.exitApp();
    } else {
        navigator.app.backHistory()
    }
}, false);


