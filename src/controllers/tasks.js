const db = require("../models/index");

//create a new task
const createTask = async (req, res) => {
  const body = req.body;
  body.userId = req.userId;

  await db.Task.create(body)
    .then(() => {
      return res.status(201).json({
        message: "new 'To Do' item!",
      });
    })
    .catch((err) => {
      return res.status(401).json({
        message: err,
      });
    });
};

// list all the task from the user logged
const listTask = async (req, res) => {
  const list = await db.Task.findAll({
    where: {
      userId: req.userId,
    },
    attributes: ["id", "title", "finished", "createdAt"],
    include:{
      model: db.Comment,
      attributes:['comment']
    }
  });
  
  return res.status(200).json({
    My_Tasks: list
  });
};

// list all tasks that are done
const finishTrue = async (req, res) => {
  const list = await db.Task.findAll({
    where: {
      userId: req.userId,
      finished: true,
    },
    attributes: ["id", "title", "finished"],
  });
  return res.status(200).json({
    Done: list,
  });
};

// list all tasks that are to do
const finishFalse = async (req, res) => {
  const list = await db.Task.findAll({
    where: {
      userId: req.userId,
      finished: false,
    },
    attributes: ["id", "title", "finished"],
  });
  return res.status(200).json({
    Do: list,
  });
};

// edit the task
const editTask = async (req, res) => {
  const params = req.params.id;
  const body = req.body
  await db.Task.update(body, {
    where: {
      id: params,
      userId: req.userId,
    }
  })
    .then(() => {
      return res.status(200).json({
        message: "Task atualizada",
      });
    })
    .catch((err) => {
      return res.status(404).json({
        error: "Você não possui nenhuma task com esse ID",
      });
    });
};

// get a especific task
const detailTask = async (req, res) => {
  const params = req.params.id;

  await db.Task.findOne({
    where: {
      id: params,
      userId: req.userId,
    },
    include:{
      model: db.Comment,
      attributes:['comment']
    }
  })
    .then((find) => {
      return res.status(200).json({
        message: find,
      });
    })
    .catch((err) => {
      return res.status(404).json({
        error: "Task not found",
      });
    });
};

// delete a task
const deleteTask = async (req, res) => {
  const params = req.params.id;

  const id = await db.Task.findOne({
    where: {
      id: params,
    },
  });
  if (id == null) {
    return res.status(404).json({
      error: "Essa task não existe",
    });
  }
  await db.Task.destroy({
    where: {
      id: params,
      userId: req.userId,
    },
  })
    .then(() => {
      return res.status(200).json({
        message: "task apagada",
      });
    })
    .catch((err) => {
      return res.status(406).json({
        error: "Não foi possível excluir essa task",
      });
    });
};

// change if the task is 'done', it's changed to 'to do' - virse versa
const changeStatus = async (req, res) => {
  const task = req.params.id;

  try {
    const answer = await db.Task.findOne({
      where: {
        id: task,
      },
      attributes: ["finished"],
    });
    
    if (answer.finished == false) {
      const status = true;
      answer.finished = status;
    } else {
      const status = false;
      answer.finished = status;
    }
  
    await db.Task.update(
      { finished: answer.finished },
      {
        where: {
          id: task,
        },
      }
    )
      .then(() => {
        return res.status(200).json({
          message: "Task atualizada",
        });
      })
      .catch((err) => {
        return res.status(405).json({
          error: err,
        });
      });
  } catch (error) {
    res.status(401).send(error)
  }
  
};

module.exports = {
  createTask,
  listTask,
  editTask,
  detailTask,
  deleteTask,
  finishTrue,
  finishFalse,
  changeStatus,
};
