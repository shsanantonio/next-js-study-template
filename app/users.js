const express = require('express'); //imports the express module in which require() function specifies the name of the module as a string ('express')
const app = express(); // creates an express application object which is traditionally named app has methods for routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, and modifying application settings that control how the application behaves (e.g. the environment mode, whether route definitions are case sensitive, etc.)

app.get('/api/users', (req, res) => { //app.get specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root.
                                    //The callback function takes a request(req) and a response(res) object as arguments
    
    //Handle GET requests for /api/users
    const users = [
        {id:1, name: John},
        {id:2, name: Jane},
        {id:3, name: Bob}
    ];

    //Send the users as a response 
    res.json(users);
});

app.listen(3000, () => {//  starts up the server on a specified port ('3000')
    console.log('Server is listening on port 3000'); //With the server running, you could go to localhost:3000 in your browser to see the example response returned
});