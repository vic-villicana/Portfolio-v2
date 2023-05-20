import {MongoClient} from 'mongodb'

 async function connectDatabase() {
    const clientString = `mongodb+srv://ocelot:NMUvk0cofvfdD2gX@cluster0.kpfoh1o.mongodb.net/?retryWrites=true&w=majority`
    const client = await MongoClient.connect(clientString)
    return client
}

async function insertDocument(client, submitObj){
    const db = client.db("mgmt_db");

    await db.collection('messages').insertOne({ submitObj })
}

export default async function handler(req, res) {


    if(req.method === "POST"){
    
        let client
        try{
            client = await connectDatabase()

        }catch(err){
            res.status(500).json({message:'failed to connect'})
        }

        try{
            const submitObj = {
                name: req.body.name,
                email: req.body.email,
                message:req.body.message,
                service:req.body.service
            }
            await insertDocument(client, submitObj)
            client.close()
        }catch(err){
            res.status(500).json({message:'data insertion failed.'})
        }
        
        res.status(201).json({message: 'it worked'})
    }

    if(req.method === "GET"){
        const db = client.db("mgmt_db")

        const  allMessages = await db.collection("messages").find({}).sort({_id:-1}).toArray()
        console.log(allMessages)

        res.status(200).json({messages: allMessages })
    }
}