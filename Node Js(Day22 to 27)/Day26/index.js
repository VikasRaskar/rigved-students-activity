let express = require("express");
let parser = require("body-parser");
let cors = require("cors");
const req = require("express/lib/request");
const res = require("express/lib/response");
let mongoClient = require("mongodb").MongoClient;

let app = express();
let PORT = 5000;
let dbUrl ="mongodb://localhost:27017"

app.listen(PORT,()=>console.log(`Server is Running at ${PORT} port`));

app.use(parser.json());
app.use(cors());
app.get("/users", (request, response)=>{
    mongoClient.connect(dbUrl,{useNewUrlParser:true}, (error, client)=>{
        if(error) throw error;
        let db = client.db("Vikas_db");
        let curser = db.collection("user").find();
        let user = [];
        curser.forEach((doc, err)=>{
            if(err) throw err;
            user.push(doc);

        }, ()=>{
            response.json(user);
            client.close();
        });
    });
});
app.post("/users", (request, response)=>{
    let userDocument = request.body;
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client)=>{
        if(error) throw error;
        let db = client.db("Vikas_db");
        db.collection("user").insertOne(userDocument, (err, res)=>{
            if(err){
                response.status(409).json({"message": `User with an id ${userDocument._id} exists`});
            }
            response.status(201).json(res);
            client.close();
        });

    });
});

app.get("/users/:id", (request, response)=>{
    let id = parseInt(request.params.id);
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client)=>{
        if(error) throw error;
        let db= client.db("Vikas_db");
        db.collection("user").findOne({_id:id})
        .then((doc)=>{
            if(doc != null){
                response.json(doc);

            }else{
                response.status(404).json({"message":`Sorry ${id} doesn't exist`});
            }
            client.close();
        });
    });
}); 

app.delete("/users/:id",(request, response)=>{
    let id = parseInt(request.params.id);
    mongoClient.connect(dbUrl, {useNewUrlParser:true}, (error, client)=>{
        if(error) throw error;
        let db = client.db("Vikas_db");
        db.collection("user").deleteOne({_id:id})
        .then((doc)=>{
            response.json(doc);
            client.close();
        });
    });

});

app.put("/users/:id/:Name", (request, response)=>{
    let id = parseInt(request.params.id);
    let NewName = (request.params.Name);
    mongoClient.connect(dbUrl,{useNewUrlParser:true},(error, client)=>{
        if(error) throw error;
        let db = client.db("Vikas_db");
        db.collection("user").updateOne({_id:id},{$set:{Name : NewName}})
        .then((doc)=>{
            response.json(doc);
            client.close();
        })
    })
})