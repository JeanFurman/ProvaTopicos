import {model, Schema} from "mongoose";

const medicoSchema = new Schema(
{
    nome : {
        type: String,
        required: [true, "O campo NOME do ciclo e obrigatório!"]
    },
    crm : {
        type: String,
        required: [true, "O campo CRM do ciclo e obrigatório!"]
    },
    especialidade : {
        type: String,
        required: [true, "O campo ESPECIALIDADE do ciclo e obrigatório!"]
    },
},{
   timestamps: true 
});

export default model("medicos", medicoSchema);