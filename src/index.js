const express = require('express');

const tanahRoutes = require('./routes/tanah.js');

const middlewareLogRequest = require('./middleware/logs');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/tanah', tanahRoutes);

app.listen(4000, () => {
    console.log('listening on server 4000');
})