
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const admin = require('firebase-admin')

require('dotenv').config();

const serviceAccountKey = require('./serviceAccountKey.json')  //Firebase service account can be used to authenticate multiple Firebase features, such as Database, Storage and Auth

const express = require("express")
const app = express();
const cors = require('cors');


const route = require('./routes')
app.use(cors());

app.use(express.json())

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey)
})

app.use('/api/users',route);

 app.get('/',(req,res)=>{
    res.send("Hello there")
 })
const server = app.listen(3001,()=>{
    console.log("server is listening on port 3001");
})

