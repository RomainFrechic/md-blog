 function commande(nom, argument) {
 	if (typeof argument === 'undefined') {
 		argument = '';
 	}

  // Exécuter la commande
  document.execCommand(nom, false, argument);
  console.log(commande,"commande");
}

function resultat() {
	var result = document.getElementById("resultat").value 
	result = document.getElementById("editeur").innerHTML;
	$('#contenu').append('<div>'+result+'</div>');
	console.log(result);
}

