require ("./nodeServer.js");

module.exports = function(app,db){
  // get sherlock
  // app.get('/',function(req,res){
  // 	res.sendFile("node.html", { root: __dirname });
  // 	})

app.get('/',function(req,res){
  var songs = db.collection('songs').find().toArray(function(err, results) {
		if (err) return console.log(err)
	});
	// res.render("list.html", { root: __dirname+"/views" });
	res.render('list', { songs: songs })
})

// add form
  app.get('/add',function(req,res){
  	res.sendFile("form.html", { root: __dirname+"/views" });
  	})

  	// add song
  app.post('/addSong', (req, res) => {
    db.collection('songs').save(req.body, (err, result) => {
    if (err) return console.log(err)
      console.log('saved to database')
    res.redirect('/')
    })
  })
}
