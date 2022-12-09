const {client} = require("./dbConfig");

const findSingleDoc = async ()=>{
    try {
        const database = client.db("s");
        const users = database.collection("students");
        const query = { city: "Dhaka" };
        const cityName = await users.findOne(query);
        console.log(cityName)
    }
    catch (error) {
        console.log(error)
    }
    finally {
        await client.close();
    }
}
findSingleDoc()