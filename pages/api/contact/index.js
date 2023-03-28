import {MongoClient} from 'mongodb'

export default async function handler(req, res) {
    const client = await MongoClient.connect('mongodb+srv://ocelot:NMUvk0cofvfdD2gX@cluster0.kpfoh1o.mongodb.net/?retryWrites=true&w=majority')

    if(req.method === "POST"){
   
        const submitObj = {
            name: req.body.name,
            email: req.body.email,
            message:req.body.message
        }
    //here we can make a call to our mongoose models to create and send data to our database     
    
        
        const db = client.db("mgmt_db");

        await db.collection('messages').insertOne({ submitObj })
        client.close()
        console.log(submitObj)
        res.status(201).json({message: 'it worked'})
    }

    if(req.method === "GET"){
        const db = client.db("mgmt_db")

        const  allMessages = await db.collection("messages").find({}).sort({_id:-1}).toArray()
        console.log(allMessages)

        res.status(200).json({messages: allMessages })
    }
}