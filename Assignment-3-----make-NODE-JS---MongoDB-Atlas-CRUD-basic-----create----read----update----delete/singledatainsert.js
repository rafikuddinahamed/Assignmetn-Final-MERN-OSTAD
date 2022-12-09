const {client} = require("./dbConfig")


const  insetSingleDoc = async ()=>{
    try {
        const database = client.db("s");
        const users = database.collection("students");
        const doc = {
            name: "Rafik Uddin Ahamed Tain"
        }
        const result = await users.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    }
    catch (error) {
        console.log(error)
    }
    finally {
        await client.close();
    }
}

insetSingleDoc()