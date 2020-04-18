import * as mongoose from "mongoose";

const PaginasSchema = new mongoose.Schema({
  titulo: { type: String },
  data: { type: String },
  situacao: { type: String },
  assunto: { type: String },
  autor: { type: String },
  ementa: { type: String },
  tramite: [{ 
      projeto:{type:String},
      assunto:{type:String},
      entrada:{type:String},
      prazo:{type:String},
      devolucao:{type:String},
   }]
});


const Paginas = mongoose.model("Paginas", PaginasSchema);

export default Paginas;
