const productSchema = require("../models/productModel");

const SECRET = process.env.SECRET

// listagem de todos os produtos
const getAll = async (req, res) => {


  productSchema.find((err, products) => {
    if (err) {
      res.status(500).send({
        message: err.message
      });
    }
    res.status(200).send(products);
  });
};


// listagem de um unico produto
const getProductById = async (req, res) => {

  //acessar id do produto
  const requestedId = req.params.id;
  console.log("ID REQUERIDO", requestedId);
  try {
    //verificar se produto existe
    const product = await productSchema.findById(requestedId);
    res.status(200).send({
      message: "produto encontrado",
      product,
    });

  } catch {
    // se produto não existir
    return res.status(404).send("produto não encontrado");

  }


};

// criação de produto
const createProduct = async (req, res) => {

};
const deleteProduct= async (req, res) => {

  // acessar id produto
  const productId = req.params.id;
  console.log("ID Requerido", productId)

  // verificar se produto existe
  try {
    const product = await productSchema.findById(productId);
    // se existir, deletar
    const deleteProductData = await productSchema.deleteOne({
      _id: productId
    })

    //resposta
    return res.status(200).send({
      message: "produto deletado"
    })

    // senão, user não encontrado
  } catch {
    return res.status(404).send("produto não encontrado");

  }

};

const insertAllProducts = async (req, res) => {
  // recebe todos os produtos num array

  try {
     const products = req.body.products;

  for (let i in products) {
    // itera os dados um a um 
    const product = products[i];
    console.log(product);
    // insere cada um dos produtos no banco de dados
    await productSchema.create({
      nome: product.nome,
      imagem: product.imagem,
      valor: product.valor,
      descricao: product.descricao,
      genero: product.genero,
      parcela: product.parcela
    });

  }
  return res.status(200).send("Produtos inseridos com sucesso");
  } catch (error) {
    return res.status(500).send(error);
  }
 
}

module.exports = {
  getAll,
  getProductById,
  createProduct,
  deleteProduct,
  insertAllProducts
};