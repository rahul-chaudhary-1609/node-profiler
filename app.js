import Express from "express";
import { SERVER_CONFIG } from "./constants.js";
import routes from "./src/routes.js";


const app = new Express();

app.use('/v1',routes);

app.listen(SERVER_CONFIG.port,(err)=>{
    if(err){
        console.log("Error occurred during server startup",err)
    }else{
        console.log(`Server Started on ${SERVER_CONFIG.port}`)
    }
}) 