import {MongoClient} from 'mongodb'
export default async function handler(req, res){
    const client = await MongoClient.connect('mongodb+srv://ocelot:NMUvk0cofvfdD2gX@cluster0.kpfoh1o.mongodb.net/?retryWrites=true&w=majority')
    if(req.method === "GET"){
        const db = client.db("mgmt_db")
        const allProjects = await db.collection("projects").find({}).toArray()

        client.close()
        console.log(allProjects)
        res.status(200).json({projects: allProjects})
    }
}