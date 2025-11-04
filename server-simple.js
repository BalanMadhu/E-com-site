const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

// Basic product route
app.get('/api/products', (req, res) => {
  res.json({
    products: [
      {
        _id: '1',
        name: 'Sample Product',
        price: 99.99,
        description: 'This is a sample product',
        category: 'Electronics',
        brand: 'Sample Brand',
        stock: 10,
        images: [{ url: 'https://via.placeholder.com/300' }],
        ratings: 4.5,
        numOfReviews: 5,
        isActive: true
      }
    ],
    page: 1,
    pages: 1,
    total: 1
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
  console.log(`✅ Test endpoint: http://localhost:${PORT}/api/test`);
});