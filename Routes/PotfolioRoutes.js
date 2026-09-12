const express=require("express");
const { sendEmailController } = require("../Controller/PortfolioController");

const routes=express.Router();

routes.post("/sendemail",sendEmailController);
module.exports={routes}