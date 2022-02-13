$(document).ready(readyNow);

function readyNow() {
    console.log('jquery is ready');
    // On page load/reload, this will retrieve data from the database
    getTasks();
    $('#input-button').on('click', addTasks)
}

// ------------ < Display handlers > -------------------------------------------
function renderToDom(array){
    console.log('Rendering an array to the DOM');
    $('#taskOutput').empty()
    for (let object of array) {
        $('#taskOutput').append(`
        <tr data-id=${object.id}>
            <td>${object.task}</td>
            <td>${object.priority}</td>
            <td>${object.status}</td>
        </tr>`)
    }
}
// ------------ < // END Display handlers > ------------------------------------

// ------------ < GET/SELECT Routes > ------------------------------------------
function getTasks() {
    console.log('Refreshing page data');//<-- Test to ensure this stage is being reached
    $.ajax({
        method: "GET",
        url: "/tasks"
    }).then(function(response){ // If the server responds...
        console.log('getTasks: Response from server:', response); //<-- logs response contents in console for test purposes
        renderToDom(response) //<--- Sends the response to be appended to DOM
    }).catch(function(error) { // In case of no response/error...
      console.error('getTasks: No response from server:', error);//<-- logs the error
    })
}
// ------------ < // END GET/SELECT Routes > -----------------------------------


// ------------ < POST/INSERT Routes > -----------------------------------------
function addTasks(){
    console.log('Adding new task!'); //<-- Test to ensure this stage is being reached

    let newTaskObject = { // <-- this grabs the data from the input field and packs it in an object
        task: $('#task-intake').val(),
        priority: $('#priority-selector').val()
    }
    console.log('new task:', newTaskObject);
    

    $.ajax({
        method: "POST",
        url: '/tasks',
        data:{
            newTaskObject // This is the object that is sent to the server
        }
    }).then(function(response){ // If the server responds...
        console.log('addTasks: Response from server:', response);//<-- logs response contents in console for test purposes
        getTasks()
    }).catch(function(error) { // In case of no response/error...
        console.error('addTasks: No response from server:', error) //<-- logs the error
    })
}
// ------------ < // END POST/INSERT Routes > ----------------------------------


// ------------ < PUT/UPDATE Routes > ------------------------------------------

// ------------ < // END PUT/UPDATE Routes > -----------------------------------


// ------------ < DELETE Routes > ----------------------------------------------

// ------------ < // END DELETE Routes > ---------------------------------------