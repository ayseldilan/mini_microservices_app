const express = require('express');

const app = express();

app.get('/posts', (req, res) => {

});

app.post('/posts', (req, res) => {

});

app.listen(400, () => {
    console.log('Listening on 400');
});