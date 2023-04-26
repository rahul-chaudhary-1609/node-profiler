import testRouter from "./modules/test/routes.js";
import Express  from "express";

const mainRouter = Express.Router();

mainRouter.use('/test',testRouter)

export default mainRouter;