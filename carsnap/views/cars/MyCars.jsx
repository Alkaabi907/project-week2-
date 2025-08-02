import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchMyCars = async () => {
      try {
        const res = await axios.get('/cars/mine');
        setCars(res.data);
      } catch (err) {
        console.error('Failed to fetch your cars:', err);
      }
    };

    fetchMyCars();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/cars/${id}`);
      setCars(prev => prev.filter(car => car._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  return (
    <div>
      <h1>My Cars</h1>
      {cars.length === 0 ? (
        <p>You haven't posted any cars yet.</p>
      ) : (
        <ul>
          {cars.map(car => (
            <li key={car._id} style={{ marginBottom: '20px' }}>
              <h3>{car.make} {car.model} ({car.year})</h3>
              <p>Price: {car.price} BHD</p>
              <img src={car.imageUrl} alt="Car" width="200" />
              <p>{car.description}</p>
              <Link to={`/cars/${car._id}`}>View</Link> |{' '}
              <Link to={`/cars/${car._id}/edit`}>Edit</Link> |{' '}
              <button onClick={() => handleDelete(car._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyCars;
