module.exports = function (app) {
app.post('/contact', function(req, res){
var path= require('path')
  //, templatesDir   = path.resolve(__dirname, '..', 'templates')
 // , emailTemplates = require('../../')
  , nodemailer     = require('nodemailer');

var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",  // sets automatically host, port and connection security settings
   auth: {
       user: "professorfeedback@gmail.com",
       pass: "2525professorfeedback"
   }
});

smtpTransport.sendMail({  //email options
   from: "Caleb <professorfeedback@gmail.com>", // sender address.  Must be the same as authenticated user if using Gmail.
   to: "Receiver Name <reedcaleb@gmail.com>", // receiver
   subject: "Emailing with nodemailer", // subject
   text: "Email Example with nodemailer" // body
}, function(error, response){  //callback
   if(error){
       res.render('contact', { title: 'Contact-error', 
       msg: 'Error occured, message not sent.', err: true, page: 'contact' });
       console.log(error);
   }else{
       res.render('contact', { title: 'Contact-succeeded', 
       msg: 'Message sent! Thank you.', err: false, page: 'contact' });
      // res.send(req.body);
       console.log(req.body);
     //  console.log("Message sent: " + response.message);
   }
   
   smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
});

//res.render('contact', { title: 'Raging Flame Laboratory - Contact', page: 'contact' });

});
};