const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json({ limit: '50mb' }));
const routes = require('./Routes/index');
const mongoose = require('mongoose');
const DBConstants = require('./Constants/DBConstants');

const DB = DBConstants.URL_SERVER + DBConstants.DB_NAME;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => console.log(`Connected to ${DB}...`))
  .catch((err) => {
    
    console.error('Could not connect to MongoDB...')
    console.log(err)
  });



app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});

app.use('/api' , routes);



const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin : "*" } });
io.on('connection', (socket) => {
    
    console.log('User connected ' + socket.id);  
  
    socket.on('message', (message) => {
      console.log('message' , message);
      socket.broadcast.emit('message' , message);
    });

});
server.listen(3000 , ()=>{
  console.log("app runing on port 3000");
});