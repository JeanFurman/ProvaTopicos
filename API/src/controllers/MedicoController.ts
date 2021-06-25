import {Request, Response } from "express";
import MedicoSchema from "../models/MedicoSchema";

class MedicoController{
    async listar(request: Request, response: Response){
        const medicos = await MedicoSchema.find();
        response.status(200).json(medicos);
    }

    async buscarPorCrm(request: Request, response: Response){
        try{
            const{crm} = request.params;
            const medicoBusca = await MedicoSchema.find({crm: crm});
            response.status(200).json(medicoBusca);
        } catch(error){
            response.status(400).json(error);
        }
       
    }

    async cadastrar(request: Request, response: Response){
        try{
            const medicoJson = request.body;
            const medicoValidacao = await MedicoSchema.findOne({crm : medicoJson.crm});
            if(medicoValidacao == null){
                const newMedico = await MedicoSchema.create(medicoJson);
                response.status(201).json(newMedico);
            }
            response.status(404).json({ msg:"O medico ja existe!"});
            
        }catch(error){
            response.status(400).json(error);
        }
    }

    async remover(request: Request, response: Response){
        try{
            const{crm} = request.params;
            const medicoDelete:any = await MedicoSchema.findOne({crm : crm});
            await MedicoSchema.deleteOne(medicoDelete);
            response.status(200).json({ msg:"O medico foi excluído!"});
        } catch(error){
            response.status(400).json(error);
        }
    }

    async alterar(request: Request, response: Response){
        try{
            const medico = request.body;
            const medicoId = medico._id;
            const alterarMedico:any = await  MedicoSchema.findOne({_id : medicoId});
            await MedicoSchema.updateOne(alterarMedico, medico);
            response.status(200).json("Médico alterado com sucesso!");
        } catch(error){
            response.status(400).json(error);
        }
    }

}

export {MedicoController};