const express = require('express');

const tanahRoutes = require('./routes/tanah.js');

const app = express();

//app.method(path, handler);
//app.use("/", (req, res, next) => {
 //   res.send('hello world');
//});

app.use('/tanah', tanahRoutes);

app.get('/', (req, res,) => {
    res.send('hello get world');
});

app.post('/', (req, res, next) => {
    res.send('hello post world');
});

app.listen(4000, () => {
    console.log('listening on server 4000');
})