//requisições
const db = require("../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mailer = require("../../mailtrap/mailer");
const randomStr = require("crypto");

// list all users
const getAll = async (req, res) => {
  const list = await db.User.findAll({
    attributes: ["id", "name"],
  });
  res.send(list);
};

//create a new user
const createUser = async (req, res) => {
  const body = req.body;

  await db.User.create(body)
    .then((result) => {
      console.log("Created User");
      res.status(201).json({
        message: "Your was created successfully!",
        user: result.name,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// update username
const updateName = async (req, res) => {
  const id = req.userId;
  await db.User.update(
    { name: req.body.name },
    {
      where: {
        id: id,
      },
    }
  )
    .then((changesUsuario) => {
      return res.json({
        message: "user update successful",
      });
    })
    .catch(() => {
      return res.json({
        message: "error!",
      });
    });
};

//get all info about the user
const detailUser = async (req, res) => {
  const id = req.userId;
  const user = await db.User.findOne({
    where: {
      id: id,
    },
  });
  if (user == null) {
    return res.json({
      user: "this user doesn't exist",
    });
  }
  return res.json({
    user: user,
  });
};

// delete user by id
const deleteUser = async (req, res) => {
  const id = req.userId;
  const user = await db.User.findOne({
    where: {
      id: id,
    },
  });
  if (user == null) {
    return res.json({
      message: "this user doesn't exist",
    });
  }
  await db.User.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      return res.json({
        message: "user deleted successful",
      });
    })
    .catch(() => {
      return res.json({
        message: "error!",
      });
    });
};

// LOGIN
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
        return res.json({
          message: "Error! Credenciais invalidas..",
        });
      }
      const token = jwt.sign({ id: user.id }, "TOKEN1RY4N3UN1C", {
        expiresIn: "1 h",
      });
      return res.json({
        user: user.name,
        message: "Você está logado", // caso tudo (email e senha) esteja ok, ele manda um token
        token: token,
      });
    }
    return res.json({
      message: "Error! Credenciais invalidas..",
    });
  }
  return res.json({
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
      return res.send({ error: "user not found" });
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
          res.json({ message: "temos um problema..." });
        }
        res.json({ message: "check your emailbox!" });
      }
    );
  } catch {
    res.send({ error: "try again" });
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
      return res.json({ message: "error" });
    }
    if (token !== user.recovery_key) {
      return res.json({ message: "token inválido" });
    }
    if (date == user.timeExpireKey) {
      return res.json({ message: "seu token expirou" });
    }

    await db.User.update(
      { password: newpassword },
      {
        where: { id: user.id },
        individualHooks: true,
      }
    )
      .then((changes) => {
        res.json({
          message: "senha alterada!",
        });
      })
      .catch((err) => {
        res.send(err);
      });
  } catch {
    res.send({ error: "try again" });
  }
};

module.exports = {
  getAll,
  createUser,
  updateName,
  detailUser,
  deleteUser,
  login,
  forgetPass,
  newPass,
};
