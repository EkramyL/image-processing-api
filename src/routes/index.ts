import express from "express";
import images from "./api/images";
import main from "./api/main";
const routes = express.Router();

// routes.use("/", main);
routes.use("/", images);

export default routes;
