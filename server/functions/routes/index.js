const routes= require('express').Router();
const admin = require('firebase-admin');


routes.get('/jwtVerify',async (req,res)=>{
    if(!req.headers.authorization){
        return res.status(404).send({success:false, msg:"Token not found"})
    }
try
{
    const token = req.headers.authorization.split(" ")[1];
    const decoded = await admin.auth().verifyIdToken(token);
if(decoded)
{
    return res.status(200).send({success:true, msg:`data : ${decoded}`})
}
else{
    return res.status(500).send({success:false, msg:`Token unmatched who are you really,your enetered token is ${token}`})
}
}
catch(err){
return res.status(500).send({success:false, msg:'Error when fetching token'})
}
})


routes.get('/', (req,res)=>{
    res.status(200).send({success:true, msg:"hullla"})
})
module.exports = routes;