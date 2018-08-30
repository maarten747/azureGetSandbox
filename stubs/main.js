/**
 * Stock
 */

var searchStock = require('i08bStock.js');
 
// Overwriting the Azure Stock
Sandbox.define('/stock', 'POST', function(req, res){
    
    console.log('MDS in search stock call');
    return res.json(searchStock.searchStock(req.body) );
});




 
 /**
 * Order Simulate/Create
 */

var orderSimulate = require('i05OrderSimulate.js');
 
// Overwriting the Azure Order Simulate
Sandbox.define('/orders/simulations', 'POST', function(req, res){
    
    console.log('MDS test console');
    
    // 5 seconds
    for(i=0; i<14147483; i++){
        
    }
    
    return res.json( orderSimulate.createHeaderOrderJson(req.body) );
});

// Overwriting the Azure Order Create
Sandbox.define('/orders', 'POST', function(req, res){
    
    console.log('MDS test console');
    
    // 5 seconds
    for(i=0; i<14147483; i++){
        
    }
    
    return res.json( orderSimulate.createHeaderOrderJson(req.body) );
});
 
 

 

// A basic route returning a canned response
Sandbox.define('/hello', 'get', function(req, res) {
    // send 'Hello world' response
    res.send('Hello worldddd');
});


// Using stateful behaviour to simulate creating users
Sandbox.define('/users', 'POST', function(req, res) {
    // retrieve users or, if there are none, init to empty array
    state.users = state.users || [];
    
    // persist user by adding to the state object
    state.users.push(req.body);

    return res.json({status: "ok"});
});

// Using stateful behaviour to simulate getting all users
Sandbox.define('/users', 'GET', function(req, res) {
    // retrieve users or, if there are none init, to empty array
    state.users = state.users || [];

    return res.json(state.users);
});

// Using named route parameters to simulate getting a specific user
Sandbox.define('/users/{username}', 'GET', function(req, res) {
    // retrieve users or, if there are none, init to empty array
    state.users = state.users || [];

    // route param {username} is available on req.params
    var username = req.params.username;

    // log it to the console
    console.log("Getting user " + username + " details");

    // use lodash to find the user in the array
    var user = _.find(state.users, { "username": username});
    
    return res.json(user);
});