const express = require('express');
const router = express.Router();

// Link to database
const pool = require('../modules/pool')

// ------------ < GET/SELECT Routes > ------------------------------------------
router.get('/', (req,res) => {
    console.log('GET request from client to /tasks'); //<--testing to ensure this stage is being reached

    let queryText = 'SELECT * FROM "tasks" ORDER BY "priority";'; //<--This variable stores the sql command that'll be used in the database
    pool.query(queryText)//<---This is the out-going message to the database.
    
    .then(result => {   // If the database responds...
    res.send(result.rows); //<-- result is sent back to the client

  }).catch(error => {   // If the database doesn't respond, or has an error...
    console.log('error getting tasks', error); //<-- logs the problem
    res.sendStatus(500); //<--- Sends an error code back to client
  });
})
// ------------ < // END GET/SELECT Routes > -----------------------------------


// ------------ < POST/INSERT Routes > -----------------------------------------

// ------------ < // END POST/INSERT Routes > ----------------------------------


// ------------ < PUT/UPDATE Routes > ------------------------------------------

// ------------ < // END PUT/UPDATE Routes > -----------------------------------


// ------------ < DELETE Routes > ----------------------------------------------

// ------------ < // END DELETE Routes > ---------------------------------------




module.exports = router