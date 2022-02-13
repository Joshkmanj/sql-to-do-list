const express = require('express');
const router = express.Router();

// Link to database
const pool = require('../modules/pool')

// ------------ < GET/SELECT Routes > ------------------------------------------
router.get('/', (req,res) => {
    console.log('GET request from client to /tasks:', req.body);
    res.sendStatus(200)
})
// ------------ < // END GET/SELECT Routes > -----------------------------------


// ------------ < POST/INSERT Routes > -----------------------------------------

// ------------ < // END POST/INSERT Routes > ----------------------------------


// ------------ < PUT/UPDATE Routes > ------------------------------------------

// ------------ < // END PUT/UPDATE Routes > -----------------------------------


// ------------ < DELETE Routes > ----------------------------------------------

// ------------ < // END DELETE Routes > ---------------------------------------




module.exports = router