const {client} = require("./dbConfig");

const deleteMultipleDoc = async ()=>{
     try {
         const database = client.db("s");
         const users = database.collection("students");

         const query = {};

         const result = await users.deleteMany(query);

         console.log("Deleted " + result.deletedCount + " documents");

     }
     catch (error) {
         console.log(error)
     }
     finally {
         await client.close();
     }
}
deleteMultipleDoc()