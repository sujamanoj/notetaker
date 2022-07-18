const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./Develop/routes/apiRoutes/noteRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(express.static(__dirname + '/Develop/public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});