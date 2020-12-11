const multer = require('multer');
const upload = multer({
	// dest:'/var/www/museum.jsgames.me/images/',
	dest: '../front-end/public/images/',
	limits:{
		fileSize: 100000000
	}
});

const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/museum', {
  useNewUrlParser: true
});

// mongoose scehma for items
const itemSchema = new mongoose.Schema({
	title:String,
	path: String,
	price: Number,
	quantity: Number,
});

// Model for items
const Item = mongoose.model('Item', itemSchema);

// API POST for adding photos
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
  	// 400 = bad request
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

app.post('/api/items', async (req,res) =>{
	const item = new Item({
		title: req.body.title,
		path: req.body.path,
		price: req.body.price,
		quantity: 0,
	});
	try{
		await item.save();
		res.send(item);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

// Get list of all items
app.get('/api/items', async (req,res) =>{
	try{
		let items = await Item.find();
		res.send(items);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

// Delete an item
app.delete('/api/items/:id', async (req,res) =>{
	try{
		await Item.deleteOne({
			_id: req.params.id
		});
		res.sendStatus(200);
	} catch (e){
		console.log(e);
		res.sendStatus(500);
	}
});

app.put('/api/items/:id', async (req, res) => {
	try{
		let item = await Item.findOne({
			_id: req.params.id
		});
		console.log("trying to change " + item.title+" to " + req.body.title);
		item.title = req.body.title;
		item.price = req.body.price;
		item.save();
		res.sendStatus(200);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});


app.listen(3000, () => console.log('Server listening on port 3000!'));
