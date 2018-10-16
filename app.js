var express = require('express');
var app = express();

app.use(express.static(__dirname + "/src/static"));

var server = require('http').Server(app);
var io = require('socket.io')(server);

var slides_markdown = require('./slides_markdown');
var Creator = require('./src/api/creator');

creator = new Creator();

let slide_preview = creator.createSlides(slides_markdown);
let setup = false;
let server_ip;

io.on('connection', function(socket){
  console.log('a user connected');

  socket.emit('setup', { 
    slides_markdown : slides_markdown,
    slides_preview: slide_preview
  });

  if(setup)
    io.emit('new_user');

  socket.on('setup_complete', function(){      
    setup = true;
    // socket.disconnect( console.log('sender disconnected'));
  });
  
  socket.on('SLIDESHOW_ACTION', function(action){
    io.emit('SLIDESHOW_ACTION', action);
  });
  
  socket.on('SLIDE_ACTION', function(action){
    io.emit('SLIDE_ACTION', action);
  });
});

app.get('/', function (req, res) {
  // console.log('User ip: ', req.ip, req.connection.localAddress);
  // console.log('Server ip: ', req.connection.loadAddress);
  res.sendFile(__dirname + '/src/index.html');
});

server.listen(5000, function(){
  console.log('listening on *:5000');
});