const express = require('express');

const tanahRoutes = require('./routes/tanah.js');

const middlewareLogRequest = require('./middleware/logs');

const app = express();

app.use(middlewareLogRequest);



app.use(express.json());

app.use('/tanaman', tanahRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
