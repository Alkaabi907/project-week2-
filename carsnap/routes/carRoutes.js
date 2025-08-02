const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const { requireAuth } = require('../middleware/authMiddleware');

// Public routes
router.get('/', carController.index);

// Protected routes (ثابتة أولاً)
router.get('/new', requireAuth, carController.newForm);
router.get('/:id/edit', requireAuth, carController.editForm);
router.put('/:id', requireAuth, carController.update);
router.delete('/:id', requireAuth, carController.destroy);
router.post('/', requireAuth, carController.create);

// Dynamic route (آخر شيء)
router.get('/:id', carController.show);

module.exports = router;
