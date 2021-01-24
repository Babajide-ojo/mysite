const express = require("express");
const sendMail = require("./mail")
require("dotenv").config();

const cors = require("cors");



const app = express();
app.disable('etag');
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static('assets'));
app.use('/images', express.static(__dirname + '/Images'));
app.use('/css', express.static(__dirname + '/Css'));
app.use('/js', express.static(__dirname + '/Js'));
app.route("/").get(function (req, res) {
 
res.sendFile(__dirname + '/assets/index.html');
});
app.get('/about', function (req, res) {
  res.sendFile(assets + '/about.html');
});
app.get('/contact', function (req, res) {
  res.sendFile(assets + '/contact.html');
});
app.get('/mobilecontact', function (req, res) {
  res.sendFile(assets + '/mobilecontact.html');
});
app.get('/mobileservice', function (req, res) {
  res.sendFile(assets + '/mobileservice.html');
});
app.get('/mobileskills', function (req, res) {
  res.sendFile(assets + '/mobileskills.html');
});
app.get('/services', function (req, res) {
  res.sendFile(assets + '/services.html');
});
app.get('/skills', function (req, res) {
  res.sendFile(assets + '/skills.html');
});
//email, name, message
app.post('/email', (req, res)=>{
  const {email, subject, text} = req.body;
  console.log('Data:  ', req.body);
sendMail(email, subject, text, function(err, data){
  if(err){
    res.status(500).json({message: 'internal error'});
  } else {
    res.json({message: 'email sent'});
  }
});

})
//port will be 5000 for testing
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});