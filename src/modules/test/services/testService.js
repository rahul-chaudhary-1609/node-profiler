import { Logger } from "../../../../logger/logger.js";
import profiler from "../../../../profiler/profiler.js";
import { addData } from "../models/testTable.js";


const TestService = {};

TestService.normalTask = async function(params){
    let title = `${Date.now()}`;
    profiler({title}).start();
    let query={
        name:params.name,
        age:params.age
    }
    const responseData = [];
    for(let i=0; i<=10; i++){
        responseData.push(await addData(query))
    }
    
    profiler({title}).stop();
    return responseData;
}

TestService.complexTask = async function(params){
    throw new Error("Test error service")
    return params;
}

export default  TestService;