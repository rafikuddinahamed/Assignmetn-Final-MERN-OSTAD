const express = require('express');
app = express();

app.get("/imagefile", function (req, res){
   res.download("./uploads/images.png")
})

app.get("/pdffile", function (req, res){
    res.download("./uploads/pdffile.pdf")
 })

 app.get("/htmlfile", function (req, res){
    res.download("./uploads/htmlfile.html")
 })


app.listen(8000, ()=>{
    console.log("Server Run Success")
})

