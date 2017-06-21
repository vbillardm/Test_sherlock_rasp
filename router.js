require ("./nodeServer.js");

module.exports = function(app,db){
	
// Song's list
	app.get('/',function(req,res){
	  var songs = db.collection('songs').find().toArray(function(err, results) {
			if (err) return console.log(err)
			res.render('list', { songs: results })
		});
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
