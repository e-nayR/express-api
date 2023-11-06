const { where } = require("sequelize");
const db = require("../models/index");

const commentAdd = async (req, res) => {
  const user_id = req.userId;
  const task_id = req.params.id;
  const body = req.body.comment;

  if(body == null){
    res.status(400).json({
      message:"O título da task não pode ser vazio"
    })
  }

  await db.Comment.create({
    comment: body,
    user_id,
    task_id,
  }).then(()=>{
    res.status(201).json({ message: "comentário adicionado!" });
  })
  .catch((err)=>{
    res.status(405).json(err)
  })
};

const commentShow = async (req, res) => {
  const task = await db.Task.findOne({ where: { id: req.params.id } });
  if (!task) {
   return res.status(404).json({ message: "Essa task não existe!" });
  }

  await db.Comment.findAll({
    where: {
      task_id: task.id,
    },
    attributes: ["comment"],
  }).then((name) => {
    return res.status(200).json(name);
  });
};

const myComments = async (req, res) => {
  await db.Comment.findAll({
    where: {
      user_id: req.userId,
    },
    attributes: ["id","comment"]
  }).then((name) => {
    return res.status(200).json(name);
  });
};

const commentDel = async (req, res) => {
  const comment = await db.Comment.findOne({where:{id: req.params.id}})
  if(!comment){
    return res.status(404).json({
      message: "esse comentário não existe!",
    });
  }
  await db.Comment.destroy({
    where: {
      id: comment.id,
    },
  }).then(() => {
    res.status(200).json({
      message: "comentário apagado",
    });
  });
};

module.exports = {
  commentAdd,
  commentShow,
  myComments,
  commentDel,
};
