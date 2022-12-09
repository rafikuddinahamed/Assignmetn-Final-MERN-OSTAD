const {client} = require("./dbConfig");

const  findMultipleDoc = async () =>{
    try {
        const database = client.db("s");
        const users = database.collection("students");
        const query = {};

        const cursor = users.find(query);
        if ((await cursor.EstimatedDocumentCount) === 0) {
            console.log("No documents found!");
        }
        else {
            const users = await cursor.toArray();
            // replace console.dir with your callback to access individual elements
            await users.forEach(user=>console.log(user));
        }

    }
    catch (error) {
        console.log(error)
    }
    finally {
        await client.close();

    }
}

findMultipleDoc()