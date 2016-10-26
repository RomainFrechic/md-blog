(function(){
	"use strict";
	var app = {



		init:function(){
			this.getMenu();
			this.listener();
			
		},
		listener:function(){
			$('#menu').on('click','button',function(){
				console.log($(this).data("url"));
             app.getMarkdown($(this).data("url"));
			});
		},	
    //Recuperer l'url
    getMarkdown:function(url){
    	$.ajax(url)
    	.done(this.getDone)
    	.fail(this.getFail)
    	.always(this.getAlways)
    },

    getDone:function(response){
    	console.log(response);
    	var converter = new showdown.Converter();
			var text = '#article, response';
			var inj = converter.makeHtml(response);
			$('#article').html(inj);
		},

		getFail:function(){
			console.log(error);
		},

		getAlways:function(){

		},
	//Recuperer le menu.json
	getMenu:function(){
		$.ajax('http://localhost:2000/menu.json')
		.done(this.getMenuDone)
		.fail(this.getMenuFail)
		.always(this.getMenuAlways)
	},

	getMenuDone:function(response){
		console.log(response);
		var len = response.menu.length;
        for(var i=0; i<len; i++){
        	console.log(i);
		$('#menu').append('<button data-url="http://localhost:2000/'+response.menu[i].path+'">'+response.menu[i].title+'</button>');
        }
	},


	getMenuFail:function(){
		console.log(error);
	},

	getMenuAlways:function(){
        console.log(completer);
	},

};

$(document).ready(function(){
	app.init();
});
})();