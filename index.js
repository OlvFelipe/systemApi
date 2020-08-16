const express = require('express');
const app = express();
const cors = require('cors');
const Routes = require('./src/routes/routes');

app.use(cors());

app.use(express.json());

app.use('/sistema', Routes);

app.listen(3333, (err) => {
    if (err) {
        console.log('Api out ', JSON.stringify(err));
    }
    console.log('Api in');
});