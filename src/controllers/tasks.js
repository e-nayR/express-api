const db = require("../models/index");

//create a new task
const createTask = async (req, res) => {
  const body = req.body;
  body.userId = req.userId;

  await db.Task.create(body)
    .then(() => {
      return res.json({
        message: "new 'To Do' item!",
      });
    })
    .catch((err) => {
      return res.json({
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
  });
  return res.json({
    My_Tasks: list,
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
  return res.json({
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
  return res.json({
    Do: list,
  });
};

// edit the task
const editTask = async (req, res) => {
  const params = req.params.id;
  const body = req.body;

  await db.Task.update(body, {
    where: {
      id: params,
      userId: req.userId,
    },
  })
    .then(() => {
      return res.json({
        message: "task changed",
      });
    })
    .catch((err) => {
      return res.json({
        error: "You don't have a task with this id",
      });
    });
};

// get a especific task
const detailTask = async (req, res) => {
  const params = req.params.id;
  const body = req.body;

  await db.Task.findOne({
    where: {
      id: params,
      userId: req.userId,
    },
  })
    .then((find) => {
      return res.json({
        message: find,
      });
    })
    .catch((err) => {
      return res.json({
        error: "404! Task not found",
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
    return res.json({
      error: "task not exist",
    });
  }
  await db.Task.destroy({
    where: {
      id: params,
      userId: req.userId,
    },
  })
    .then(() => {
      return res.json({
        message: "task deleted",
      });
    })
    .catch((err) => {
      return res.json({
        error: "It isn't not possible delete this task",
      });
    });
};

// change if the task is 'done', it's changed to 'to do' - virse versa
const changeStatus = async (req, res) => {
  const task = req.params.id;
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
      return res.json({
        message: "task changed",
      });
    })
    .catch((err) => {
      return res.json({
        error: err,
      });
    });
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
