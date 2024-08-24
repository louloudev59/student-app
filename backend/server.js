const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/auth');

const auth = require('./middleware/auth');

app.get('/api/prive', auth, (req, res) => {
    res.json({ message: 'Il s\'agit d\'une route privé' });
});

app.use('/api/auth', authRoutes);
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API en cours de running...');
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connecté'))
  .catch(err => console.error(err));

app.listen(PORT, () => console.log(`Serveur s'éxecute sur le port ${PORT}`));
