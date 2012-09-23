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