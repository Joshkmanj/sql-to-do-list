$(document).ready(readyNow);

function readyNow() {
    console.log('jquery is ready');
    // On page load/reload, this will retrieve data from the database
    getTasks();
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
    console.log('Refreshing page data');//<-- Test log to ensure this stage is being reached
    $.ajax({
        method: "GET",
        url: "/tasks"
    }).then(function(response){ // If the server responds...
        console.log('getTasks: Response from server:', response); //<-- logs response contents in console for test purposes
        renderToDom(response) //<--- Sends the response to be appended to DOM
    }).catch(function(error) {// In case of no response/error...
      console.error('getTasks: No response from server:', error);//<-- logs the error
    })
}
// ------------ < // END GET/SELECT Routes > -----------------------------------


// ------------ < POST/INSERT Routes > -----------------------------------------

// ------------ < // END POST/INSERT Routes > ----------------------------------


// ------------ < PUT/UPDATE Routes > ------------------------------------------

// ------------ < // END PUT/UPDATE Routes > -----------------------------------


// ------------ < DELETE Routes > ----------------------------------------------

// ------------ < // END DELETE Routes > ---------------------------------------