const Car = require('../models/Car');

// Show all cars
const index = async (req, res) => {
  const cars = await Car.find();
  res.render('cars/index', { cars });
};

// Show one car
const show = async (req, res) => {
  const car = await Car.findById(req.params.id);
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
  const car = await Car.findById(req.params.id);
  res.render('cars/edit', { car });
};

// Update car
const update = async (req, res) => {
  await Car.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/cars/${req.params.id}`);
};

// Delete car
const destroy = async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.redirect('/cars');
};

module.exports = { index, show, newForm, create, editForm, update, destroy };
