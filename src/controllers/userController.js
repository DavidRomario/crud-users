const userSchema = require("../models/userModel");
// const bcrypt = require("bcrypt"); // criptografar a senha
// const jwt = require("jsonwebtoken"); // gerar token

const SECRET = process.env.SECRET

//try=tentativa/proteção codigo
// listagem de todos os usuarios
const getAll = async (req, res) => {


  userSchema.find((err, users) => {
    if (err) {
      res.status(500).send({
        message: err.message
      });
    }
    res.status(200).send(users);
  });
};


// listagem de um unico usuario
const getUserById = async (req, res) => {

  //acessar id do usuario
  const requestedId = req.params.id;
  console.log("ID REQUERIDO", requestedId);
  try {
    //verificar se usuario existe
    const user = await userSchema.findById(requestedId);
    res.status(200).send({
      message: "Usuario encontrado",
      user,
    });

  } catch {
    // se usuario não existir
    return res.status(404).send("Usuario não encontrado");

  }


};

// criação de usuario
const createUser = async (req, res) => {
  // const hashedPassword = bcrypt.hashSync(req.body.password, 10); // salvo dentro de uma variavel a função do bcrypt hashsinc, responsavel por pegar a senha que vem no body da requisição e transforma ela num hash criptografado
  // console.log(hashedPassword)

  // req.body.password = hashedPassword; // reatribuição de valor, passando a ser agora uma senha hasherizada

  try {
    const newUser = new userSchema(req.body);
    console.log("Usario criado", newUser);

    const savedUser = await newUser.save();
    console.log("Usuario salvo no banco", savedUser);

    //resposta do usuario criado
    res.status(201).send({
      message: "Novo usuario criado com sucesso",
      savedUser
    });
  } catch (e) {
    console.error(e);
  }
};
const updateUser = async (req, res) => {
  // acessar id do usuario
  const userId = req.params.id;
  console.log("ID Requerido", userId)

  // acessar dados a serem atualizados
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  // com o id encontrar o objeto a ser atualizado
  try {
    const user = await userSchema.findById(userId);
    // atualizar o objeto
    const updateUserData = await userSchema.updateOne({
      _id: userId
    }, {
      name: userName,
      email: userEmail,
      password: userPassword
    });

    const newUser = await userSchema.findById(userId);

    //resposta - enviar a resposta
    return res.status(200).send({
      message: "usuário atualizado com sucesso",
      newUser
    });

  } catch {
    // se usuario não existir
    return res.status(404).send("Usuario não encontrado");

  }
};
const deleteUser = async (req, res) => {

  // acessar id usuario
  const userId = req.params.id;
  console.log("ID Requerido", userId)

  // verificar se usuario existe
  try {
    const user = await userSchema.findById(userId);
    // se existir, deletar
    const deleteUserData = await userSchema.deleteOne({
      _id: userId
    })

    //resposta
    return res.status(200).send({
      message: "Usuario deletado"
    })

    // senão, user não encontrado
  } catch {
    return res.status(404).send("Usuario não encontrado");

  }

};

module.exports = {
  getAll,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};