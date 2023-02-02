const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let products = []; 

app.get('/admin-product', (req, res) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form> ');
});

app.post('/product', (req, res) => {
    products.push(req.body.title);
    console.log(products);
    res.redirect('/');
});

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    console.log('Full file path:', filePath);
  res.sendFile(filePath);
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
});
