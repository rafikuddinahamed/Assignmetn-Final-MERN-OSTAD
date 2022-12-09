const {client} = require("./dbConfig");

const  deleteSingleDoc = async ()=>{
    try {
        const database = client.db("s");
        const users = database.collection("students");

        const query = { name: "Fahim Ishtiaque" };

        const result = await users.deleteOne(query);

        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }console.log(`${query} is deleted`)

    }

    catch (error) {
        console.log(error)
    }
    finally {
        await client.close();

    }
}
deleteSingleDoc()