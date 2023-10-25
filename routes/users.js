var express = require("express");
const {getAll, createUser, updateName, detailUser, deleteUser, login, forgetPass, newPass} = require("../src/controllers/users")
const router = express.Router();
const {middlewareAuth} = require("../middleware/auth")


// CRUD Routes /users
router.post('/', createUser);
router.get('/', middlewareAuth , getAll); 
router.put('/user',middlewareAuth, updateName);
router.get('/user', middlewareAuth, detailUser);
router.delete('/delete',middlewareAuth , deleteUser);
router.post('/login', login);
router.post('/user/forget-password',middlewareAuth , forgetPass);
router.put('/user/new-password', middlewareAuth ,newPass);

module.exports = router;