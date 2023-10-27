var express = require("express");
const { createTask, listTask, editTask, detailTask, deleteTask, finishTrue, finishFalse, changeStatus } = require("../src/controllers/tasks");
const router = express.Router();
const db = require('./../src/models/index');
const { commentAdd, commentShow } = require("../src/controllers/comments");

// CRUD Routes /tasks
router.get('/', listTask);
router.get('/done', finishTrue);
router.get('/to-do', finishFalse);
router.post('/new', createTask);
router.put('/edit/:id', editTask);
router.get('/:id', detailTask);
router.delete('/trash/:id', deleteTask);
router.get('/:id/check', changeStatus);

// task/comments
router.post('/:id/comments', commentAdd)
router.get('/:id/comments', commentShow)

module.exports = router;