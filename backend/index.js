const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const authRoutes = require('./routes/authRoutes');
const dealRoutes = require('./routes/dealRoutes');
const refRoutes = require('./routes/refRoutes')

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/deals', dealRoutes);
app.use('/api/reference', refRoutes)

async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync({ alter: true })
        app.listen(5501, () => {
            console.log('Server is running on port 5501');
        });
    } catch(e) {
        console.log(e)
    }
}

start()
