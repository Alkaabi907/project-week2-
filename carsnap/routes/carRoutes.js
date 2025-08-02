const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// All cars
router.get('/', carController.index);

// My cars
router.get('/mine', carController.myCars);

// New car form
router.get('/new', carController.new);

// Create car
router.post('/', carController.create);

// Show car
router.get('/:id', carController.show);

// Edit form
router.get('/:id/edit', carController.edit);

// Update car
router.put('/:id', carController.update);

// Delete car
router.delete('/:id', carController.destroy);

module.exports = router;
