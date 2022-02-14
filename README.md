# SQL - To-Do List

## Description

_Duration: Weekend Sprint_

This project was started to create a fun and functional task management app, which uses a server to connect a database to a client side browser. There is a simple setup of four basic route types, a Post, Get, Update, and Delete connecting the browser-side javascript client to the PostgreSQL run database. This uses client-side logic to prevent empty improperly filled inputs, and convert imported data into more user-friendly labels. 

<!--To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com) This will be updated once website is deployed-->

### Prerequisites

Link to software that is required to install the app to be hosted locally.

- [Node.js](https://nodejs.org/en/)
- [Postico](https://eggerapps.at/postico/)

## Installation


1. Create a database named `weekend-to-do-app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries, 
3. Run `npm run server` in your terminal
4. Run `npm run client` in your terminal
5. The `npm run client` command will open up a new browser tab for you!

## Usage

1. After setting up database, start the server with "npm start" 
2. Write your task in the input bar!
3. Select a priority level.
4. Click the "Add New Task" button.
5. Update the completion status of your tasks with the "Mark as complete" button.
6. Delete your finished tasks with the "Delete" button.


## Built With

- JQuery
- Express

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at krale006@umn.edu, or connect with me on [LinkedIn](https://www.linkedin.com/in/joshua-kralewski-846524210/)