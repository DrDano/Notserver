const express = require('express');
const { notes } = require('./data/db.json');
const PORT = process.env.PORT || 3003;

const app = express();

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static('public'));



app.listen(PORT, () => {
    console.log(`Notes server now available at port ${PORT}`);
})