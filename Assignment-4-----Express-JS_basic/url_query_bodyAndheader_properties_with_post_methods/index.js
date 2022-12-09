var express = require('express');
app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())



/*      Post Request With URL Query

app.post('/', function(req, res){
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.send(firstName + " " + lastName)
})

*/



/*      Request Header with Post Methods

app.post('/', function (req, res){
    let userName = req.header('userName')
    let password = req.header('password')
    res.send(" User Name : " + userName+ " " + " Password : " + password)
})

*/


/*

//Working with JSON Body

//install this packege --- ( body-parser ) => for Working Wtih Json
//1st Step(command terminal) ---  npm install body-parser
//2nd step (require body-arser) --- var bodyParser = require('body-parser')
//3rd step ---    app.use(bodyParser.json()) >>for read json file



app.post('/', function(req, res){
    let JSONData = req.body;
    let JSONString = JSON.stringify(JSONData)
    res.send(JSONData)
})


*/



app.listen(8000, ()=>{
    console.log("Server Run Success");
})