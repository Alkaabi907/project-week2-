const mongoose = require('mongoose');
const Car = require('../models/Car');

// Show all cars
const index = async (req, res) => {
  const cars = await Car.find();
  res.render('cars/index', { cars });
};

// Show one car
const show = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).render('NotFound', { title: 'Car Not Found' });
  }

  const car = await Car.findById(id);
  if (!car) {
    return res.status(404).render('NotFound', { title: 'Car Not Found' });
  }

  res.render('cars/show', { car });
};

// New form
const newForm = (req, res) => {
  res.render('cars/new');
};

// Create car
const create = async (req, res) => {
  await Car.create({ ...req.body, owner: req.userId });
  res.redirect('/cars');
};

// Edit form
const editForm = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).render('NotFound', { title: 'Car Not Found' });
  }

  const car = await Car.findById(id);
  if (!car) {
    return res.status(404).render('NotFound', { title: 'Car Not Found' });
  }

  res.render('cars/edit', { car });
};

// Update car
const update = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).render('NotFound', { title: 'Car Not Found' });
  }

  await Car.findByIdAndUpdate(id, req.body);
  res.redirect(`/cars/${id}`);
};

// Delete car
const destroy = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).render('NotFound', { title: 'Car Not Found' });
  }

  await Car.findByIdAndDelete(id);
  res.redirect('/cars');
};

module.exports = { index, show, newForm, create, editForm, update, destroy };
