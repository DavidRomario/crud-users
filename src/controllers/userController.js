const userSchema = require("../models/userModel");

const getUserById = async (req, res) => {
  const requestedId = req.params.id;
  console.log("ID REQUERIDO", requestedId);
try {
    const user = await userSchema.findById(requestedId);
    res.status(200).send({
      message: "Usuario encontrado",
      user,
    });

} catch {
      return res.status(404).send("Usuario não encontrado");

}


};

const createUser = async (req, res) => {
  try {
    const newUser = new userSchema(req.body);
    console.log("Usario criado".newUser);

    const savedUser = await newUser.save();
    console.log("Usuario salvo no banco", savedUser);

    res.status(201).send({
      message: "Novo usuario criado com sucesso",
      savedUser,
    });
  } catch (e) {
    console.error(e);
  }
};
const updateUser = async (req, res) => {
  //
};
const deleteUser = async (req, res) => {
  //
};

module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};