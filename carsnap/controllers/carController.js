const Car = require('../models/Car');

// ✅ Show all cars (anyone can see)
const index = async (req, res) => {
  try {
    const cars = await Car.find().populate('owner', 'username');
    res.render('cars/index', { cars, userId: req.userId });
  } catch (err) {
    console.error('Error loading cars:', err);
    res.status(500).send('Error loading cars');
  }
};

// Show form to create a new car
const newCar = (req, res) => {
  res.render('cars/new');
};

// ✅ Create a new car (now includes phone)
const create = async (req, res) => {
  const { make, model, year, price, description, imageUrl, phone } = req.body;

  if (!make || !model || !year || !price || !phone) {
    return res.status(400).render('cars/new', {
      error: 'All fields are required.'
    });
  }

  try {
    await Car.create({
      make,
      model,
      year,
      price,
      description,
      imageUrl,
      phone, // ✅ save phone
      owner: req.userId
    });

    res.redirect('/cars');
  } catch (err) {
    console.error('Error creating car:', err);
    res.status(500).send('Server error during car creation');
  }
};

// ✅ Show a single car (no changes needed)
const show = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id).populate('owner', 'username');
    if (!car) return res.status(404).send('Car not found');

    const isOwner = car.owner?._id?.toString() === req.userId;
    res.render('cars/show', { car, isOwner });
  } catch (err) {
    res.status(500).send('Error fetching car details');
  }
};

// Show form to edit a car
const edit = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car || car.owner?.toString() !== req.userId) {
      return res.status(403).send('Not authorized');
    }

    res.render('cars/edit', { car });
  } catch (err) {
    res.status(500).send('Error loading edit form');
  }
};

// ✅ Update a car (now includes phone)
const update = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car || car.owner?.toString() !== req.userId) {
      return res.status(403).send('Not authorized');
    }

    const { make, model, year, price, description, imageUrl, phone } = req.body;

    car.make = make;
    car.model = model;
    car.year = year;
    car.price = price;
    car.description = description;
    car.imageUrl = imageUrl;
    car.phone = phone; // ✅ update phone

    await car.save();
    res.redirect(`/cars/${car._id}`);
  } catch (err) {
    res.status(500).send('Error updating car');
  }
};

// Delete a car
const destroy = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car || car.owner?.toString() !== req.userId) {
      return res.status(403).send('Not authorized');
    }

    await car.deleteOne();
    res.redirect('/cars');
  } catch (err) {
    res.status(500).send('Error deleting car');
  }
};

// Show only user's cars
const myCars = async (req, res) => {
  try {
    const cars = await Car.find({ owner: req.userId });
    res.render('cars/mine', { cars });
  } catch (err) {
    res.status(500).send('Error loading your cars');
  }
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
