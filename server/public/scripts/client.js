$(document).ready(readyNow);

function readyNow() {
    console.log('jquery is ready');
    // On page load/reload, this will retrieve data from the database
    getTasks();
}


// ------------ < GET/SELECT Routes > ------------------------------------------
function getTasks() {
    console.log('Refreshing page data');
    $.ajax({
        method: "GET",
        url: "/tasks"
    }).then(function(response){
        console.log('getTasks: Response from server:', response);
        
    }).catch(function(error) {
      console.error('getTasks: No response from server:', error);
        
    })
}
// ------------ < // END GET/SELECT Routes > -----------------------------------


// ------------ < POST/INSERT Routes > -----------------------------------------

// ------------ < // END POST/INSERT Routes > ----------------------------------


// ------------ < PUT/UPDATE Routes > ------------------------------------------

// ------------ < // END PUT/UPDATE Routes > -----------------------------------


// ------------ < DELETE Routes > ----------------------------------------------

// ------------ < // END DELETE Routes > ---------------------------------------