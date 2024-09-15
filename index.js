const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const { mongoose } = require('mongoose');
const url = 'mongodb://localhost:27017/my_db';
mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;
con.on('open', ()=>{
    console.log("connected... !");
})

// Parse JSON bodies
app.use(bodyParser.json());

// Import the routes
const itemRoutes = require('./routes/router');
app.use('/', itemRoutes);


// Use the routes
//app.use('/api/items', itemRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
