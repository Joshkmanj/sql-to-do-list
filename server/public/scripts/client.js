$(document).ready(readyNow);

function readyNow() {
    console.log('jquery is ready');
    // On page load/reload, this will retrieve data from the database
    getTasks();
    $('#input-button').on('click', inputsIntake)
    $('#taskOutput').on('click', '.delete-button', removeTask)
    $('#taskOutput').on('click', '.complete-button', checkOffTask)
}


// ------------ < Display handlers > -------------------------------------------
function renderToDom(array){
    console.log('Rendering an array to the DOM');
    $('#taskOutput').empty()
    for (let object of array) {
        
        // Filters for changing "status" from booleans to strings
        if(object.status == false){
            object.status = 'In progress';
        } else if(object.status == true) {
            object.status = 'Completed'}
        
        // Filters for changing "priority" from Numbers to Strings
        if(object.priority == 1){
            object.priority = "Low"
        } else if(object.priority == 2){
            object.priority = "Medium"
        } else if(object.priority == 3){
            object.priority = "High"
        }

        $('#taskOutput').append(`
        <tr data-id=${object.id}>
            <td>${object.task}</td>
            <td class="priority-row">${object.priority}</td>
            <td class="status-row">${object.status}</td>
            <td>
                <button class="complete-button">Mark Complete</button>
                <button class="delete-button" data-id=${object.id}>Delete</button>
            </td>
        </tr>`)
    }
}
// ------------ < // END Display handlers > ------------------------------------

// ------------ < Input/Output logic handling > --------------------------------
function inputsIntake() {// <-- this grabs the data from the input field and packs it in an object
    
    let newTaskObject = { 
        task: $('#task-intake').val(),
        priority: $('#priority-selector').val()
    }
    if (newTaskObject.task === ''){
        alert('Please write a task!')
        return;
    }
    if (newTaskObject.priority == undefined) {
        alert('Please select a priority level')
        return;
    }
    console.log('new task:', newTaskObject); // <-- test to ensure proper data is packed up
    
    // These reset the inputs
    $('#task-intake').val('')
    $('#priority-selector').prop('selectedIndex',0);

    // This triggers the POST request to the server.
    addTasks(newTaskObject)
}
// ------------ < // END Input/Output logic handling > -------------------------


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
function addTasks(newTaskObject){
    console.log('Adding new task!'); //<-- Test to ensure this stage is being reached

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
function checkOffTask(){
    let checkId = $(this).parents('tr').data().id
    let status = $(this).parent().siblings('.status-row').text()
    console.log(`checkOffTask: Selected: ${checkId} - ${status}`);

    $.ajax({
        method: "PUT",
        url: `/tasks/${checkId}`,
        data: {
            status: status
        }
    }).then(function(response){
        console.log('checkOffTask: Response from server:', response); //<-- logs response contents in console for test purposes
        getTasks() //<--- New GET request to refresh the DOM
    }).catch(function(error){
        console.error('checkOffTask: No response from server:', error);//<-- logs the error
    })
}
// ------------ < // END PUT/UPDATE Routes > -----------------------------------


// ------------ < DELETE Routes > ----------------------------------------------
function removeTask() {
    let deleteId = $(this).data().id
    console.log('Removing page data, id:', deleteId);//<-- Test to ensure this stage is being reached
    
    $.ajax({
        method: "DELETE",
        url: `/tasks/${deleteId}`
    }).then(function(response){ // If the server responds...
        console.log('removeTask: Response from server:', response); //<-- logs response contents in console for test purposes
        getTasks() //<--- Triggers a new GET request to refresh the DOM
    }).catch(function(error) { // In case of no response/error...
      console.error('removeTask: No response from server:', error);//<-- logs the error
    })
}
// ------------ < // END DELETE Routes > ---------------------------------------