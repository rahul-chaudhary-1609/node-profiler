import profiler from "../../../utils/profiler.js";

const TestService = {};

TestService.normalTask = async function(params){
    let title = `${Date.now()}`;
    profiler({title}).start();
    console.log(params)
    for(let i=0;i<=1000;i++){console.log(i)} 
    console.log(params)
    profiler({title}).stop();
    return params;
}

TestService.complexTask = async function(params){
    let title = `${Date.now()}`;
    profiler({title}).start();
    console.log(params)
    for(let i=0;i<=10000;i++){console.log(i)} 
    console.log(params)
    profiler({title}).stop();
    return params;
}

export default  TestService;