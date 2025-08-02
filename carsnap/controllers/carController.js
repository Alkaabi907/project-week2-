const Car = require('../models/Car');

// Show all cars
const index = async (req, res) => {
  const cars = await Car.find();
  res.render('cars/index', { cars, userId: req.userId });
};

// Show form to create a new car
const newCar = (req, res) => {
  res.render('cars/new');
};

// Create a new car
const create = async (req, res) => {
  const { make, model, year, price, description, imageUrl } = req.body;

  if (!make || !model || !year || !price) {
    return res.status(400).render('cars/new', { error: 'All fields are required.' });
  }

  await Car.create({
    make,
    model,
    year,
    price,
    description,
    imageUrl,
    owner: req.userId
  });

  res.redirect('/cars');
};

// Show a single car
const show = async (req, res) => {
  const car = await Car.findById(req.params.id);

  if (!car) return res.status(404).send('Car not found');

  const isOwner = car.owner?.toString() === req.userId;
  res.render('cars/show', { car, isOwner });
};

// Show form to edit a car
const edit = async (req, res) => {
  const car = await Car.findById(req.params.id);

  if (!car || car.owner?.toString() !== req.userId) {
    return res.status(403).send('Not authorized');
  }

  res.render('cars/edit', { car });
};

// Update a car
const update = async (req, res) => {
  const car = await Car.findById(req.params.id);

  if (!car || car.owner?.toString() !== req.userId) {
    return res.status(403).send('Not authorized');
  }

  const { make, model, year, price, description, imageUrl } = req.body;

  car.make = make;
  car.model = model;
  car.year = year;
  car.price = price;
  car.description = description;
  car.imageUrl = imageUrl;

  await car.save();
  res.redirect(`/cars/${car._id}`);
};

// Delete a car
const destroy = async (req, res) => {
  const car = await Car.findById(req.params.id);

  if (!car || car.owner?.toString() !== req.userId) {
    return res.status(403).send('Not authorized');
  }

  await car.deleteOne();
  res.redirect('/cars');
};

// Show only cars owned by the logged-in user
const myCars = async (req, res) => {
  const cars = await Car.find({ owner: req.userId });
  res.render('cars/mine', { cars });
};

module.exports = {
  index,
  new: newCar,
  create,
  show,
  edit,
  update,
  destroy,
  myCars
};
