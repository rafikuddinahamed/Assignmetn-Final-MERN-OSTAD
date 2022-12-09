const {client} = require("./dbConfig");

const updateMultipleDoc = async ()=>{
    try {
        const database = client.db("s");
        const users = database.collection("students");

        const filter = {};
        const updateDoc = {
            $set: {
                isEmployee: true,
            },
        };
        const result = await users.updateMany(filter, updateDoc);
        console.log(`Updated ${result.modifiedCount} documents`);
    }
    catch (error) {
        console.log(error)
    }
    finally {
        await client.close();
    }
}
updateMultipleDoc()