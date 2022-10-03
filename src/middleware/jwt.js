const jwt = require("jsonwebtoken"); // gerar token

const SECRET = process.env.SECRET;

function auth (req, res, next){
      const authHeader = req.get("authorization"); // header + token
      const token = authHeader.split(" ")[1]; // separar a string a partir do espaço e pegar o segundo valor

      if (!token) {
          return res.status(401).send("Erro no header");
      }

      jwt.verify(token, SECRET, (err) => {
          if (err) { // caso não exista
              return res.status(401).send("Não autorizado") // verificação de token
          }
          next();
      });
};

module.exports = {auth}