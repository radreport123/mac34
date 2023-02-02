const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const ejs = require('ejs');

const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

class car {
  constructor(options) {
    this.make = options.make;
  }
}



let products = []; 

app.get('/admin-product', (req, res) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form> ');
});

app.post('/product', (req, res) => {
    products.push(req.body.title);
    console.log(products);
    res.redirect('/');
});


app.get('/car', (req, res) => {
  const vehicle = new car({
    make: req.body.title,
  });
  products.push(vehicle);
  res.render('list', { kindOfDay: products });
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
