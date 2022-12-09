const {client} = require("./dbConfig")

const insertMultipleDoc = async ()=>{
    try {
        const database = client.db("s");
        const users = database.collection("students");
        const docs =[
            {
                name:"Abdul Rahman Talha",
                city:"Sylhet"
            },
            {
                name:"Habibur Rahman",
                city: "Dhaka"
            },
            {
                name:"Fahim Ishtiaque",
                city: "Chattagram"
            }

        ];
        const result = await users.insertMany(docs);
        console.log(`${result.insertedCount} documents were inserted`);

    }
    catch (error) {
        console.log(error)
    }
    finally {
        await client.close();
    }
}
insertMultipleDoc()