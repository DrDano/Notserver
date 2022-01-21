// The notes page presents with previous notes in left column
// When save is clicked, that data is added to the existing data
// When I click on a left-hand menu note, its content appears and is editable to save
// When I click the plus, the fields are cleared and allow me to enter a new note to save
// When I click trash can icon, the note should be deleted from the data


const express = require('express');
const PORT = process.env.PORT || 3003;

const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static('public'));

// routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, () => {
    console.log(`Notes server now available at port ${PORT}`);
})