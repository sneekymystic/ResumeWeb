//One server accomodates different routes 

const express = require("express");

const app = express();

//localhost:3000
const port = 3000;

//Gets are different routes
app.get('/',(req,res)=>{
    res.send('Here is a response');
});

app.get('/name',(req,res)=>{
    res.send("My name is Chandni");
});

app.get('/json',(req,res)=>{
res.json({name: 'Chandni'});
});

//Runs Server   
app.listen(port,()=>{
    console.log(`Server is running successfully on port ${port}`);
}); 