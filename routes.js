module.exports = function (app) {

//app.get('/',function(req,res,next){
 // res.render('index', { user: req.user });
//});

app.get('/', function(req,res){
    res.sendfile(__dirname + '/views/index.html');
  });
  
//app.get('/contact', function(req, res){
  //  res.render
//});
  

//app.post('/', function(req, res){
 // console.log(req.body);
 // var email = req.param('email', null);
 //res.render('contact', { title: 'Raging Flame Laboratory - Contact', page: 'contact' })
 // res.redirect('back');
// });


};