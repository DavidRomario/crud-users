const mongoose = require("mongoose"); // biblioteca que permite mexer no banco de dados pelo javascript

// schema = collection. A mesma collection que ta no banco de dados é a mesma que vai estar no código.
const productSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    
  },
  imagem: {
    type: String,
    
  },
  valor: {
    type: String,
    required: false,
  },
  descricao: {
    type: String,
    required: false,
  },
  genero: {
    type: String,
    required: false,
  },
  parcela: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("products", productSchema);
