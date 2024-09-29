const express = require('express');
const OpenAi = require("openai")


const app = express();
const PORT = 3000;

//Authorization: Bearer OPENAI_API_KEY

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);