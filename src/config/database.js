//conexão com o banco de dados
const mongoose = require("mongoose"); // biblioteca que permite mexer no banco de dados pelo javascript

//conexão com meu .env
const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Banco conectado");
  } catch (error) {
    console.error("Erro: ", error.message);
  }
};

module.exports = {
  connect
};
