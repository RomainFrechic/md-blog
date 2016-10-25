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
			// var text = '#article, response';
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
		$.ajax('http://192.168.1.40:1337/menu.json')
		.done(this.getMenuDone)
		.fail(this.getMenuFail)
		.always(this.getMenuAlways)
	},

	getMenuDone:function(response){
		console.log(response);
		var len = response.menu.length;
		var title = response.menu[0].title;
		var title2 = response.menu[1].title;
		var path = response.menu[0].path;
		var path2 = response.menu[1].path;

		$('#menu').html('<button data-url="http://192.168.1.40:1337'+path+'">'+title+'</button><button data-url="http://192.168.1.40:1337'+path2+'">'+title2+'</button>');

	},


	getMenuFail:function(){
		console.log(error);
	},

	getMenuAlways:function(){

	},

};

$(document).ready(function(){
	app.init();
});
})();