var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs =require('fs');

// Crée l'application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static('public'));


app.post('/process_post', urlencodedParser, function (req, res) {
   // Préparer une sortie au format JSON
   response = {
      path:req.body.path,
      title:req.body.title
   };





   fs.readFile(__dirname +'/public/menu.json', 'utf8',function(err,data){
      //transformer en objet
      var content = JSON.parse(data);
      //mettre dans le menuJSON
      content.menu.push(response);
      //transformer en string
      var fileStr = JSON.stringify(content);
      if(err) throw err;

      fs.writeFile(__dirname +'/public/menu.json',fileStr, 'utf8',function(err){
         if(err) throw err;
         res.send('ok');
      });
   });

});


var server = app.listen(2000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

});



