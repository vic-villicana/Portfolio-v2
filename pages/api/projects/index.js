import {MongoClient} from 'mongodb'

export default async function handler(req, res){
    let client
    if(req.method === "GET"){
        try{
            const clientString = `mongodb+srv://ocelot:NMUvk0cofvfdD2gX@cluster0.kpfoh1o.mongodb.net/?retryWrites=true&w=majority`
            client = await MongoClient.connect(clientString)

        }catch(err){
            res.status(500).json({message:'server error'})
        }

        try{
            const db = client.db("mgmt_db")
            const allProjects = await db.collection("projects").find({}).toArray()
            res.status(200).json({projects: allProjects})

        }catch(err){
            res.status(500).json({message:'server error'})
        }
        client.close()


    }
}