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
    db.collection('songs').save(req.body, (err, result) => {
      console.log('yolo')
    if (err) return console.log(err)
      console.log('saved to database')
    res.redirect('/')
    })
  })
}
