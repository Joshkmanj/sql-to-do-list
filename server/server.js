const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const taskRouter = require('./routes/task.router');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

// ROUTES
app.use('/tasks', taskRouter);







// Server starts listening here.
app.listen(PORT,() => {
    console.log('Listening on port:', PORT);
});