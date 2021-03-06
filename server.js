const express   = require('express');
const ejs       = require('ejs');
const app       = express();

app.use(express.static('public')); // open folder for show
app.set('view engine', ejs);

app.get('/date', (req, res) => {
    let today = new Date();
    let day = '';
    let personData = {
        firstName: 'John',
        lastName: 'Doe',
        age: 34,
        job: 'Developer'
    }

    // weekdays
    if(today.getDay() === 6 || today.getDate === 0) {
        day = 'Weekend';
    } {
        day = 'Workday';
    }

    res.render('index.ejs', {
        kindOfDay: day,
        person: personData
    }); // default find in folder views
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});