// routes/index.js
const express = require('express');
const router = express.Router();

// Simulated database (in-memory array)
let items = [
  { id: 1, name: 'Item 1', description: 'Description of Item 1' },
  { id: 2, name: 'Item 2', description: 'Description of Item 2' }
];

// Index (Show All Items)
router.get('/', (req, res) => {
  res.render('index', { items });
});

// Add Item (Form to Add)
router.get('/add', (req, res) => {
  res.render('add');
});

// Add Item (POST request)
router.post('/add', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description
  };
  items.push(newItem);
  res.redirect('/');
});

// Edit Item (Form to Edit)
router.get('/edit/:id', (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  res.render('edit', { item });
});

// Edit Item (POST request)
router.post('/edit/:id', (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  item.name = req.body.name;
  item.description = req.body.description;
  res.redirect('/');
});

// Delete Item
router.get('/delete/:id', (req, res) => {
  items = items.filter(i => i.id != req.params.id);
  res.redirect('/');
});

module.exports = router;
