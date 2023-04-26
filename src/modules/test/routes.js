import Express from "express";
import TestController from "./controllers/testController.js";

const testRouter = Express.Router();

testRouter.get('/test',TestController.normalTask)
testRouter.get('/test/:t1',TestController.complexTask)

export default testRouter; 