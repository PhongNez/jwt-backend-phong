import express from "express";
const router = express.Router();
import homeController from '../controller/homeController'
import userController from '../controller/userController'

const controllerHelloWorld = (req, res) => {
    return res.send("Hello Phong")
}

const initWebRoutes = (app) => {
    router.get("/", homeController.handleHelloWorld)
    router.get("/user", userController.handleUser)
    router.post("/user/new", userController.handleCreatNewUser)
    router.post("/user/delete/:id", userController.handleDeleteUser)
    return app.use("/", router);
}

export default initWebRoutes;