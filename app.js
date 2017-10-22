const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const viewsRouter = require('./routes/views.js');				// Routes directory

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use(viewsRouter.router);

app.listen(3000, function(){
	console.log("Server Started");
});
