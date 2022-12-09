const { MongoClient } = require("mongodb");
require('dotenv').config()

// Create a new MongoClient

const client = new MongoClient(process.env.DATABASE);

console.log("Database connedted")
module.exports={client}




















/*
2nd time push data in github

git remote add origin https://github.com/rafikuddinahamed/-MongoDB_Crud_Operations.git
git branch -M main
git push -u origin main
*/





