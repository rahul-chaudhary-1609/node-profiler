import Express from "express";
import TestController from "./controllers/testController.js";

const testRouter = Express.Router();

testRouter.get('/add-data',TestController.addData)
testRouter.get('/get-data/:id',TestController.getData)

export default testRouter; 