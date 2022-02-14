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
router.post('/', (req,res) => {
    console.log('POST request from client to /tasks:', req.body); //<--testing to ensure this stage is being reached
    
    // Assigning variables to make the flow of things more readable
    let importedData = req.body.newTaskObject
    let queryText = `INSERT INTO "tasks" ("task","priority") VALUES ($1,$2);`; //<--This variable sanitizes imported data and stores the sql command that'll be used in the database
    pool.query(queryText, [importedData.task,importedData.priority])//<---This is the sanitized data sent to database.

    .then(result => {   // If the database responds...
    res.sendStatus(201); //<-- confirmation sent back to the client
}).catch(error => {   // If the database doesn't respond, or has an error...
    console.log('error posting tasks', error); //<-- logs the problem
    res.sendStatus(500); //<--- Sends an error code back to client
  });
})
// ------------ < // END POST/INSERT Routes > ----------------------------------


// ------------ < PUT/UPDATE Routes > ------------------------------------------

// ------------ < // END PUT/UPDATE Routes > -----------------------------------


// ------------ < DELETE Routes > ----------------------------------------------
router.delete('/:id', (req,res) => {
  let deleteId = req.params.id;
  let queryText = `DELETE FROM "tasks" WHERE "id" = $1;`;
  pool.query(queryText, [deleteId])
  .then(result => {
    console.log('Database deleted successfully:', result);
    res.sendStatus(200)
  }).catch((error)=>{
    console.log('Delete failed!', queryText, error);
    res.sendStatus(500)
  })
})
// ------------ < // END DELETE Routes > ---------------------------------------




module.exports = router