require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;
const userRoute = require('./routes/user.route');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', ()=> console.log('**** Connection to db established ****'));

app.use(express.json());
app.use(express.urlencoded({
    type:'application/x-www-form-urlencoded',
    extended: true,
}));

// Routers
app.use('/', userRoute);

app.use('*', (req, res) => {
    res.status(400);
    res.send("Path no found");
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running on ${HOSTNAME}:${PORT}`);
});