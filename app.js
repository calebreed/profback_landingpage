// reference the http module so we can create a webserver
var http = require("http");
var express = require('express');
var app = express();
var server = http.createServer(app);
//var engine = require('ejs-locals');
server.listen(process.env.PORT);

require("./routes")(app);




app.configure(function(){
  app.set('views', __dirname + '/views');
  //app.set('view engine', 'ejs');
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
 // app.use(require('stylus').middleware({ src: __dirname + '/public' }));
 // app.use(express.session({ secret: 'applecake' }));
 //app.use(passport.initialize());
 // app.use(passport.session());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use("/images", express.static(__dirname + '/images'));
});

//app.engine('ejs', engine);




