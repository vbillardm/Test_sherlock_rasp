const MongoClient = require('mongodb').MongoClient;
module.exports = {
  initialize: function(next){
    // initialization actions, there can be many of these
    this.initializeDb(next);
  },

  initializeDb: function(next){
    var db
    MongoClient.connect("mongodb://root:root@ds163181.mlab.com:63181/sherlock", (err, database) => {
      if (err){
        return next(err)
      }
      db = database
      module.exports.db = db;
      next();
    })
  }
}
