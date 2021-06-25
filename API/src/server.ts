import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import {router} from "./config/routes";
import {mongoose} from "./config/database";
const app = express();
const db = mongoose;

app.use(express.json());
app.use(cors()); 
app.use(router);

app.listen(3000, function(){   
    console.log("O servidor esta rodando...");
});