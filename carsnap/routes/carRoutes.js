const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const { requireAuth } = require('../middleware/authMiddleware');

// Public routes
router.get('/', carController.index);
router.get('/:id', carController.show);

// Protected routes
router.get('/new', requireAuth, carController.newForm);
router.post('/', requireAuth, carController.create);
router.get('/:id/edit', requireAuth, carController.editForm);
router.put('/:id', requireAuth, carController.update);
router.delete('/:id', requireAuth, carController.destroy);

module.exports = router;
