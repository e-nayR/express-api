var express = require("express");
const {getAll, createUser, updateName, detailUser, deleteUser} = require("../src/controllers/users")
const router = express.Router();
const {middlewareAuth} = require("../middleware/auth");
const { myComments, commentDel } = require("../src/controllers/comments");
const { login, forgetPass, newPass } = require("../src/controllers/auth");


// CRUD Routes /users
router.post('/', createUser);
router.get('/', middlewareAuth , getAll); 
router.put('/user',middlewareAuth, updateName);
router.get('/user', middlewareAuth, detailUser);
router.delete('/delete',middlewareAuth , deleteUser);
router.post('/login', login);
router.post('/user/forget-password',forgetPass);
router.put('/user/new-password',newPass);

// users/comments
router.get('/my-comments', middlewareAuth, myComments);
router.delete('/my-comments/:id', middlewareAuth, commentDel);

module.exports = router;