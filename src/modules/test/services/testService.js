import { Logger } from "../../../../logger/logger.js";
import profiler from "../../../../profiler/profiler.js";
import { addData, getData } from "../models/testTable.js";


const TestService = {};

TestService.addData = async function(params){
    let title = `${Date.now()}`;
    const profiler = Logger.startTimer();
    let query={
        name:params.name,
        age:params.age
    }
    const responseData = [];
    for(let i=0; i<=10; i++){
        responseData.push(await addData(query))
    }
    
    profiler.done({ message: `Logging message for ${title}`});
    return responseData;
}

TestService.getData = async function(params){
    const profiler = Logger.startTimer();
    // Logger.profile("test")
    let query = {}
    let response = await getData(query);
    profiler.done({ message: 'Logging message' });
    // Logger.profile("test",{level:"debug"})
    return response;
}

export default  TestService;