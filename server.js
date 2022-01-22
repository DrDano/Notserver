const express = require('express');
const PORT = process.env.PORT || 3003;

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const app = express();

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static('public'));

// routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`Notes server now available at port ${PORT}`);
})