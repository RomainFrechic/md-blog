 function commande(nom, argument) {
  if (typeof argument === 'undefined') {
    argument = '';
  }

  console.log(commande,"commande");
  // Exécuter la commande
  document.execCommand(nom, false, argument);
}

function resultat() {
  var result = document.getElementById("resultat").value = document.getElementById("editeur").innerHTML;
  $('#contenu').append('<div>'+result+'</div>');
   console.log(result);
}