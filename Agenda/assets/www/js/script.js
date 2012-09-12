var webserviceUrl = "http://127.0.0.1:8000/AgendaTelefonica/PhonebookService";

$(function() {
                $('a#botao-adicionar').click(function(){
                    $("ul#contatos").append("<li data-theme='c'><a href='#page1' data-transition='slide'>Noob!</a></li>");
                    $('ul#contatos').listview('refresh');
                    
                    
                    $.ajax({
                    	type: "post",
                    	url: webserviceUrl,
                    	contentType: "text/xml",
                    	//data: soapBody,
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



