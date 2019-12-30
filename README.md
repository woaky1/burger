# burger
An app for... logging burgers you want to eat. (It's a homework assignment.)


## App Organization
This app is organized in an MVC type fashion.

1. Model: The model establishes the database and its initial contents as well and establishing a connection to the database and creating the object-relational modele used to send data back and forth between the user, the app, and the database. Files in this group include:
    * schema.sql
    * seeds.sql
    * connection.js
    * orm.js
    * burger.js

2. Control: The control files deal with handling the requests from the user and giving the user back their desired response by grabbing the necessary data from the database. Files include:
    * burger-controller.js
    * server.js

3. View: These files make up the front end of the app, and allow the user to interact with the app and display the responses from the backend. Files include:
    * The files within the 'views' folder.
    * The files within the 'public' folder.

## How to use the app
1. Go to https://young-earth-36081.herokuapp.com/.
2. Enter in a delicious burger idea and watch as it gets listed to the "To Devour" List.
3. Have you managed to devour a burger on the list? Hit the "Devour it!" button beside that burger and it will be added to the "Devoured" list.
4. Go eat a salad! All that red meat is gonna add up, friend!

## Tech Used
Actually, it took a fair amount of tech to get this simple app up and running.
* On the front end, I'm using some Bootstrap to help with styling.
* On the back end, I'm using several node modules, including Express.js and Express Handlebars to help with passing data to the front end, as well as mySQL to communicate with the database.
* I've deployed the app using Heroku, and I'm also using JawsDB so that the database doesn't live on my laptop!

## About Me
I'm a student at Northwestern's Coding Bootcamp. Burger is a homework assignment at the school designed to help me learn full-stack development as well as make me crave fast food. Thanks for stopping by and checking it out!