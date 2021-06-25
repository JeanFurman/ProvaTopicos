import mongoose from "mongoose";

mongoose
.connect("mongodb+srv://topicos:topicos@topicoscluster.anhe0.mongodb.net/dbMedico?retryWrites=true&w=majority",
 {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
    console.log("Conexao feita")
})
.catch((erro) =>{
    console.log(`Erro: ${erro}`)
});

export{mongoose};