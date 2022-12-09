const {client} = require("./dbConfig");

const updateSingleDoc = async ()=>{
    try {
        const database = client.db("s");
        const users = database.collection("students");

        const filter = { name: "Rafik Uddin Ahamed Tain" };

        const options = { upsert: true };

        const updateDoc = {
            $set: {
                country: "Bangladesh"
            },
        };

        const result = await users.updateOne(filter, updateDoc, options);
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );

    }
    catch (error) {
        console.log(error)
    }

    finally {
        await client.close();
    }
}

updateSingleDoc()