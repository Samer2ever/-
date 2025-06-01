const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Ad = require('./models/Ad');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/ads', async (req, res) => {
  const ads = await Ad.find().sort({ _id: -1 });
  res.json(ads);
});

app.post('/ads', async (req, res) => {
  const newAd = new Ad(req.body);
  await newAd.save();
  res.json({ message: 'تم الحفظ' });
});

app.listen(3000, () => console.log('الخادم يعمل على http://localhost:3000'));
