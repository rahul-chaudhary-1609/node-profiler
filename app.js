import Express from "express";
import { SERVER_CONFIG } from "./constants.js";
import routes from "./src/routes.js";
import databaseConfig from "./config/db.js";
import { expressLogger, expressErrorLogger } from "./logger/logger.js";


const app = new Express();
app.use(expressLogger);
app.use('/v1',routes);
app.use(expressErrorLogger);

app.listen(SERVER_CONFIG.port,async(err)=>{
    if(err){
        console.log("Error occurred during server startup",err)
    }else{
        console.log(`Server Started on ${SERVER_CONFIG.port}`)
        databaseConfig().authenticate();
    }
})