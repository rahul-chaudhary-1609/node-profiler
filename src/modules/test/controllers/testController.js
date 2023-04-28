import { ApiResponse } from "../../../utils/utils.js";
import TestService from "../services/testService.js";

const TestController = {};

TestController.addData = async function(req,res,next){
    try {
        let responseData = await TestService.addData(req.query);
        ApiResponse.success(req,res,responseData,"success",200);
    } catch (error) {
        console.log(error)
        ApiResponse.error(req,res,error,`Error in 'nomalTaskController'`,500)
    }
}

TestController.getData = async function(req,res,next){
    try {
        let responseData = await TestService.getData(req.params);
        ApiResponse.success(req,res,responseData,"success",200);
    } catch (error) {
        ApiResponse.error(req,res,error,`Error in 'complexTaskController'`,500)
    }
}


export default  TestController;