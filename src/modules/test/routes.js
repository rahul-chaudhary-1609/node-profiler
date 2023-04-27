import Express from "express";
import TestController from "./controllers/testController.js";

const testRouter = Express.Router();

testRouter.get('/normal',TestController.normalTask)
testRouter.get('/complex/:t1',TestController.complexTask)

export default testRouter; 