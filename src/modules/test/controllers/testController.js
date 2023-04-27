import { ApiResponse } from "../../../utils/utils.js";
import TestService from "../services/testService.js";

const TestController = {};

TestController.normalTask = async function(req,res,next){
    try {
        let responseData = await TestService.normalTask(req.query);
        ApiResponse.success(req,res,responseData,"success",200);
    } catch (error) {
        console.log(error)
        ApiResponse.error(req,res,error,`Error in 'nomalTaskController'`,500)
    }
}

TestController.complexTask = async function(req,res,next){
    try {
        let responseData = await TestService.complexTask(req.params);
        ApiResponse.success(req,res,responseData,"success",200);
    } catch (error) {
        throw new Error("Test error controller")
        ApiResponse.error(req,res,error,`Error in 'complexTaskController'`,500)
    }
}


export default  TestController;