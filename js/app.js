(function(){
	"use strict";
	var app = {

		serverUrl: "http://localhost:2000",

		init:function(){
			this.getMenu();
			this.listener();
			
		},
		listener:function(){
			$('#menu').on('click','button',function(){
				var url = $(this).data("url");
				console.log(url);
				app.getMarkdown(url);
			});
		},	
    //Recuperer l'url
    getMarkdown:function(url){
    	$.ajax(url)
    	.done(this.getDone)
    	.fail(this.getFail);
    },

    getDone:function(response){
    	console.log(response);
    	var converter = new showdown.Converter();

    	var inj = converter.makeHtml(response);
    	$('#article').html(inj);
    },

    getFail:function(){
    	console.log("error");
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

			var buttonHtml = '<button data-url="http://localhost:2000/';
			buttonHtml += response.menu[i].path+'">';
			buttonHtml += response.menu[i].title+'</button>';

			$('#menu').append(buttonHtml);
		}
	},


	getMenuFail:function(){
		console.log("error");
	},

	getMenuAlways:function(){

		console.log("completer");
	},

};

$(document).ready(function(){
	app.init();
});
})();