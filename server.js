require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes);

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Подключено к MongoDB');
  app.listen(5000, () => console.log('🚀 Сервер запущен на http://localhost:5000'));
})
.catch(err => console.error('❌ Ошибка подключения к MongoDB:', err));
