module.exports = function (app) {

//app.get('/',function(req,res,next){
 // res.render('index', { user: req.user });
//});

app.get('/', function(req,res){
    res.sendfile(__dirname + '/views/index.html');
  });


};