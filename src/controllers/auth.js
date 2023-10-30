const db = require("../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;

  if (email && pass) {
    //valida se existe

    const user = await db.User.findOne({
      where: {
        email: email, // chama o user com esse email -> adicionar uma restrição de email tbm!
      },
    });

    if (user != null) {
      if (!(await bcrypt.compare(pass, user.password))) {
        // compara as senhas
        return res.status(404).json({
          message: "Error! Credenciais invalidas..",
        });
      }
      const token = jwt.sign({ id: user.id }, "TOKEN1RY4N3UN1C", {
        expiresIn: "1 h",
      });
      return res.status(200).json({
        user: user.name,
        message: "Você está logado", // caso tudo (email e senha) esteja ok, ele manda um token
        token: token,
      });
    }
    return res.status(404).json({
      message: "Error! Credenciais invalidas..",
    });
  }
  return res.status(406).json({
    message: "Error! Insira um email e senha..", // caso body seja null ou tenha algum valor diferente de email e senha
  });
};

/*enviar email com um token*/
const forgetPass = async (req, res) => {
  const email = req.body.email;
  // return res.send(email)
  try {
    const user = await db.User.findOne({
      where: { email: email },
    });
    if (!user) {
      return res.status(404).send({ error: "user not found" });
    }
    //return res.send(user)

    const token = randomStr.randomBytes(6).toString("hex");
    const date = new Date();
    //date.setHours(date.getHours() + 1);
    date.setMinutes(date.getMinutes() + 30);

    await db.User.update(
      {
        recovery_key: token,
        timeExpireKey: date,
      },
      {
        where: {
          id: user.id,
        },
      }
    );

    mailer.sendMail(
      {
        to: "ryane.feitosa@catskillet.com",
        from: "ryane.feitosa@catskillet.com",
        template: "../mailtrap/mail/forget-password",
        context: { token },
      },
      (err) => {
        if (err) {
          res.status(400).json({ message: "temos um problema..." });
        }
        res.status(200).json({
          message:
            "Caso, esse email esteja cadastrado, enviaremos o código de redefinição",
        });
      }
    );
  } catch {
    res.status(406).send({ error: "try again" });
  }
};

/*usar o token para alterar a senha*/
const newPass = async (req, res) => {
  const { email, token, newpassword } = req.body;
  const date = new Date();
  //return res.send([email,token,newpassword,date])
  try {
    const user = await db.User.findOne({
      where: {
        email: email,
      },
      attributes: ["id", "recovery_key"],
    });
    if (!user) {
      return res.status(404).json({ message: "User não encontrado" });
    }
    if (token !== user.recovery_key) {
      return res.status(401).json({ message: "token inválido" });
    }
    if (date == user.timeExpireKey) {
      return res.status(401).json({ message: "seu token expirou" });
    }

    await db.User.update(
      { password: newpassword },
      {
        where: { id: user.id },
        individualHooks: true,
      }
    )
      .then((changes) => {
        res.status(200).json({
          message: "senha alterada!",
        });
      })
      .catch((err) => {
        res.status(406).send(err);
      });
  } catch {
    res.status(404).send({ error: "try again" });
  }
};
module.exports = {
    login,
    forgetPass,
    newPass
};
