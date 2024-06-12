const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/authRoutes');
const config = require('./config/config');

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to user DB'))
  .catch(err => console.log(err));

app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Auth API is running on port ${PORT}`);
});
