var fs=require('fs');
var http=require('http');
var server=http.createServer(function (req,res) {

    if(req.url=="/"){
        let data= fs.readFileSync('home.html');
        res.end(data);
    }
    else if(req.url=="/contact"){
        let data= fs.readFileSync('contact.html');
        res.end(data);

    }
    else if(req.url=="/about"){

        let data= fs.readFileSync('about.html');
        res.end(data);
    }

    else if(req.url=="/temms"){
        let data= fs.readFileSync('temms.html');
        res.end(data);
    }

});
server.listen(5050);

console.log(" Server Run Success ");
