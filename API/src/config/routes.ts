import { Router, Request, Response } from "express";
import {MedicoController} from "../controllers/MedicoController"

const router = Router();
const medicoController = new MedicoController();

router.get("/medico/listar", medicoController.listar);
router.get("/medico/buscar/:crm", medicoController.buscarPorCrm);
router.post("/medico/cadastrar", medicoController.cadastrar);
router.put("/medico/alterar", medicoController.alterar);
router.delete("/medico/remover/:crm", medicoController.remover);



export {router};