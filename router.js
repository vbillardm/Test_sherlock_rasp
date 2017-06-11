require ("./nodeServer.js");

module.exports = function(app){
  // get sherlock
  app.get('/',function(req,res){
  	res.sendFile("node.html", { root: __dirname });
  	})

// add form
  app.get('/add',function(req,res){
  	res.sendFile("form.html", { root: __dirname+"/template" });
  	})

  	// add song
  app.post('/addSong', (req, res) => {
    console.log(req.body);
  })
}
