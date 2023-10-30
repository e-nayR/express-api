const jwt = require("jsonwebtoken");

// restringe o acesso apenas para usuários logados, ou seja, possuem um token válido
module.exports = {
  middlewareAuth: async function (req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Error! Entre com seu token para ter acesso",
      });
    }

    const [, token] = authHeader.split(" "); // token puro
    //console.log(token)
    if (!token) {
      return res.status(401).json({
        message: "Error! Aqui não querido",
      });
    }

    try {
      const decode = await jwt.verify(token, "TOKEN1RY4N3UN1C");
      req.userId = decode.id;
      return next();
    } catch (err) {
      return res.status(401).json({
        mesage: "Error! Token inválido..",
      });
    }
  },
};
